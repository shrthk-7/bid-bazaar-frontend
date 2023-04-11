import React from "react";
import style from "./style.module.scss";
// import slides from "../../../../user.json";
import {
  SlSocialInstagram,
  SlSocialLinkedin,
  SlSocialTwitter,
} from "react-icons/sl";

export default function Profilecard({ slides }) {
  return (
    <div className={style.card}>
      <div className={style.card1}>
        <img className={style.profilepic} src={slides.photoURL}></img>
        <div className={style.name}>{slides.name}</div>
        {/* <div className={style.id}>
          <div className={style.username}>username : {slides.name}</div>
        </div> */}
        {/* <div className={style.bio}>{slides.bio}</div> */}
        <div className={style.icons}>
          <a className={style.links} href={slides.socials?.instagram || "/#"}>
            <SlSocialInstagram />
          </a>
          <a className={style.links} href={slides.socials?.linkedIn || "/#"}>
            <SlSocialLinkedin />
          </a>
          <a className={style.links} href={slides.socials?.twitter || "/#"}>
            <SlSocialTwitter />
          </a>
        </div>
        <div className={style.reputation}>
          <span className={style.reputation_title}>Reputation: &nbsp;</span>{" "}
          {slides.reputation}
        </div>
      </div>
    </div>
  );
}
