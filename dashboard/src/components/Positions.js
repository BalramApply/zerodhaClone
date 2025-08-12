import React, { useState, useEffect} from "react";
import axios from 'axios';

import Styles from './Positions.module.css';

// import { positions } from "../data/data";

const Positions = () => {

  const [allPositions, setAllPositions] = useState([]);
  
    useEffect(() => {
      axios.get(`${process.env.REACT_APP_BACKEND_URL}/allPositions`).then((res) => {
        console.log(res.data);
        setAllPositions(res.data);
      })
    }, []);

  return (
    <div className={Styles.container}>
      <h3 className={Styles.title}>Positions ({allPositions.length})</h3>

      <div className={Styles.orderTable}>
        <table>
          <tr className={Styles.tableData}>
            <th className={Styles.tableRowData}>Product</th>
            <th className={Styles.tableRowData}>Instrument</th>
            <th className={Styles.tableRowData}>Qty.</th>
            <th className={Styles.tableRowData}>Avg.</th>
            <th className={Styles.tableRowData}>LTP</th>
            <th className={Styles.tableRowData}>P&L</th>
            <th className={Styles.tableRowData}>Chg.</th>
          </tr>

          {allPositions.map((stock, index) => {
            const curValue = stock.price * stock.qty;
            const isProfit = curValue - stock.avg * stock.qty >= 0.0;
            const profClass = isProfit ? "profit" : "loss";
            const dayClass = stock.isLoss ? "loss" : "profit";

            return (
              <tr key={index}>
                <td>{stock.product}</td>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.avg.toFixed(2)}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td className={profClass}>
                  {(curValue - stock.avg * stock.qty).toFixed(2)}
                </td>
                <td className={dayClass}>{stock.day}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default Positions;