import React, { useCallback, useContext, useState, useEffect } from "react";
import styles from "./style.module.scss";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

import { Graph } from "@/style-guide/components/graph";
import { formatDate } from "@/utils/formatDate";
import { SocketContext } from "@/context/socket-context";
import Addbid from "@/style-guide/components/addbid";

const tempData = {
  _id: "643051504188fe9e8eefc7d5",
  owner: {
    _id: "642fdbfcbff8d9dea880739e",
    name: "Sharthak",
    email: "sharthak21_ug@cse.nits.ac.in",
    photoURL:
      "https://lh3.googleusercontent.com/a/AGNmyxZZ0uKwYG2H1ZbXjOVnhxECh1XOk5B348N1nGiS=s96-c",
    socials: {},
    listedProducts: [],
    boughtProducts: [],
    currentBids: [],
    balance: 1000,
    reputation: 0,
  },
  currentHighestBidder: {
    _id: "642fdbfcbff8d9dea880739e",
    name: "Ankan Dutta",
    email: "sharthak21_ug@cse.nits.ac.in",
    photoURL:
      "https://lh3.googleusercontent.com/a/AGNmyxZZ0uKwYG2H1ZbXjOVnhxECh1XOk5B348N1nGiS=s96-c",
    socials: {},
    listedProducts: [],
    boughtProducts: [],
    currentBids: [],
    balance: 1000,
    reputation: 0,
  },
  title: "random",
  description: "bing bong",
  photos: [
    "https://mlpnk72yciwc.i.optimole.com/cqhiHLc.IIZS~2ef73/w:auto/h:auto/q:75/https://bleedingcool.com/wp-content/uploads/2020/10/One-Piece-Luffy-King-of-Pirates.jpg",
    "https://preview.redd.it/4eeesam0tcp81.jpg?width=640&crop=smart&auto=webp&s=a7ae18fe0157fd767685c32f8e1c714f27e35a36",
    "https://qph.cf2.quoracdn.net/main-qimg-3b2663d31c1abb07a9b6548c90ed27c2-pjlq",
  ],
  category: "book",
  start: "2023-04-06T21:13:47.733Z",
  end: "2023-04-06T21:13:47.799Z",
  reputation: 0,
  currentHighestBid: 150,
  bidHistory: [
    {
      time: "2023-04-05T12:00:00Z",
      bid: "456",
    },
    {
      time: "2023-04-05T12:00:00Z",
      bid: "456",
    },
    {
      time: "2023-04-07T12:00:00Z",
      bid: "500",
    },
    {
      time: "2023-04-07T12:00:00Z",
      bid: "500",
    },
    {
      time: "2023-04-10T12:00:00Z",
      bid: "600",
    },
    {
      time: "2023-04-10T12:00:00Z",
      bid: "600",
    },
    {
      time: "2023-04-05T12:00:00Z",
      bid: "456",
    },
    {
      time: "2023-04-07T12:00:00Z",
      bid: "500",
    },
    {
      time: "2023-04-10T12:00:00Z",
      bid: "600",
    },
  ],
};

const ProductPage = ({ id }) => {
  const { socket } = useContext(SocketContext);
  const [timeLeft, setTimeLeft] = useState("loading");
  const [bidding, setBidding] = useState(false);

  const [data, setData] = useState(tempData);
  let isLive = Date.now() <= new Date(data.end);
  const graphLabels = [];
  const graphData = [];
  data.bidHistory.map((ele) => {
    graphLabels.push("");
    graphData.push(ele.bid);
  });

  const keepUpdatingTimeLeft = (product) => {
    const presentDate = new Date();
    const temp = new Date(product?.end || Date.now() + 100000);
    if (temp.getTime() <= presentDate.getTime()) {
      setTimeLeft("Ended");
      isLive = false;
      return;
    }
    const timeLeftInMS = temp.getTime() - presentDate.getTime();
    const formattedDate = formatDate(timeLeftInMS);
    setTimeLeft(() => formattedDate);
    setTimeout(() => keepUpdatingTimeLeft(), 60 * 1000);
  };

  const handleNewBid = (newBid) => {
    setBidding(false);
    const userId = localStorage.getItem("_id");
    socket.emit("newBid", userId, id, newBid);
  };

  const [isLiked, setIsLiked] = useState(false);
  const [reputation, setReputation] = useState(data.reputation);
  const handleLike = () => {
    const event = !isLiked;
    const userId = localStorage.getItem("_id");
    setIsLiked((prevState) => {
      if (prevState) setReputation((rep) => rep - 1);
      else setReputation((rep) => rep + 1);
      return !prevState;
    });
    socket.emit("Like-event", userId, id, event);
  };

  useEffect(() => {
    if (!socket) return;
    socket.emit("connect-to-room", id);
    socket.on("productinfo", (product) => {
      // console.log(product);
      setData(product);
      keepUpdatingTimeLeft(product);
    });
    return () => socket.off("productinfo");
  }, [socket]);

  return (
    <div className={styles.productPage}>
      {bidding ? <Addbid handleNewBid={handleNewBid} /> : null}
      <div className={styles.productCard}>
        <div className={styles.productCarousel}>
          <Swiper
            navigation={true}
            modules={[Navigation]}
            className={styles.mySwiper}
          >
            {data.photos.map((ele) => {
              return (
                <SwiperSlide>
                  <img src={ele} alt="" />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className={styles.productData}>
          <div className={styles.title}>{data.title}</div>
          <div className={styles.smallData}>
            <p>{data._id}</p>
            <span>{data.category}</span>
            <span className={isLive ? styles.live : styles.ended}>
              {isLive ? "Live" : "Ended"}
            </span>
          </div>
          <div className={styles.owner}>
            <div>
              <p>{data.owner.name}</p>
              <span>Owner</span>
            </div>
            <div onClick={handleLike}>
              {isLiked ? <AiFillHeart /> : <AiOutlineHeart />}
              {/* {`${isLiked}`} */}
              <span>{reputation}</span>
            </div>
          </div>
          <div className={styles.bidData}>
            <div className={styles.highestBidder}>
              <span>Current Bid</span>
              <div>
                <h3>${data.currentHighestBid || 0}</h3>
              </div>
              <p>{data.currentHighestBidder?.name || "Ankan"}</p>
            </div>
            <div className={styles.countDown}>
              <span>Auction Ends in</span>
              <p>{timeLeft}</p>
            </div>
            <div className={styles.btn} onClick={() => setBidding(true)}>
              Bid
            </div>
          </div>
          <Graph data={graphData} labels={graphLabels} />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
