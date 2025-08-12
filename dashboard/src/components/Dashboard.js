import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import styles from './Dashboard.module.css';

import Funds from "./Funds";
import Holdings from "./Holdings";
import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import MobileNavigation from "./MobileNavigation";
import { GeneralContextProvider } from "./GeneralContext";

const Dashboard = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className={`dashboard-container ${styles.responsiveDashboard}`}>
      <GeneralContextProvider>
        {/* Desktop Layout */}
        <div className={styles.desktopLayout}>
          <WatchList />
          <div className={`content ${styles.content}`}>
            <Routes>
              <Route exact path="/" element={<Summary />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/holdings" element={<Holdings />} />
              <Route path="/positions" element={<Positions />} />
              <Route path="/funds" element={<Funds />} />
            </Routes>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className={styles.mobileLayout}>
          {isHomePage ? (
            // Show only WatchList on home page for mobile
            <div className={styles.mobileWatchListContainer}>
              <WatchList />
            </div>
          ) : (
            // Show other components in full width for mobile
            <div className={styles.mobileContentContainer}>
              <Routes>
                <Route path="/orders" element={<Orders />} />
                <Route path="/holdings" element={<Holdings />} />
                <Route path="/positions" element={<Positions />} />
                <Route path="/funds" element={<Funds />} />
              </Routes>
            </div>
          )}
        </div>
      </GeneralContextProvider>
      
      {/* Mobile Navigation - Only visible on mobile */}
      <MobileNavigation />
    </div>
  );
};

export default Dashboard;