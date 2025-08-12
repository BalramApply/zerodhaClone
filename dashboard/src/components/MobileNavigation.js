import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './MobileNavigation.module.css';

const MobileNavigation = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Watch', icon: '👁️' },
    { path: '/orders', label: 'Orders', icon: '📋' },
    { path: '/holdings', label: 'Holdings', icon: '💼' },
    { path: '/positions', label: 'Positions', icon: '📊' },
    { path: '/funds', label: 'Funds', icon: '💰' },
  ];

  return (
    <nav className={styles.mobileNav}>
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`${styles.navItem} ${
            location.pathname === item.path ? styles.active : ''
          }`}
        >
          <span className={styles.icon}>{item.icon}</span>
          <span className={styles.label}>{item.label}</span>
        </Link>
      ))}
    </nav>
  );
};

export default MobileNavigation;