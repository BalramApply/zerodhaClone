import React from "react";
import { Link } from "react-router-dom";
import Styles from './Funds.module.css';

const Funds = () => {
  return (
    <div className={Styles.container}>
      <div className={`funds ${Styles.funds}`}>
        <p>Instant, zero-cost fund transfers with UPI </p>
        <Link className={`btn btn-green ${Styles.addBtn}`}>Add funds</Link>
        <Link className={`btn btn-blue ${Styles.withdrawBtn}`}>Withdraw</Link>
      </div>

      <div className={`row ${Styles.fundsMore}`}>
        <div className={`col ${Styles.cols}`}>
          <span>
            <p>Equity</p>
          </span>

          <div className={`table ${Styles.tables}`}>
            <div className={`data ${Styles.datas}`}>
              <p>Available margin</p>
              <p className="imp colored">4,043.10</p>
            </div>
            <div className={`data ${Styles.datas}`}>
              <p>Used margin</p>
              <p className="imp">3,757.30</p>
            </div>
            <div className={`data ${Styles.datas}`}>
              <p>Available cash</p>
              <p className="imp">4,043.10</p>
            </div>
            <hr />
            <div className={`data ${Styles.datas}`}>
              <p>Opening Balance</p>
              <p>4,043.10</p>
            </div>
            <div className={`data ${Styles.datas}`}>
              <p>Opening Balance</p>
              <p>3736.40</p>
            </div>
            <div className={`data ${Styles.datas}`}>
              <p>Payin</p>
              <p>4064.00</p>
            </div>
            <div className={`data ${Styles.datas}`}>
              <p>SPAN</p>
              <p>0.00</p>
            </div>
            <div className={`data ${Styles.datas}`}>
              <p>Delivery margin</p>
              <p>0.00</p>
            </div>
            <div className={`data ${Styles.datas}`}>
              <p>Exposure</p>
              <p>0.00</p>
            </div>
            <div className={`data ${Styles.datas}`}>
              <p>Options premium</p>
              <p>0.00</p>
            </div>
            <hr />
            <div className={`data ${Styles.datas}`}>
              <p>Collateral (Liquid funds)</p>
              <p>0.00</p>
            </div>
            <div className={`data ${Styles.datas}`}>
              <p>Collateral (Equity)</p>
              <p>0.00</p>
            </div>
            <div className={`data ${Styles.datas}`}>
              <p>Total Collateral</p>
              <p>0.00</p>
            </div>
          </div>
        </div>

        <div className={`col ${Styles.cols2}`}>
          <div className={`commodity ${Styles.commoditys}`}>
            <p>You don't have a commodity account</p>
            <Link className={`btn btn-blue ${Styles.openBtn}`}>Open Account</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Funds;