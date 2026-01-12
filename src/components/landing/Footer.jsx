export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
        
        <p>© {new Date().getFullYear()} ExpenseTracker. All rights reserved.</p>

        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="#" className="hover:text-indigo-600">Privacy</a>
          <a href="#" className="hover:text-indigo-600">Terms</a>
          <a href="#" className="hover:text-indigo-600">Contact</a>
        </div>
      </div>
    </footer>
  );
}
