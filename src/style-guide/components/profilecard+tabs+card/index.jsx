import React from "react";
import Profilecard from "../profilecard";
import Tabs from "../tabs";
import style from "./style.module.scss";

export default function Profile() {
  return (
    <div className={style.page}>
      {/* <div className={style.components}> */}
      {/* <div> */}
      <Profilecard />
      {/* </div> */}
      {/* <div > */}
      <Tabs />
      {/* </div> */}
      {/* </div> */}
    </div>
  );
}
