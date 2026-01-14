import { useEffect, useState } from "react";
import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  onSnapshot,
  updateDoc,
  Timestamp,
} from "firebase/firestore";
import { db } from "../services/firebase";
import useAuthStore from "../store/authStore";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const categories = ["Food", "Travel", "Rent", "Shopping", "Bills", "Other"];

export default function Transactions() {
  const { user } = useAuthStore();
  const [transactions, setTransactions] = useState([]);

  const [form, setForm] = useState({
    amount: "",
    type: "expense",
    category: "Food",
    note: "",
    date: "",
  });

  const [editingId, setEditingId] = useState(null);

  const [filterType, setFilterType] = useState("all");
  const [filterCategory, setFilterCategory] = useState("all");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  useEffect(() => {
    if (!user) return;
    const ref = collection(db, "users", user.uid, "transactions");
    const unsub = onSnapshot(ref, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTransactions(data);
    });
    return () => unsub();
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.amount || !form.date) return alert("Amount & Date required");

    const ref = collection(db, "users", user.uid, "transactions");

    if (editingId) {
      await updateDoc(doc(ref, editingId), {
        ...form,
        amount: Number(form.amount),
      });
      setEditingId(null);
    } else {
      await addDoc(ref, {
        ...form,
        amount: Number(form.amount),
        createdAt: Timestamp.now(),
      });
    }

    setForm({
      amount: "",
      type: "expense",
      category: "Food",
      note: "",
      date: "",
    });
  };

  const handleDelete = async (id) =>
    await deleteDoc(doc(db, "users", user.uid, "transactions", id));

  const handleEdit = (t) => {
    setForm(t);
    setEditingId(t.id);
  };

  const filteredTransactions = transactions.filter((t) => {
    if (filterType !== "all" && t.type !== filterType) return false;
    if (filterCategory !== "all" && t.category !== filterCategory) return false;
    if (fromDate && new Date(t.date) < new Date(fromDate)) return false;
    if (toDate && new Date(t.date) > new Date(toDate)) return false;
    return true;
  });

  const exportCSV = () => {
    const headers = ["Date", "Type", "Category", "Amount", "Note"];
    const rows = filteredTransactions.map((t) => [
      t.date,
      t.type,
      t.category,
      t.amount,
      t.note || "",
    ]);
    const csv =
      "data:text/csv;charset=utf-8," +
      [headers, ...rows].map((r) => r.join(",")).join("\n");
    const link = document.createElement("a");
    link.href = encodeURI(csv);
    link.download = "transactions.csv";
    link.click();
  };

  const exportPDF = () => {
    const pdf = new jsPDF();
    pdf.text("Transactions Report", 14, 10);
    autoTable(pdf, {
      head: [["Date", "Type", "Category", "Amount", "Note"]],
      body: filteredTransactions.map((t) => [
        t.date,
        t.type,
        t.category,
        t.amount,
        t.note || "",
      ]),
      startY: 20,
    });
    pdf.save("transactions.pdf");
  };

  return (
    <div className="min-h-screen bg-bgApp-light dark:bg-bgApp-dark text-textMain-light dark:text-textMain-dark">
      <div className="container py-8 max-w-5xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
          <h1 className="text-2xl font-semibold">Transactions</h1>

          <div className="flex gap-3">
            <button
              onClick={exportCSV}
              className="px-4 py-2 rounded-md bg-success text-white text-sm hover:opacity-90 transition"
            >
              Export CSV
            </button>
            <button
              onClick={exportPDF}
              className="px-4 py-2 rounded-md bg-danger text-white text-sm hover:opacity-90 transition"
            >
              Export PDF
            </button>
          </div>
        </div>

        {/* Add / Edit Transaction */}
        <div className="bg-card-light dark:bg-card-dark border border-borderSubtle-light dark:border-borderSubtle-dark rounded-2xl p-6 shadow-soft mb-10">
          <h2 className="text-lg font-semibold mb-4">
            {editingId ? "Edit Transaction" : "Add Transaction"}
          </h2>

          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-4">
            <input
              className="rounded-md border border-borderSubtle-light dark:border-borderSubtle-dark px-3 py-2 bg-transparent"
              placeholder="Amount"
              value={form.amount}
              onChange={(e) =>
                setForm({ ...form, amount: e.target.value })
              }
            />

            <select
              className="rounded-md border border-borderSubtle-light dark:border-borderSubtle-dark px-3 py-2 bg-transparent"
              value={form.type}
              onChange={(e) =>
                setForm({ ...form, type: e.target.value })
              }
            >
              <option value="expense">Expense</option>
              <option value="income">Income</option>
            </select>

            <select
              className="rounded-md border border-borderSubtle-light dark:border-borderSubtle-dark px-3 py-2 bg-transparent"
              value={form.category}
              onChange={(e) =>
                setForm({ ...form, category: e.target.value })
              }
            >
              {categories.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>

            <input
              type="date"
              className="rounded-md border border-borderSubtle-light dark:border-borderSubtle-dark px-3 py-2 bg-transparent"
              value={form.date}
              onChange={(e) =>
                setForm({ ...form, date: e.target.value })
              }
            />

            <input
              className="rounded-md border border-borderSubtle-light dark:border-borderSubtle-dark px-3 py-2 bg-transparent md:col-span-2"
              placeholder="Note"
              value={form.note}
              onChange={(e) =>
                setForm({ ...form, note: e.target.value })
              }
            />

            <button className="md:col-span-2 px-4 py-2 rounded-md bg-primary text-white hover:bg-primaryHover transition">
              {editingId ? "Update" : "Add"} Transaction
            </button>
          </form>
        </div>

        {/* Transactions List */}
        <div className="space-y-4">
          {filteredTransactions.map((t) => (
            <div
              key={t.id}
              className="bg-card-light dark:bg-card-dark border border-borderSubtle-light dark:border-borderSubtle-dark rounded-xl p-4 flex items-center justify-between shadow-soft"
            >
              <div>
                <p className="font-medium">
                  ₹{t.amount}{" "}
                  <span
                    className={
                      t.type === "income"
                        ? "text-success"
                        : "text-danger"
                    }
                  >
                    ({t.type})
                  </span>
                </p>
                <p className="text-sm text-textMuted-light dark:text-textMuted-dark">
                  {t.category} • {t.date} {t.note && `• ${t.note}`}
                </p>
              </div>

              <div className="flex gap-4 text-sm">
                <button
                  onClick={() => handleEdit(t)}
                  className="text-primary hover:underline"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(t.id)}
                  className="text-danger hover:underline"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}

          {filteredTransactions.length === 0 && (
            <p className="text-center text-textMuted-light dark:text-textMuted-dark">
              No transactions found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
