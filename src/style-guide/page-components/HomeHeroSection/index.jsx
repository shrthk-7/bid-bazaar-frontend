import React from "react";
import styles from "./style.module.scss";
import { BsXDiamondFill } from "react-icons/bs";

const HomeHeroSection = () => {
  return (
    <div className={styles.heroSection}>
      <div className={styles.heroBloblight}></div>
      <div className={styles.heroRings1}></div>
      <div className={styles.heroRings2}></div>
      <div className={styles.heroRings3}></div>
      <div className={styles.heroUpperSection}>
        <div className={styles.heroDataSection}>
          <h1>
            Discover new possibilities<sup>&trade;</sup>{" "}
          </h1>
          <p>
            World's largest marketplace for seller and bidder with zero fraud
            policy
          </p>
          <div className={styles.activeData}>
            <div className={styles.activeDataRow}>
              <div className={styles.activeDataBigText}>
                <BsXDiamondFill className={styles.bullets} /> 42K+
              </div>
              Active Users
            </div>
            <div className={styles.activeDataRow}>
              <div className={styles.activeDataBigText}>
                <BsXDiamondFill className={styles.bullets} /> 42K+
              </div>
              Total Auctions
            </div>
          </div>
        </div>
        <img src="/images/13.png" alt="" />
      </div>
      {/* hottest Bid */}
      {/* <div className={styles.heroHottestBid}>
        
      </div> */}
    </div>
  );
};

export default HomeHeroSection;
