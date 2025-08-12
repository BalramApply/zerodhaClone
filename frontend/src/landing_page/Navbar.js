import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "./store/auth";
import styles from "./Navbar.module.css";

function Navbar() {
  const { isLoggedIn } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <nav className={styles.navContainer}>
      <div className={styles.container}>
        <Link className={styles.brand} to={"/"}>
          <img
            src="media/images/logo.svg"
            alt="Logo"
            className={styles.navLogo}
          />
        </Link>
        
        <button
          className={styles.toggler}
          type="button"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
        >
          <span className={styles.togglerIcon}></span>
          <span className={styles.togglerIcon}></span>
          <span className={styles.togglerIcon}></span>
        </button>
        
        <div className={`${styles.navMenu} ${isMenuOpen ? styles.navMenuOpen : ''}`}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link 
                className={styles.navLink} 
                to="/about"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link 
                className={styles.navLink} 
                to="/product"
                onClick={() => setIsMenuOpen(false)}
              >
                Product
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link 
                className={styles.navLink} 
                to="/pricing"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link 
                className={styles.navLink} 
                to="/support"
                onClick={() => setIsMenuOpen(false)}
              >
                Support
              </Link>
            </li>
            {isLoggedIn ? (
              <li className={styles.navItem}>
                <Link 
                  className={`${styles.navLink} ${styles.logoutBtn}`} 
                  to="/logout"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Logout
                </Link>
              </li>
            ) : (
              <>
                <li className={styles.navItem}>
                  <Link 
                    className={`${styles.navLink} ${styles.registerBtn}`} 
                    to="/signup"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Register
                  </Link>
                </li>
                <li className={styles.navItem}>
                  <Link 
                    className={`${styles.navLink} ${styles.loginBtn}`} 
                    to="/login"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Login
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;