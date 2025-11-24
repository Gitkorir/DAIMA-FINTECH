export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="border-t border-gray-700 pt-8">
          <div className="bg-yellow-500 text-gray-900 p-4 rounded-lg mb-6">
            <p className="text-sm font-semibold text-center">
              ⚠️ DEMO/EDUCATIONAL PROJECT DISCLAIMER ⚠️
            </p>
            <p className="text-xs text-center mt-2">
              This is a demo website built for learning purposes only. No real
              loans are issued. No real payments are collected. All data is
              test/sandbox only. Do not submit real personal information.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © 2025 Daima Limited - Demo Project
            </p>
            <div className="flex space-x-6">
              <button className="text-sm text-gray-400 hover:text-white transition">
                Privacy Policy (Demo)
              </button>
              <button className="text-sm text-gray-400 hover:text-white transition">
                Terms & Conditions (Demo)
              </button>
              <button className="text-sm text-gray-400 hover:text-white transition">
                Apply for Loan
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
