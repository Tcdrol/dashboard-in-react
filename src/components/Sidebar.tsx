import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FiHome, FiUsers, FiPieChart, FiSettings, FiChevronRight, FiChevronDown } from 'react-icons/fi';

interface SidebarProps {
  onNavigate?: () => void;
  isMobile?: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ onNavigate, isMobile = false }) => {
  const location = useLocation();
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});

  // Navigation items with potential sub-items
  const navItems = [
    { 
      name: 'Dashboard', 
      icon: <FiHome className="w-5 h-5" />, 
      path: '/',
      exact: true
    },
    { 
      name: 'Users', 
      icon: <FiUsers className="w-5 h-5" />, 
      path: '/users',
      subItems: [
        { name: 'All Users', path: '/users' },
        { name: 'Roles', path: '/users/roles' },
        { name: 'Permissions', path: '/users/permissions' },
      ]
    },
    { 
      name: 'Analytics', 
      icon: <FiPieChart className="w-5 h-5" />, 
      path: '/analytics',
      subItems: [
        { name: 'Overview', path: '/analytics' },
        { name: 'Reports', path: '/analytics/reports' },
        { name: 'Exports', path: '/analytics/exports' },
      ]
    },
    { 
      name: 'Settings', 
      icon: <FiSettings className="w-5 h-5" />, 
      path: '/settings',
      subItems: [
        { name: 'General', path: '/settings/general' },
        { name: 'Security', path: '/settings/security' },
        { name: 'Notifications', path: '/settings/notifications' },
      ]
    },
  ];

  // Toggle submenu expansion
  const toggleExpand = (name: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [name]: !prev[name]
    }));
  };

  // Auto-expand parent items when a sub-item is active
  useEffect(() => {
    const newExpandedItems = { ...expandedItems };
    let hasChanges = false;
    
    navItems.forEach(item => {
      if (item.subItems) {
        const isActive = item.subItems.some(
          subItem => location.pathname.startsWith(subItem.path)
        );
        
        if (isActive && !expandedItems[item.name]) {
          newExpandedItems[item.name] = true;
          hasChanges = true;
        }
      }
    });
    
    if (hasChanges) {
      setExpandedItems(newExpandedItems);
    }
  }, [location.pathname]);

  const handleNavigation = () => {
    if (onNavigate) {
      onNavigate();
    }
  };

  // Check if a nav item is active
  const isNavItemActive = (item: any) => {
    if (item.exact) {
      return location.pathname === item.path;
    }
    return location.pathname.startsWith(item.path) && item.path !== '/';
  };

  return (
    <div className={`
      flex flex-col h-full bg-white border-r border-gray-200 overflow-hidden
      ${isMobile ? 'w-64 fixed inset-y-0 left-0 z-50' : 'w-64 hidden lg:flex'}
    `}>
      {/* Logo/Brand */}
      <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold">
            DM
          </div>
          <h2 className="text-lg font-semibold text-gray-900">Dashboard</h2>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-2 py-4 space-y-1 overflow-y-auto">
        {navItems.map((item) => (
          <div key={item.name} className="space-y-1">
            {item.subItems ? (
              <>
                <button
                  onClick={() => toggleExpand(item.name)}
                  className={`
                    group w-full flex items-center justify-between px-3 py-2 rounded-md text-sm font-medium
                    ${isNavItemActive(item) ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}
                  `}
                >
                  <div className="flex items-center space-x-3">
                    <span className={`${isNavItemActive(item) ? 'text-blue-500' : 'text-gray-400 group-hover:text-gray-500'}`}>
                      {item.icon}
                    </span>
                    <span>{item.name}</span>
                  </div>
                  {expandedItems[item.name] ? (
                    <FiChevronDown className="w-4 h-4 text-gray-400" />
                  ) : (
                    <FiChevronRight className="w-4 h-4 text-gray-400" />
                  )}
                </button>
                
                {/* Submenu items */}
                <div 
                  className={`pl-8 space-y-1 overflow-hidden transition-all duration-200 ${
                    expandedItems[item.name] ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  {item.subItems.map((subItem) => (
                    <NavLink
                      key={subItem.path}
                      to={subItem.path}
                      onClick={handleNavigation}
                      className={({ isActive }) =>
                        `block px-3 py-2 text-sm rounded-md ${
                          isActive
                            ? 'bg-blue-50 text-blue-600 font-medium'
                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                        }`
                      }
                    >
                      {subItem.name}
                    </NavLink>
                  ))}
                </div>
              </>
            ) : (
              <NavLink
                to={item.path}
                onClick={handleNavigation}
                className={({ isActive }) =>
                  `group flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                    isActive
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`
                }
              >
                <span 
                  className={`mr-3 ${isNavItemActive(item) ? 'text-blue-500' : 'text-gray-400 group-hover:text-gray-500'}`}
                >
                  {item.icon}
                </span>
                {item.name}
              </NavLink>
            )}
          </div>
        ))}
      </nav>

      {/* User profile */}
      <div className="p-4 border-t border-gray-200">
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
