import { React, useState } from "react";
import style from "./style.module.scss";
import slides from "../../../../user.json";
import Card from "../card";

export default function Tabs() {
  const [isClicked1, setIsClicked1] = useState(true);
  const [color1, setColor1] = useState("var(--heroSection-bg2)");
  const [isClicked2, setIsClicked2] = useState(false);
  const [color2, setColor2] = useState("var(--card-bg1)");
  const [isClicked3, setIsClicked3] = useState(false);
  const [color3, setColor3] = useState("var(--card-bg1)");
  const [isClicked4, setIsClicked4] = useState(false);
  const [color4, setColor4] = useState("var(--card-bg1)");
  function filter1() {
    setColor1("var(--heroSection-bg2)");
    setColor2("var(--card-bg1)");
    setColor3("var(--card-bg1)");
    setColor4("var(--card-bg1)");
    setIsClicked1(true);
    setIsClicked2(false);
    setIsClicked3(false);
    setIsClicked4(false);
  }
  function filter2() {
    setColor1("var(--card-bg1)");
    setColor2("var(--heroSection-bg2)");
    setColor3("var(--card-bg1)");
    setColor4("var(--card-bg1)");
    setIsClicked1(false);
    setIsClicked2(true);
    setIsClicked3(false);
    setIsClicked4(false);
  }
  function filter3() {
    setColor1("var(--card-bg1)");
    setColor2("var(--card-bg1)");
    setColor3("var(--heroSection-bg2)");
    setColor4("var(--card-bg1)");
    setIsClicked1(false);
    setIsClicked2(false);
    setIsClicked3(true);
    setIsClicked4(false);
  }
  function filter4() {
    setColor1("var(--card-bg1)");
    setColor2("var(--card-bg1)");
    setColor3("var(--card-bg1)");
    setColor4("var(--heroSection-bg2)");
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
          slides.current_bids.map((item) => {
            return <Card slides={item} />;
          })}
        {isClicked2 &&
          slides.bought_items.map((item) => {
            return <Card slides={item} />;
          })}
        {isClicked3 &&
          slides.saved_products.map((item) => {
            return <Card slides={item} />;
          })}
        {isClicked4 &&
          slides.sold_items.map((item) => {
            return <Card slides={item} />;
          })}
      </div>
    </div>
  );
}
