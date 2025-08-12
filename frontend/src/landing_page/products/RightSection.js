import React from "react";
import styles from "./RightSection.module.css";
function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className={` ${styles.container}`}>
      <div className="row">
        <div className={`col-6 ${styles.aboutRight}`}>
          <h1>{productName}</h1>

          <p>{productDescription}</p>
          <div>
            <a href={learnMore} className={styles.learnMoreAnchor}>
              Learn More
            </a>
          </div>
        </div>

        <div className={`col-6 ${styles.imageContainRight}`}>
          <img src={imageURL} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;