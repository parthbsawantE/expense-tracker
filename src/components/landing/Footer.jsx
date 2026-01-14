export default function Footer() {
  return (
    <footer className="bg-card-light dark:bg-card-dark border-t border-borderSubtle-light dark:border-borderSubtle-dark">
      <div className="container py-10 flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
        {/* Brand / Copyright */}
        <p className="text-textMuted-light dark:text-textMuted-dark">
          © {new Date().getFullYear()}{" "}
          <span className="font-medium text-textMain-light dark:text-textMain-dark">
            ExpenseTracker
          </span>
          . All rights reserved.
        </p>

        {/* Footer Links */}
        <div className="flex gap-6">
          <a
            href="#"
            className="text-textMuted-light dark:text-textMuted-dark hover:text-primary transition"
          >
            Privacy
          </a>
          <a
            href="#"
            className="text-textMuted-light dark:text-textMuted-dark hover:text-primary transition"
          >
            Terms
          </a>
          <a
            href="#"
            className="text-textMuted-light dark:text-textMuted-dark hover:text-primary transition"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
