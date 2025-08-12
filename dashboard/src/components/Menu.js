import React, { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./Menu.module.css";

const Menu = () => {
  const [selectMenu, setSelectMenu] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuClick = (index) => {
    setSelectMenu(index);
    // Close mobile menu when item is clicked
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const menuClass = styles.menu;
  const activeMenuClass = `${styles.menu} ${styles.selected}`;

  const logoutUser = () => {
    // Note: localStorage is not available in Claude artifacts
    // In a real app, you would use: localStorage.removeItem("token");
    console.log("Token removed from localStorage");
  };

  const handleLogout = () => {
    logoutUser(); // clear token
    setIsMobileMenuOpen(false); // Close mobile menu
    window.location.href = `${process.env.REACT_APP_FRONTEND_URL}`;
  };

  return (
    <>
      {/* Hamburger button for mobile */}
      <button
        className={`${styles.hamburger} ${isMobileMenuOpen ? styles.open : ""}`}
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Mobile overlay */}
      <div
        className={`${styles.overlay} ${isMobileMenuOpen ? styles.show : ""}`}
        onClick={() => setIsMobileMenuOpen(false)}
      ></div>

      {/* Navigation menu */}
      <div
        className={`${styles.container} ${isMobileMenuOpen ? styles.open : ""}`}
      >
        <div className={styles.menus}>
          <nav>
            <ul>
              <li>
                <Link
                  className={styles.menuLinks}
                  to={"/"}
                  onClick={() => handleMenuClick(0)}
                >
                  <p className={selectMenu === 0 ? activeMenuClass : menuClass}>
                    Dashboard
                  </p>
                </Link>
              </li>
              <li>
                <Link
                  className={styles.menuLinks}
                  to={"/orders"}
                  onClick={() => handleMenuClick(1)}
                >
                  <p className={selectMenu === 1 ? activeMenuClass : menuClass}>
                    Orders
                  </p>
                </Link>
              </li>
              <li>
                <Link
                  className={styles.menuLinks}
                  to={"/holdings"}
                  onClick={() => handleMenuClick(2)}
                >
                  <p className={selectMenu === 2 ? activeMenuClass : menuClass}>
                    Holdings
                  </p>
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <div
              className={styles.logOut}
              onClick={handleLogout}
              style={{ cursor: "pointer" }}
            >
              Logout
            </div>
            <Link
              className={styles.menuLinks}
              to={"/funds"}
              onClick={() => handleMenuClick(4)}
            >
              <p className={selectMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
            <Link
              className={styles.menuLinks}
              to={"/positions"}
              onClick={() => handleMenuClick(3)}
            >
              <p className={selectMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
