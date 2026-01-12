import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="bg-[#0f172a] text-white">
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Take Control of Your <span className="text-yellow-400">Finances</span>
          </h1>

          <p className="mt-6 text-gray-300 text-lg">
            Track your expenses, visualize spending patterns, manage budgets, and make smarter financial decisions — all from one powerful dashboard.
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              to="/register"
              className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-300 transition"
            >
              Get Started Free
            </Link>

            <Link
              to="/login"
              className="px-6 py-3 border border-gray-500 rounded-lg hover:bg-white hover:text-black transition"
            >
              Login
            </Link>
          </div>
        </div>

        {/* Right Visual */}
        <div className="hidden md:block">
          <div className="bg-[#111827] border border-gray-700 rounded-xl p-6 shadow-lg">
            <p className="text-sm text-gray-400 mb-4">Dashboard Preview</p>

            <div className="space-y-3">
              <div className="h-4 bg-gray-700 rounded w-3/4"></div>
              <div className="h-4 bg-gray-700 rounded w-2/3"></div>
              <div className="h-4 bg-gray-700 rounded w-4/5"></div>
              <div className="h-4 bg-gray-700 rounded w-1/2"></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
