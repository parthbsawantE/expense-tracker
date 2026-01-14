import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
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
            Welcome back
          </h1>
          <p className="text-sm text-textMuted-light dark:text-textMuted-dark mt-1">
            Login to continue managing your expenses
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-4">
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
            Login
          </button>
        </form>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-textMuted-light dark:text-textMuted-dark">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-primary font-medium hover:underline"
          >
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
}
