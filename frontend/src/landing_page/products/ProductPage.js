import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";
import Styles from "./ProductPage.module.css";

function ProductPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageURL="media/images/kite.png"
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the kite experience seamlessly on your Android and iOS devices."
        tryDemo=""
        learnDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <RightSection
        imageURL="media/images/console.png"
        productName="Console"
        productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learnMore=""
      />
      <LeftSection
        imageURL="media/images/coin.png"
        productName="Coin"
        productDescription="Buy direct mutual online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo=""
        learnDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <RightSection
        imageURL="media/images/kiteconnect.png"
        productName="Kite Connect API"
        productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. if you are a startup, build your investment app and showcase it to our clientbase"
        learnMore=""
      />
      <LeftSection
        imageURL="media/images/varsity.png"
        productName="Varsity mobile"
        productDescription="An easy grasp collection of stock market lessons with in-depth coverage and illustrations Content is broken down into bite-size cards to help you learn on the go"
        tryDemo=""
        learnDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <div className={`text-center ${Styles.bottomRead}`}>
        Want to know more about our Technology stack? check out the Zerodha.tech blog.
      </div>
      <Universe />
    </>
  );
}

export default ProductPage;