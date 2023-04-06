import { React, useState } from "react";
import slides from "../../../../mock.json";
import style from "./styles.module.scss";
import { AiFillHeart } from "react-icons/ai";

export default function Card({ slides }) {
  const [isClicked, setIsClicked] = useState(false);
  const [color, setColor] = useState("grey");
  const [value, setValue] = useState(slides.reputation);
  const handleClick = () => {
    setIsClicked(!isClicked);
    setColor(isClicked ? "grey" : "white");
    if (isClicked) {
      setValue((value) => value - 1);
    } else {
      setValue((value) => value + 1);
    }
  };
  return (
    <div className={style.container}>
      <div className={style.box}>
        <img className={style.image} src={slides.photo}></img>
        <div className={style.title}>
          <b>{slides.title}</b>
        </div>
        <div className={style.owner}>
          <b style={{ color: "var(--primary-color-3)" }}>Owner: </b>
          <span className={style.owner_name}>{slides.owner.name}</span>
        </div>
        <div className={style.bid}>
          <b style={{ color: "var(--primary-color-3)" }}>
            Current Highest Bid:{" "}
          </b>{" "}
          {slides.current_highest_bid.currency}
          {slides.current_highest_bid.amount}{" "}
        </div>
        <div className={style.active}>
          {slides.live ? (
            <b className={style.live} style={{ color: "green" }}>
              LIVE{" "}
            </b>
          ) : (
            <b className={style.live}>EXPIRED</b>
          )}
          <>
            <span className={style.reputation}>
              {" "}
              <button
                className={style.like}
                onClick={handleClick}
                style={{ color: color }}
              >
                <AiFillHeart />
              </button>
              {value}
            </span>
          </>
        </div>
      </div>
    </div>
  );
}
