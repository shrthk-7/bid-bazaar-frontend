import React from "react";
import styles from "./style.module.scss";
import allData from "../../../../mock.json";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

import { Graph } from "@/style-guide/components/graph";

const ProductPage = ({ id }) => {
  const data = allData.find((ele) => ele.id === id);
  console.log({ data });
  const images = data.more_photos;
  images.push(data.photo);
  const graphLabels = [];
  const graphData = [];
  data.bid_history.map((ele) => {
    graphLabels.push(ele.time);
    graphData.push(ele.bid);
  });
  return (
    <div className={styles.productPage}>
      <div className={styles.productCard}>
        <div className={styles.productCarousel}>
          <Swiper
            navigation={true}
            modules={[Navigation]}
            className={styles.mySwiper}
          >
            {images.map((ele) => {
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
            <p>{data.id}</p>
            <span>{data.category}</span>
            <span className={`${data.live ? styles.live : styles.ended}`}>
              {data.live ? "Live" : "Ended"}
            </span>
          </div>
          <div className={styles.owner}>
            <div>
              <p>{data.owner.name}</p>
              <span>Owner</span>
            </div>
            <div>
              <AiOutlineHeart />
              <span>{data.reputation}</span>
            </div>
          </div>
          <div className={styles.bidData}>
            <div className={styles.highestBidder}>
              <span>Current Bid</span>
              <div>
                <h2>{data.current_highest_bid.currency}</h2>
                <h3>{data.current_highest_bid.amount}</h3>
              </div>
              <p>{data.current_highest_bid.bidder.name}</p>
            </div>
            <div className={styles.countDown}>
              <span>Auction Ends in</span>
              <p>{data.time_left}</p>
            </div>
            <div className={styles.btn}>BID</div>
          </div>
          <Graph data={graphData} labels={graphLabels} />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
