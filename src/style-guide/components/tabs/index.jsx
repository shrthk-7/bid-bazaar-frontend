import { React, useState } from "react";
import style from "./style.module.scss";
// import slides from "../../../../user.json";
import Card from "../card";

export default function Tabs({ slides }) {
  const [isClicked1, setIsClicked1] = useState(true);
  const [color1, setColor1] = useState("var(--btn-bg-1)");
  const [isClicked2, setIsClicked2] = useState(false);
  const [color2, setColor2] = useState("transparent");
  const [isClicked3, setIsClicked3] = useState(false);
  const [color3, setColor3] = useState("transparent");
  const [isClicked4, setIsClicked4] = useState(false);
  const [color4, setColor4] = useState("transparent");
  function filter1() {
    setColor1("var(--btn-bg-1)");
    setColor2("transparent");
    setColor3("transparent");
    setColor4("transparent");
    setIsClicked1(true);
    setIsClicked2(false);
    setIsClicked3(false);
    setIsClicked4(false);
  }
  function filter2() {
    setColor1("transparent");
    setColor2("var(--btn-bg-1)");
    setColor3("transparent");
    setColor4("transparent");
    setIsClicked1(false);
    setIsClicked2(true);
    setIsClicked3(false);
    setIsClicked4(false);
  }
  function filter3() {
    setColor1("transparent");
    setColor2("transparent");
    setColor3("var(--btn-bg-1)");
    setColor4("transparent");
    setIsClicked1(false);
    setIsClicked2(false);
    setIsClicked3(true);
    setIsClicked4(false);
  }
  function filter4() {
    setColor1("transparent");
    setColor2("transparent");
    setColor3("transparent");
    setColor4("var(--btn-bg-1)");
    setIsClicked1(false);
    setIsClicked2(false);
    setIsClicked3(false);
    setIsClicked4(true);
  }
  console.log(slides);

  return (
    <div className={style.outline}>
      <div className={style.navbar}>
        <div
          className={style.currentbids}
          style={{ background: color1 }}
          onClick={filter1}
        >
          Current Bids
        </div>
        <div
          className={style.boughtitems}
          onClick={filter2}
          style={{ background: color2 }}
        >
          Purchases
        </div>
        <div
          className={style.saveditems}
          onClick={filter3}
          style={{ background: color3 }}
        >
          Saved{" "}
        </div>
        <div
          className={style.solditems}
          onClick={filter4}
          style={{ background: color4 }}
        >
          On Sale
        </div>
      </div>
      <div className={style.cards}>
        {isClicked1 &&
          slides.listedProducts?.map((item) => {
            return <Card slides={item} />;
          })}
        {isClicked2 &&
          slides.listedProducts?.map((item) => {
            return <Card slides={item} />;
          })}
        {isClicked3 &&
          slides.currentBids?.map((item) => {
            return <Card slides={item} />;
          })}
        {isClicked4 &&
          slides.listedProducts?.map((item) => {
            return <Card slides={item} />;
          })}
      </div>
    </div>
  );
}
