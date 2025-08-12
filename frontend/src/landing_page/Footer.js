import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (    
    <div className={`border-top ${styles.container}`}>
      <div className="row mt-5">
        <div className="col">
          <img src="media/images/logo.svg" alt="logo" className={styles.logo} />
          <p>&copy; 2010 - 2024, Not Zerodha Broking Ltd. All right reserved.</p>
        </div>

        <div className="col">
          <p>Company</p>
          <a href="/"> About</a><br/>
          <a href="/"> Products</a><br/>
          <a href="/"> Pricing</a><br/>
          <a href="/"> Referral programm</a><br/>
          <a href="/"> Careers</a><br/>
          <a href="/"> Zerodha.tech</a><br/>
          <a href="/"> Press & media</a><br/>
          <a href="/"> Zerodha cares (CSR)</a>
        </div>
        <div className="col">
          <p>Support</p>
          <a href="/"> Contack</a><br/>
          <a href="/"> Support portal</a><br/>
          <a href="/"> Z-Connect blog</a><br/>
          <a href="/"> List of charges</a><br/>
          <a href="/"> Downloads & resources</a>
        </div>
        <div className="col">
          <p>Account</p>
          <a href="/"> Open an account</a><br/>
          <a href="/"> Fund transfer</a><br/>
          <a href="/">60 day challenge</a>
        </div>
      </div>
        <div className={`mt-5 text-muted ${styles.notify}`}>
         <p> Zerodha Broking Ltd.: Member of NSE, BSE & MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 
          Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 
          Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bangalore - 560078, Karnataka, India. 
          For any complaints pertaining to securities broking please write to  
          Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF </p>

        <p>  Procedure to file a complaint on 
          Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. 
          Benefits: Effective Communication, Speedy redressal of the grievances </p>

        <p> Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>
        </div>
    </div>
  
  );
}

export default Footer;