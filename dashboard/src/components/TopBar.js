import React from "react";
import Styles from './TopBar.module.css';

import Menu from "./Menu";

const TopBar = () => {
  return (
    <div className={`topbar-container ${Styles.container}`}>
      <div className={`indices-container ${Styles.indicesContainer}`}>
        <div className={`nifty ${Styles.nifty}`}>
          <p className={`index ${Styles.index}`}>NIFTY 50</p>
          <p className={`index-points ${Styles.indexPoints}`}>{100.2} </p>
          <p className={`percent ${Styles.percent}`}> </p>
        </div>
        <div className={`sensex ${Styles.sensex}`}>
          <p className={`index ${Styles.index}`}>SENSEX</p>
          <p className={`index-points ${Styles.indexPoints}`}>{100.2}</p>
          <p className={`percent ${Styles.percent}`}></p>
        </div>
      </div>

      <Menu />
    </div>
  );
};

export default TopBar;