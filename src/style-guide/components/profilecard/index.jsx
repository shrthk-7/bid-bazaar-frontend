import React from "react";
import style from "./style.module.scss";
import slides from "../../../../user.json";
import { MdContentCopy } from "react-icons/Md";
import {
  SlSocialInstagram,
  SlSocialLinkedin,
  SlSocialTwitter,
} from "react-icons/Sl";

export default function Profilecard() {
  function textCopy() {
    console.log("a");
  }
  return (
    <div className={style.card}>
      <div className={style.card1}>
        <img className={style.profilepic} src={slides.profile_photo}></img>
        <div className={style.name}>{slides.name}</div>
        <div className={style.id}>
          <div className={style.username}>{slides.username}</div>
          <button className={style.btn} onClick={textCopy}>
            <MdContentCopy />
          </button>
        </div>
        <div className={style.bio}>{slides.bio}</div>
        <div className={style.icons}>
          <a className={style.links} href={slides.socials.instagram}>
            <SlSocialInstagram />
          </a>
          <a className={style.links} href={slides.socials.linkedIn}>
            <SlSocialLinkedin />
          </a>
          <a className={style.links} href={slides.socials.twitter}>
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
