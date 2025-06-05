import React from 'react';

interface HeaderProps {
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  return (
    <header className="bg-gray-800 shadow-sm p-4 flex justify-between items-center sticky top-0 z-10">
      <div className="flex items-center space-x-4">
        <button 
          onClick={onMenuClick}
          className="lg:hidden p-2 rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <h1 className="text-xl font-semibold text-white">Dashboard</h1>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative hidden sm:block">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 
                     bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
        <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center">
          <span className="text-gray-200 font-medium">MM</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
