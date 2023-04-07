import React from "react";
import styles from "./style.module.scss";
import SignIn from "@/style-guide/components/SignIn";
import Link from "next/link";

const Navbar = ({ mobileHamClicked }) => {
  return (
    <div className={styles.navWrapper}>
      <div
        className={`${styles.navbar} ${
          mobileHamClicked ? styles.navShow : styles.navHide
        }`}
      >
        <div className={styles.logo}>BIDBAZZAR</div>
        <div className={styles.nav_links}>
          <Link href="/">HOME</Link>
          <Link href="/profile">PROFILE</Link>
          <Link href="/market">MARKET</Link>
        </div>
        <div className={styles.callToAction}>
          <SignIn />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
