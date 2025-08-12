import React from "react";
import styles from "./CreateTicket.module.css";

function CreateTicket() {
  return (
    <div className={styles.container}>
      <div className="row p-5 ">
        <h1 className="fs-2">To create a ticket, select a relevant topic</h1>
        <div className={`col-4 p-5 mt-2 mb-2 ${styles.ticketTopics}`}>
          <h4 className=""><i class="fa-solid fa-circle-plus"></i>
            Account Opening
          </h4>
          <a href="/support" className={styles.supportLinks}>Online Account Opening</a><br/>
          <a href="/support" className={styles.supportLinks}>Offline Account Opening</a><br/>
          <a href="/support" className={styles.supportLinks}>Company, Partnership and HUF Account</a><br/>
          <a href="/support" className={styles.supportLinks}>Opening</a><br/>
          <a href="/support" className={styles.supportLinks}>NRI Account Opening</a><br/>
          <a href="/support" className={styles.supportLinks}>Charges at Zerodha</a><br/>
          <a href="/support" className={styles.supportLinks}>Zerodha IDFC FIRST Bank 3-in-1 Account</a><br/>
          <a href="/support" className={styles.supportLinks}>Getting Started</a><br/>
        </div>
        <div className={`col-4 p-5 mt-2 mb-2 ${styles.ticketTopics}`}>
          <h4 className=""><i class="fa-solid fa-user"></i>
            Your Zerodha Account
          </h4>
          <a href="/support" className={styles.supportLinks}>Login Credentials</a><br/>
          <a href="/support" className={styles.supportLinks}>Account Modification and Segment Addition</a><br/>
          <a href="/support" className={styles.supportLinks}>DP ID and bank details</a><br/>
          <a href="/support" className={styles.supportLinks}>Opening</a><br/>
          <a href="/support" className={styles.supportLinks}>Your Profile</a><br/>
          <a href="/support" className={styles.supportLinks}>Transfer and conversion of shared</a><br/>
        </div>
        <div className={`col-4 p-5 mt-2 mb-2 ${styles.ticketTopics}`}>
          <h4 className=""><i class="fa-solid fa-chart-column"></i>
            Your Zerodha Account
          </h4>
          <a href="/support" className={styles.supportLinks}>Margin/leverage, Product and Order types</a><br/>
          <a href="/support" className={styles.supportLinks}>Kite Web and Mobile</a><br/>
          <a href="/support" className={styles.supportLinks}>Trading FAQs</a><br/>
          <a href="/support" className={styles.supportLinks}>Corporate Actions</a><br/>
          <a href="/support" className={styles.supportLinks}>Sentinel</a><br/>
          <a href="/support" className={styles.supportLinks}>Kite Api</a><br/>
          <a href="/support" className={styles.supportLinks}>Pi and other platform</a><br/>
          <a href="/support" className={styles.supportLinks}>Stockreports+</a><br/>
          <a href="/support" className={styles.supportLinks}>GTT</a><br/>
        </div>
        <div className={`col-4 p-5 mt-2 mb-2 ${styles.ticketTopics}`}>
          <h4 className=""><i class="fa-regular fa-credit-card"></i>
            Funds
          </h4>
          <a href="/support" className={styles.supportLinks}>Adding Funds</a><br/>
          <a href="/support" className={styles.supportLinks}>Fund Withdrawal</a><br/>
          <a href="/support" className={styles.supportLinks}>eMandates</a><br/>
          <a href="/support" className={styles.supportLinks}>Opening</a><br/>
          <a href="/support" className={styles.supportLinks}>Adding Bank Accounts</a><br/>
        </div>
        <div className={`col-4 p-5 mt-2 mb-2 ${styles.ticketTopics}`}>
          <h4 className=""><i class="fa-solid fa-circle-notch"></i>
            Console
          </h4>
          <a href="/support" className={styles.supportLinks}>Reports</a><br/>
          <a href="/support" className={styles.supportLinks}>Lenger</a><br/>
          <a href="/support" className={styles.supportLinks}>Portfolio</a><br/>
          <a href="/support" className={styles.supportLinks}>Opening</a><br/>
          <a href="/support" className={styles.supportLinks}>60 Day Challenge</a><br/>
          <a href="/support" className={styles.supportLinks}>IPO</a><br/>
          <a href="/support" className={styles.supportLinks}>Referral Program</a><br/>
        </div>
        <div className={`col-4 p-5 mt-2 mb-2 ${styles.ticketTopics}`}>
          <h4 className=""><i class="fa-solid fa-coins"></i>
            Coin
          </h4>
          <a href="/support" className={styles.supportLinks}>Understanding Mutul Funds</a><br/>
          <a href="/support" className={styles.supportLinks}>About Coin</a><br/>
          <a href="/support" className={styles.supportLinks}>Buying and Selling through Coin</a><br/>
          <a href="/support" className={styles.supportLinks}>Start an SIP</a><br/>
          <a href="/support" className={styles.supportLinks}>Managing your Portfolio</a><br/>
          <a href="/support" className={styles.supportLinks}>Coin App</a><br/>
          <a href="/support" className={styles.supportLinks}>Moving to Coin</a><br/>
          <a href="/support" className={styles.supportLinks}>Government Securities</a><br/>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;