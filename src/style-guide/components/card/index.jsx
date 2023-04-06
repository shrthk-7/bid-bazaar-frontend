import { React, useState } from "react";
import slides from "../../../../mock.json";
import style from "./styles.module.scss";
import { AiFillHeart } from "react-icons/ai";

export default function Card() {
  const [isClicked, setIsClicked] = useState(false);
  const [color, setColor] = useState("grey");
  // const [value, setValue] = useState(value);
  const handleClick = () => {
    setIsClicked(!isClicked);
    setColor(isClicked ? "grey" : "white");
    // if (isClicked) {
    //   setValue(value - 1);
    // } else {
    //   setValue(value + 1);
    // }
    // setIsClicked(!isClicked);
  };
  return (
    <div className={style.container}>
      {slides.map((slide) => (
        <div className={style.box}>
          <img className={style.image} src={slide.photo}></img>
          <div className={style.title}>
            <b>{slide.title}</b>
          </div>
          <div className={style.owner}>
            <b style={{ color: "grey" }}>Owner: </b>
            <span className={style.owner_name}>{slide.owner.name}</span>
          </div>
          <div className={style.bid}>
            <b style={{ color: "grey" }}>Current Highest Bid: </b>{" "}
            {slide.current_highest_bid.currency}
            {slide.current_highest_bid.amount}{" "}
          </div>
          <div className={style.active}>
            {slide.live ? (
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
                {slide.reputation}
              </span>
            </>
          </div>
        </div>
      ))}
    </div>
  );
}
