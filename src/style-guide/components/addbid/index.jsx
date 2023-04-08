import { React, useState } from "react";
import style from "./style.module.scss";

export default function Addbid() {
  const handlebar = () => {
    console.log("clicked");
  };
  return (
    <div className={styles.AddProductWrapper}>
      <div className={style.bid}>
        <input
          type="number"
          className={style.money}
          placeholder="In dollars"
        ></input>
        <div onClick={handlebar} className={style.btn}>
          OK
        </div>
      </div>
    </div>
  );
}
