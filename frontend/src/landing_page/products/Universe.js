import React from "react";
import styles from "./Universe.module.css";
import { Link } from "react-router-dom";

function Universe() {
  return (
    <div className={`${styles.container}`}>
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className={`col-4 p-3 mt-5 ${styles.bottomLogos}`}>
          <img src="media/images/smallcaseLogo.png" />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className={`col-4 p-3 mt-5 ${styles.bottomLogos}`}>
          <img src="media/images/streakLogo.png" />
          <p className="text-small text-muted">Algo & strategy platform</p>
        </div>
        <div className={`col-4 p-3 mt-5 ${styles.bottomLogos}`}>
          <img src="media/images/sensibullLogo.svg" />
          <p className="text-small text-muted">Option trading platform</p>
        </div>
        <div className={`col-4 p-3 mt-5 ${styles.bottomLogos}`}>
          <img src="media/images/zerodhaFundhouse.png" />
          <p className="text-small text-muted">Asset management</p>
        </div>
        <div className={`col-4 p-3 mt-5 ${styles.bottomLogos}`}>
          <img src="media/images/goldenpiLogo.png" />
          <p className="text-small text-muted">Bonds trading platform</p>
        </div>
        <div className={`col-4 p-3 mt-5 ${styles.bottomLogos}`}>
          <img src="media/images/dittoLogo.png" />
          <p className="text-small text-muted">Insurance</p>
        </div>
        <Link to="/signup"><button className={`btn btn-primary ${styles.heroButton}`}>Sign up Now</button></Link>
        
      </div>
    </div>
  );
}

export default Universe;