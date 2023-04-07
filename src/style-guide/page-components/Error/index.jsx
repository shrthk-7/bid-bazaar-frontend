import React from "react";
import styles from "./style.module.scss";
import Filteroptions from "../../components/filteroptions";

const Error = () => {
  return (
    <>
      <div className={styles.error}>
        {/* <h1>404</h1>
        <p>Page Not Found</p> */}
        <Filteroptions />
      </div>
    </>
  );
};

export default Error;
