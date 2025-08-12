import React, { useState, useEffect} from "react";
import axios from 'axios';
import Styles from "./Holdings.module.css";
import { VerticalGraph } from "./VerticalGraph";

const Holdings = () => {

  const [allHoldings, setAllHoldings] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/allHoldings`).then((res) => {
      console.log(res.data);
      setAllHoldings(res.data);
    })
  }, []);

  const labels = allHoldings.map((subArray) => subArray["name"]);

  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allHoldings.map((stock) => stock.price),
        backgroundColor: "rgba(245, 7, 138, 0.5)",
      },
    ],
  };

  return (
    <div className={`${Styles.container}`}>
      <h3 className={Styles.title}>Holdings ({allHoldings.length})</h3>

      <div className={Styles.orderTable}>
        <table>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg. cost</th>
            <th>LTP</th>
            <th>Cur. val</th>
            <th>P&L</th>
            <th>Net chg.</th>
            <th>Day chg.</th>
          </tr>

          {allHoldings.map((stock, index) => {
            const curValue = stock.price * stock.qty;
            const isProfit = curValue - stock.avg * stock.qty >= 0.0;
            const profClass = isProfit ? "profit" : "loss";
            const dayClass = stock.isLoss ? "loss" : "profit";

            return (
              <tr key={index} className={Styles.allHoldings}>
                <td className={Styles.HoldingName}>{stock.name}</td>
                <td className={Styles.HoldingQty}>{stock.qty}</td>
                <td className={Styles.HoldingAvg}>{stock.avg.toFixed(2)}</td>
                <td className={Styles.HoldingPrice}>{stock.price.toFixed(2)}</td>
                <td className={Styles.HoldingCurValue}>{curValue.toFixed(2)}</td>
                <td className={profClass}>
                  {(curValue - stock.avg * stock.qty).toFixed(2)}
                </td>
                <td className={profClass}>{stock.net}</td>
                <td className={dayClass}>{stock.day}</td>
              </tr>
            );
          })}
        </table>
      </div>

      <div className={`row ${Styles.moreInfo}`}>
        <div className={`col ${Styles.dataKnow}`}>
          <h5>
            29,875.<span>55</span>{" "}
          </h5>
          <p>Total investment</p>
        </div>
        <div className={`col ${Styles.dataKnow}`}>
          <h5>
            31,428.<span>95</span>{" "}
          </h5>
          <p>Current value</p>
        </div>
        <div className={`col ${Styles.dataKnow}`}>
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
      </div>
      <div className={Styles.VerticalGraphs}>
        <VerticalGraph data={data} />
      </div>
    </div>
  );
};

export default Holdings;
