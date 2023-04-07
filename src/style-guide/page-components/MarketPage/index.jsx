import React, { useState, useEffect } from "react";
import styles from "./style.module.scss";
import { BiFilterAlt, BiQuestionMark, BiDirections } from "react-icons/bi";
import { RiAuctionLine } from "react-icons/ri";
import data from "../../../../mock.json";
import Card from "@/style-guide/components/card";
import Filteroptions from "@/style-guide/components/filteroptions";

const MarketPage = () => {
  const [selectedAuctionType, setSelectedAuctionType] = useState("standard");
  const [filterOn, setFilterOn] = useState(false);
  const [auctionData, setAuctionData] = useState([]);

  useEffect(() => {
    // fetching with standard auction type
    setAuctionData(data.filter((ele) => ele.auction_type === "standard"));
  }, []);
  const handleFilter = () => {
    // fetching with filter
    // setData=fetched data
    setFilterOn(!filterOn);
  };
  const handleNavClick = (a) => {
    setSelectedAuctionType(a);
    console.log({ data });
    setAuctionData(data.filter((ele) => ele.auction_type === a));
  };
  return (
    <div className={styles.marketPageBg}>
      <div className={styles.heroBloblight}></div>
      <div className={styles.marketPage}>
        <div className={styles.navbar}>
          <p
            className={`${
              selectedAuctionType === "standard"
                ? styles.navSelected
                : styles.navInitial
            }`}
            onClick={() => handleNavClick("standard")}
          >
            <RiAuctionLine />
            <span>Standard Auction</span>
          </p>
          <p
            className={`${
              selectedAuctionType === "reverse"
                ? styles.navSelected
                : styles.navInitial
            }`}
            onClick={() => handleNavClick("reverse")}
          >
            <BiDirections />
            <span>Reverse Auction</span>
          </p>
          <p
            className={`${
              selectedAuctionType === "anonymous"
                ? styles.navSelected
                : styles.navInitial
            }`}
            onClick={() => handleNavClick("anonymous")}
          >
            <BiQuestionMark />
            <span>Anonymous Auction</span>
          </p>
          <p
            className={`${filterOn ? styles.navSelected : styles.navInitial}`}
            onClick={handleFilter}
          >
            <BiFilterAlt />
            <span>Filter</span>
          </p>
          {filterOn ? <Filteroptions /> : null}
        </div>
        <div className={styles.mainData}>
          {/* data mapping */}
          {auctionData.length > 0 &&
            auctionData.map((ele) => {
              return <Card slides={ele} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default MarketPage;
