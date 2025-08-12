import React from "react";
import styles from "./Brokerage.module.css";

function Brokerage() {
  return (
    <div className={` ${styles.container}`}>
      <div className={`row p-5 text-center border-top`}>
        <div className={`col-8 p-4 ${styles.brokerageContainer}`}>
            <a href="/" className={styles.brokerageAnchor}><h3 className="fs-5">Brokerage calculator</h3></a>
            <ul className={` text-muted ${styles.brokerageList}`}>
                <li>Call & Trade RMS auto-squareoff Additional charges of ₹50 + GST per order.</li>
                <li>Digital contract notes will be sent via e-mail</li>
                <li>Physical copies of contract notes, if required shall be charged ₹20 per contack note. Charges apply</li>
                <li>For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
                <li>For NRI account 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
                <li>if the account is in debit balance any order placed will be charged ₹40 per executed order of ₹20 per executed order</li>
            </ul>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;