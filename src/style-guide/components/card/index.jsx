import { React, useState } from "react";
import style from "./style.module.scss";
import { BsBookmarkPlus, BsFillBookmarkCheckFill } from "react-icons/bs";

export default function Card({ slides }) {
  const [isClicked, setIsClicked] = useState(false);
  const [value, setValue] = useState(slides.bookmark);

  console.log(slides.photos);

  const [isLive, setIsLive] = useState(
    () => Date.now() >= slides.start && Date.now() < slides.end
  );

  const handleClick = () => {
    setIsClicked(!isClicked);
    setValue(!value);
  };

  return (
    <div className={style.container}>
      <div className={style.box}>
        <a href={`/product/${slides._id}`}>
          <img
            className={style.image}
            src={slides.photos ? slides.photos[0] : ""}
          ></img>
        </a>
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
          ${slides.currentHighestBid}{" "}
        </div>
        <div className={style.active}>
          {isLive ? (
            <b className={style.live} style={{ color: "green" }}>
              LIVE{" "}
            </b>
          ) : (
            <b className={style.live}>EXPIRED</b>
          )}
          <>
            <span className={style.reputation}>
              {" "}
              <button className={style.bookmark} onClick={handleClick}>
                {isClicked ? <BsFillBookmarkCheckFill /> : <BsBookmarkPlus />}
              </button>
              {/* {value} */}
            </span>
          </>
        </div>
      </div>
    </div>
  );
}
