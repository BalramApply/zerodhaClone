import React from "react";
import styles from "./Education.module.css";

function Education() {
  return (
    <div className={` ${styles.container}`}>
      <div className="row">
        <div className={`col-6 ${styles.imageVisinity}`}>
            <img src="media/images/education.svg" className={styles.education} />
        </div>
        <div className={`col-6 ${styles.imageDetail}`}>
          <h1 className="mb-3 fs-2">Free and open market education</h1>
          <p>
            Versity, the largest online stock market education book in the world covering everything from the basics to advanced trading
          </p>
          <a href="" className={styles.linksStyle}>
            Versity<i class="fa-solid fa-arrow-right"></i>
          </a>

          <p className="mt-5">
            TrandingQ&A, the most active tranding and investment community in india for all your market queries
          </p>
          <a href="" className={styles.linksStyle}>
            TradingQ&A<i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;