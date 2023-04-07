import React from "react";
import Profilecard from "../profilecard";
import Tabs from "../tabs";
import style from "./style.module.scss";

export default function Profile() {
  return (
    <div className={style.page}>
      <Profilecard />
      <Tabs />
    </div>
  );
}
