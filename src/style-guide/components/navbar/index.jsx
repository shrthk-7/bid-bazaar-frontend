import React from 'react';
import styles from "./style.module.scss";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        BIDBAZZAR
      </div>
      <div className={styles.nav_links}>
        <a href="/">HOME</a>
        <a href="/profile">PROFILE</a>
        <a href="/market">MARKET</a>
      </div>
      <div className={styles.callToAction}>
        <div className={styles.btn}>
          SignIn
        </div>
      </div>
    </div>
  )
}

export default Navbar