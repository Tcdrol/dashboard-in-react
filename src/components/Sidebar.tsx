import React from 'react';
import { NavLink } from 'react-router-dom';

interface SidebarProps {
  onNavigate?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onNavigate }) => {
  const navItems = [
    { name: 'Overview', icon: '🏠', path: '/' },
    { name: 'Users', icon: '👥', path: '/users' },
    { name: 'Analytics', icon: '📊', path: '/analytics' },
    { name: 'Settings', icon: '⚙️', path: '/settings' },
  ];

  const handleNavigation = () => {
    if (onNavigate) {
      onNavigate();
    }
  };

  return (
    <div className="w-64 bg-gray-800 text-white flex flex-col h-screen overflow-y-auto transition-colors duration-200 md:w-64 lg:w-64 xl:w-64 2xl:w-64">
      <div className="flex items-center space-x-3 p-4 border-b border-gray-700">
        <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold">
          DM
        </div>
        <h2 className="text-xl font-bold text-white">Dashboard</h2>
      </div>
      <nav className="flex-1 p-2">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                onClick={handleNavigation}
                className={({ isActive }) =>
                  `flex items-center space-x-3 p-3 rounded-lg transition-colors duration-200
                  ${isActive 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`
                }
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="p-4 border-t border-gray-700">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center">
            <span className="text-white font-medium">MM</span>
          </div>
          <div>
            <p className="text-sm font-medium text-white">Mukale Mirriam</p>
            <p className="text-xs text-gray-400">Administrator</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
