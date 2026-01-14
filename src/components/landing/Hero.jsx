import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-bgApp-light dark:bg-bgApp-dark">
      {/* Gradient background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-transparent to-primary/5"></div>

      <div className="container py-28 grid gap-16 md:grid-cols-2 items-center">
        {/* Left Content */}
        <div>
          <span className="inline-block mb-4 rounded-full bg-primary/10 text-primary px-4 py-1 text-sm font-medium">
            Smart Personal Finance
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-textMain-light dark:text-textMain-dark">
            Take Control of Your{" "}
            <span className="text-primary">Finances</span>
          </h1>

          <p className="mt-6 text-lg text-textMuted-light dark:text-textMuted-dark max-w-xl">
            Track expenses, visualize spending patterns, manage budgets, and make
            smarter financial decisions — all from one powerful dashboard.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/register"
              className="px-6 py-3 rounded-md bg-primary text-white font-semibold hover:bg-primaryHover transition"
            >
              Get Started Free
            </Link>

            <Link
              to="/login"
              className="px-6 py-3 rounded-md border border-borderSubtle-light dark:border-borderSubtle-dark text-textMain-light dark:text-textMain-dark hover:bg-card-light dark:hover:bg-card-dark transition"
            >
              Login
            </Link>
          </div>
        </div>

        {/* Right Visual / Mock Preview */}
        <div className="hidden md:block">
          <div className="rounded-2xl bg-card-light dark:bg-card-dark border border-borderSubtle-light dark:border-borderSubtle-dark shadow-card p-6">
            <p className="text-sm text-textMuted-light dark:text-textMuted-dark mb-4">
              Dashboard Preview
            </p>

            <div className="space-y-4">
              <div className="h-4 rounded bg-gradient-to-r from-primary/40 to-primary/10 w-3/4"></div>
              <div className="h-4 rounded bg-gradient-to-r from-primary/40 to-primary/10 w-2/3"></div>
              <div className="h-4 rounded bg-gradient-to-r from-primary/40 to-primary/10 w-4/5"></div>
              <div className="h-4 rounded bg-gradient-to-r from-primary/40 to-primary/10 w-1/2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
