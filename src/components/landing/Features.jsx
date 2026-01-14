export default function Features() {
  return (
    <section className="py-24 bg-bgApp-light dark:bg-bgApp-dark">
      <div className="container">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-textMain-light dark:text-textMain-dark">
            Everything you need to manage your money
          </h2>
          <p className="mt-4 text-lg text-textMuted-light dark:text-textMuted-dark max-w-2xl mx-auto">
            Powerful features designed to help you track, analyze, and improve
            your financial habits with ease.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {/* Feature 1 */}
          <div className="bg-card-light dark:bg-card-dark border border-borderSubtle-light dark:border-borderSubtle-dark rounded-2xl p-8 shadow-soft hover:shadow-card transition">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary text-2xl mb-6">
              📊
            </div>
            <h3 className="text-xl font-semibold mb-3 text-textMain-light dark:text-textMain-dark">
              Smart Dashboard
            </h3>
            <p className="text-textMuted-light dark:text-textMuted-dark">
              Visualize your income and expenses using clean charts and analytics
              for better financial understanding.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-card-light dark:bg-card-dark border border-borderSubtle-light dark:border-borderSubtle-dark rounded-2xl p-8 shadow-soft hover:shadow-card transition">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary text-2xl mb-6">
              💸
            </div>
            <h3 className="text-xl font-semibold mb-3 text-textMain-light dark:text-textMain-dark">
              Budget Tracking
            </h3>
            <p className="text-textMuted-light dark:text-textMuted-dark">
              Set monthly budgets and get notified when you’re close to exceeding
              your spending limits.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-card-light dark:bg-card-dark border border-borderSubtle-light dark:border-borderSubtle-dark rounded-2xl p-8 shadow-soft hover:shadow-card transition">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary text-2xl mb-6">
              📁
            </div>
            <h3 className="text-xl font-semibold mb-3 text-textMain-light dark:text-textMain-dark">
              Export Reports
            </h3>
            <p className="text-textMuted-light dark:text-textMuted-dark">
              Download your transactions as CSV or PDF reports for easy sharing
              and record keeping.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
