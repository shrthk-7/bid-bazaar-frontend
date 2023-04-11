import { React, useState } from "react";
import style from "./style.module.scss";

export default function Addbid({ handleNewBid }) {
  const [bid, setBid] = useState(0);

  return (
    <div className={style.AddProductWrapper}>
      <div className={style.bid}>
        <input
          type="number"
          className={style.money}
          placeholder="In dollars"
          value={bid}
          onChange={(e) => setBid(e.target.value)}
        ></input>
        <div onClick={() => handleNewBid(bid)} className={style.btn}>
          OK
        </div>
      </div>
    </div>
  );
}
