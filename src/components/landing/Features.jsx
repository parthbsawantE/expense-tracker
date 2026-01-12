export default function Features() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-gray-900">
            Everything you need to manage your money
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Powerful features designed to help you track, analyze and improve your financial habits with ease.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Feature 1 */}
          <div className="border rounded-xl p-6 hover:shadow-lg transition">
            <div className="text-yellow-500 text-3xl mb-4">📊</div>
            <h3 className="text-xl font-semibold mb-2">Smart Dashboard</h3>
            <p className="text-gray-600">
              Visualize your income and expenses using charts and analytics for better financial understanding.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="border rounded-xl p-6 hover:shadow-lg transition">
            <div className="text-yellow-500 text-3xl mb-4">💸</div>
            <h3 className="text-xl font-semibold mb-2">Budget Tracking</h3>
            <p className="text-gray-600">
              Set monthly budgets and get alerts when you're close to exceeding your spending limits.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="border rounded-xl p-6 hover:shadow-lg transition">
            <div className="text-yellow-500 text-3xl mb-4">📁</div>
            <h3 className="text-xl font-semibold mb-2">Export Reports</h3>
            <p className="text-gray-600">
              Download your transactions as CSV or PDF reports for easy sharing and record keeping.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
