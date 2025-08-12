import React from "react";
import styles from "./LeftSection.module.css";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className={` ${styles.container}`}>
      <div className="row">
        <div className={`col-6 ${styles.imageContainLeft}`}>
          <img src={imageURL}/>
        </div>

        <div className={`col-6 p-5 mt-5 ${styles.aboutImageLeft}`}>
          <h1>{productName}</h1>
          
          <p>{productDescription}</p>
          <div>
            <a href={tryDemo}>Try Demo </a>
          <a href={learnMore} className={styles.learnMoreAnchor}>Learn More</a>
          </div>
          
          <div className="mt-3">
            <a href={googlePlay}>
            <img src="media/images/googlePlayBadge.svg" className={`${styles.store}`}/>
          </a>
          <a href={appStore}>
            <img src="media/images/appstoreBadge.svg" />
          </a>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default LeftSection;