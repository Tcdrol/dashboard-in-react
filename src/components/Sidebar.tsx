import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FiUsers, FiPieChart, FiSettings, FiChevronDown, FiChevronRight } from 'react-icons/fi';
import { AiOutlineDashboard } from 'react-icons/ai';
import { BsBoxSeam, BsCalendar3 } from 'react-icons/bs';
import { RiFileList3Line } from 'react-icons/ri';
import { HiOutlineDocumentReport } from 'react-icons/hi';
import { TbMessages } from 'react-icons/tb';
import styles from './Sidebar.module.css';

interface NavItem {
  name: string;
  icon: React.ReactNode;
  path: string;
  badge?: number;
  children?: NavItem[];
}

interface SidebarProps {
  isOpen?: boolean;
  onNavigate?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen = false, onNavigate }) => {
  const location = useLocation();
  const [expandedItems, setExpandedItems] = React.useState<Record<string, boolean>>({
    analytics: false,
    pages: false,
  });

  const toggleItem = (key: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const navItems: NavItem[] = [
    { 
      name: 'Dashboard', 
      icon: <AiOutlineDashboard className={styles['nav-icon']} />, 
      path: '/',
    },
    { 
      name: 'Users', 
      icon: <FiUsers className={styles['nav-icon']} />, 
      path: '/users',
      badge: 3,
    },
    { 
      name: 'Products', 
      icon: <BsBoxSeam className={styles['nav-icon']} />, 
      path: '/products',
    },
    { 
      name: 'Analytics', 
      icon: <FiPieChart className={styles['nav-icon']} />, 
      path: '#',
      children: [
        { name: 'Overview', icon: <FiPieChart className={styles['nav-icon']} />, path: '/analytics/overview' },
        { name: 'Reports', icon: <HiOutlineDocumentReport className={styles['nav-icon']} />, path: '/analytics/reports' },
        { name: 'Activity', icon: <RiFileList3Line className={styles['nav-icon']} />, path: '/analytics/activity' },
      ],
    },
    { 
      name: 'Messages', 
      icon: <TbMessages className={styles['nav-icon']} />, 
      path: '/messages',
      badge: 5,
    },
    { 
      name: 'Calendar', 
      icon: <BsCalendar3 className={styles['nav-icon']} />, 
      path: '/calendar',
    },
    { 
      name: 'Settings', 
      icon: <FiSettings className={styles['nav-icon']} />, 
      path: '/settings',
    },
  ];

  const handleNavigation = () => {
    if (onNavigate) {
      onNavigate();
    }
  };

  const renderNavItem = (item: NavItem, index: number) => {
    const hasChildren = item.children && item.children.length > 0;
    const isActive = location.pathname === item.path || 
                    (hasChildren && item.children?.some(child => child.path === location.pathname));
    const isExpanded = expandedItems[item.name.toLowerCase()];

    return (
      <li key={`${item.name}-${index}`} className={styles['nav-item']}>
        {hasChildren ? (
          <>
            <button
              className={`${styles['nav-link']} ${isActive ? styles['active'] : ''}`}
              onClick={() => toggleItem(item.name.toLowerCase())}
              aria-expanded={isExpanded}
              aria-controls={`submenu-${item.name.toLowerCase()}`}
            >
              <span className={styles['nav-icon']}>
                {item.icon}
              </span>
              <span className={styles['nav-text']}>{item.name}</span>
              {item.badge && (
                <span className={styles['nav-badge']}>
                  {item.badge}
                </span>
              )}
              <span className={styles['nav-arrow']}>
                {isExpanded ? <FiChevronDown /> : <FiChevronRight />}
              </span>
            </button>
            {isExpanded && (
              <ul id={`submenu-${item.name.toLowerCase()}`} className={styles['submenu']}>
                {item.children?.map((child, childIndex) => (
                  <li key={`${child.name}-${childIndex}`} className={styles['submenu-item']}>
                    <NavLink
                      to={child.path}
                      onClick={handleNavigation}
                      className={({ isActive }) => 
                        `${styles['submenu-link']} ${isActive ? styles['active'] : ''}`
                      }
                    >
                      <span className={styles['submenu-icon']}>
                        {child.icon}
                      </span>
                      <span className={styles['submenu-text']}>{child.name}</span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </>
        ) : (
          <NavLink
            to={item.path}
            onClick={handleNavigation}
            className={({ isActive }) => 
              `${styles['nav-link']} ${isActive ? styles['active'] : ''}`
            }
          >
            <span className={styles['nav-icon']}>
              {item.icon}
            </span>
            <span className={styles['nav-text']}>{item.name}</span>
            {item.badge && (
              <span className={styles['nav-badge']}>
                {item.badge}
              </span>
            )}
          </NavLink>
        )}
      </li>
    );
  };

  return (
    <aside className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
      <div className={styles['sidebar-header']}>
        <NavLink to="/" className={styles['sidebar-logo']} onClick={handleNavigation}>
          <span className={styles['logo-icon']}>DM</span>
          <span className={styles['logo-text']}>Dashboard</span>
        </NavLink>
      </div>

      <nav className={styles.nav}>
        <div className={styles['nav-section']}>
          <h3 className={styles['nav-title']}>Main</h3>
          <ul className={styles['nav-list']}>
            {navItems.slice(0, 3).map((item, index) => renderNavItem(item, index))}
          </ul>
        </div>

        <div className={styles['nav-section']}>
          <h3 className={styles['nav-title']}>Analytics</h3>
          <ul className={styles['nav-list']}>
            {navItems.slice(3, 5).map((item, index) => renderNavItem(item, index + 3))}
          </ul>
        </div>

        <div className={styles['nav-section']}>
          <h3 className={styles['nav-title']}>General</h3>
          <ul className={styles['nav-list']}>
            {navItems.slice(5).map((item, index) => renderNavItem(item, index + 5))}
          </ul>
        </div>
      </nav>

      <div className={styles['user-profile']}>
        <NavLink to="/profile" className={styles['user-info']} onClick={handleNavigation}>
          <div className={styles['user-avatar']}>MM</div>
          <div className={styles['user-details']}>
            <p className={styles['user-name']}>Mukale Mirriam</p>
            <p className={styles['user-role']}>Administrator</p>
          </div>
        </NavLink>
      </div>
    </aside>
  );
};

export default Sidebar;
