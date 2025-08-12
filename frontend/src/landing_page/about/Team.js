import React from "react";
import styles from "./Team.module.css";

function Team() {
  return (
    <div className={styles.container}>
      <div className={`row p-2  border-top ${styles.profile}`}>
        <h1 className="text-center">People</h1>
      </div>
      <div className={`row p-3 text-muted ${styles.discription}`}>
        <div className={`col-6 p-3 text-center ${styles.infoFounder}`}>
          <img
            src="media/images/balram.jpg"
            alt="founder"
            className={styles.founderImage}
          />
          <h4 className="mt-5">Balram Patel</h4>
          <h6>Founder, CEO</h6>
        </div>
        <div className={`col-6 p-3 ${styles.aboutFounder}`}>
          <p>
            Balram bootstrapped and founded Zerodha in 2010 to overcome the
            hurdies he faced during his decade long stint as a trader today,
            Zerodha has changed the landscape of the indian industry
          </p>
          <p>
            He is member of the SEBI Secondary Market Advisory Committee (SMAC)
            and the market Data Advisory Committee (MDAC)
          </p>
          <p>
            Playing basketball is his zen.
          </p>
          <p>
            Connect on 
            <a href="/about">Homepage</a>
            <a href="/about">TradingQnA</a>
            <a href="/about">Twitter</a>  
            </p>
        </div>
      </div>
    </div>
  );
}

export default Team;