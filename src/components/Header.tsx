import React, { useState, useRef, useEffect } from 'react';
import styles from './Header.module.css';

interface HeaderProps {
  onMenuClick: () => void;
  title?: string;
  showSearch?: boolean;
}

const Header: React.FC<HeaderProps> = ({
  onMenuClick,
  title = 'Dashboard',
  showSearch = true,
}) => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);

  // Handle keyboard shortcuts for search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Cmd+K or Ctrl+K to focus search
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        searchRef.current?.focus();
      }
      // Escape to blur search
      if (e.key === 'Escape' && document.activeElement === searchRef.current) {
        searchRef.current?.blur();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles['header-inner']}>
        <div className={styles['header-left']}>
          <button
            type="button"
            onClick={onMenuClick}
            className={styles['menu-button']}
            aria-label="Toggle menu"
            aria-expanded={false}
          >
            <svg
              className={styles['menu-icon']}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
          <h1 className={styles['page-title']}>
            {title}
          </h1>
        </div>

        <div className={styles['header-right']}>
          {showSearch && (
            <div className={styles['search-container']}>
              <input
                ref={searchRef}
                type="search"
                placeholder="Search..."
                className={styles['search-input']}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                aria-label="Search"
              />
              <div className={styles['search-icon']}>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </div>
              {!isSearchFocused && (
                <div className={styles['search-shortcut']}>
                  <kbd>⌘K</kbd>
                </div>
              )}
            </div>
          )}

          <div className={styles['user-menu']}>
            <button
              type="button"
              className={styles['user-avatar']}
              aria-haspopup="true"
              aria-label="User menu"
            >
              <span>MM</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
