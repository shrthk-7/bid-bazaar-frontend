import React from "react";
import styles from "./style.module.scss";
import Filteroptions from "../../components/filteroptions";
import Addbid from "@/style-guide/components/addbid";

const Error = () => {
  return (
    <>
      <div className={styles.error}>
        {/* <h1>404</h1>
        <p>Page Not Found</p> */}
        {/* <Filteroptions /> */}
        <Addbid />
      </div>
    </>
  );
};

export default Error;
