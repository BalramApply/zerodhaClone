import React from "react";
import styles from "./Hero.module.css";
// import { Link } from "react-router-dom"; unit testing
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className={`p-5 ${styles.container}`}>
      <div className="row text-center">
        <img
          src="media/images/homeHero.png"
          alt="Hero Image"
          className="mb-5"
        />

        <h1 className="mt-5">Invest in everything</h1>
        <p>
          Online Platform to invest in stocks, derivatives, mutual funds, and
          more
        </p>

        {/* <Link to="/signup"></Link> unit testing  */}
        <Link to="/signup">
          <button className={`btn btn-primary ${styles.heroButton}`}>
            Signup Now
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
