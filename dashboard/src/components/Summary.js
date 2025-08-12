import React from "react";
import Styles from './Summary.module.css';

const Summary = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.username}>
        <h6>Hi, User!</h6>
        <hr className={Styles.divider} />
      </div>

      <div className={Styles.section}>
        <span>
          <p>Equity</p>
        </span>

        <div className={Styles.data}>
          <div className={Styles.first}>
            <h3>3.74k</h3>
            <p>Margin available</p>
          </div>
          <hr />

          <div className={Styles.second}>
            <p>
              Margins used <span>0</span>{" "}
            </p>
            <p>
              Opening balance <span>3.74k</span>{" "}
            </p>
          </div>
        </div>
        <hr className={Styles.divider} />
      </div>

      <div className={Styles.section2}>
        <span>
          <p>Holdings (13)</p>
        </span>

        <div className={Styles.datas}>
          <div className={Styles.firsts}>
            <h3 className={Styles.profit}>
              1.55k <small>+5.20%</small>{" "}
            </h3>
            <p>P&L</p>
          </div>
          <hr />

          <div className={Styles.seconds}>
            <p>
              Current Value <span>31.43k</span>{" "}
            </p>
            <p>
              Investment <span>29.88k</span>{" "}
            </p>
          </div>
        </div>
        <hr className={Styles.dividers} />
      </div>
    </div>
  );
};

export default Summary;