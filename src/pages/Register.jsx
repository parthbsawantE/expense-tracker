import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-bgApp-light dark:bg-bgApp-dark px-4">
      <div className="w-full max-w-md bg-card-light dark:bg-card-dark border border-borderSubtle-light dark:border-borderSubtle-dark rounded-2xl shadow-card p-8">
        {/* Header */}
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-semibold text-textMain-light dark:text-textMain-dark">
            Create your account
          </h1>
          <p className="text-sm text-textMuted-light dark:text-textMuted-dark mt-1">
            Start tracking your expenses in minutes
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleRegister} className="space-y-4">
          <input
            type="email"
            placeholder="Email address"
            className="w-full rounded-md border border-borderSubtle-light dark:border-borderSubtle-dark px-3 py-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-primary"
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-md border border-borderSubtle-light dark:border-borderSubtle-dark px-3 py-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-primary"
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button className="w-full py-2 rounded-md bg-primary text-white font-medium hover:bg-primaryHover transition">
            Create Account
          </button>
        </form>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-textMuted-light dark:text-textMuted-dark">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-primary font-medium hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
