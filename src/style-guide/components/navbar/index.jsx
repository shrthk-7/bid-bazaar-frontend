import React from "react";
import styles from "./style.module.scss";
import { signInWithGoogle } from "@/utils/firebase";

const Navbar = ({ mobileHamClicked }) => {
  return (
    <div className={styles.navWrapper}>
      <div
        className={`${styles.navbar} ${mobileHamClicked ? styles.navShow : styles.navHide
          }`}
      >
        <div className={styles.logo}>BIDBAZZAR</div>
        <div className={styles.nav_links}>
          <a href="/">HOME</a>
          <a href="/profile">PROFILE</a>
          <a href="/market">MARKET</a>
        </div>
        <div className={styles.callToAction}>
          <div className={styles.btn} onClick={signInWithGoogle}>
            SignIn
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
