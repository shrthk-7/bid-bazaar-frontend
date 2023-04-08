import { useContext } from "react";
import styles from "./style.module.scss";
import SignIn from "@/style-guide/components/SignIn";
import SignOut from "@/style-guide/components/SignOut";
import Link from "next/link";

import { AuthContext } from "@/context/auth-context";

const Navbar = ({ mobileHamClicked }) => {
  const auth = useContext(AuthContext);

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
          {auth.isLoggedIn ? (
            <SignOut logout={auth.logout} />
          ) : (
            <SignIn login={auth.login} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
