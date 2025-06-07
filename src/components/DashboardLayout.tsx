import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import styles from './DashboardLayout.module.css';

interface DashboardLayoutProps {
  children: ReactNode;
  title?: string;
  showHeader?: boolean;
  showSidebar?: boolean;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  children,
  title = 'Dashboard',
  showHeader = true,
  showSidebar = true,
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  const isMobile = window.innerWidth < 768;

  // Close sidebar when route changes on mobile
  useEffect(() => {
    if (isMobile) {
      setIsSidebarOpen(false);
    }
  }, [location.pathname, isMobile]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Toggle body scroll when mobile menu is open
  useEffect(() => {
    if (isMobile) {
      document.body.style.overflow = isSidebarOpen ? 'hidden' : '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isSidebarOpen, isMobile]);

  return (
    <div className={styles['layout-container']}>
      {showSidebar && (
        <>
          <aside className={`${styles.sidebar} ${isSidebarOpen ? styles.open : ''}`}>
            <Sidebar isOpen={isSidebarOpen} onNavigate={() => setIsSidebarOpen(false)} />
          </aside>
          <div 
            className={`${styles.overlay} ${isSidebarOpen ? styles.open : ''}`} 
            onClick={() => setIsSidebarOpen(false)}
            role="button"
            tabIndex={0}
            aria-label="Close sidebar"
            onKeyDown={(e) => e.key === 'Enter' && setIsSidebarOpen(false)}
          />
        </>
      )}

      <div className={styles['main-content']}>
        {showHeader && (
          <Header 
            onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} 
            title={title}
            showSearch={showSidebar}
          />
        )}
        <main className={styles.content}>
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
