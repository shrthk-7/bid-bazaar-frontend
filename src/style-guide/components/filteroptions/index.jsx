import React, { useState } from "react";
import styles from "./style.module.scss";
import slides from "../../../../mock.json";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { GrDown } from "react-icons/gr";

export default function Filteroptions() {
  const [isClicked1, setIsClicked1] = useState(false);
  function toggle() {
    setIsClicked1(!isClicked1);
  }
  console.log(isClicked1);
  return (
    <div className={styles.categories}>
      <div className={styles.category}>
        <div className={styles.category_title}>CATEGORIES</div>
        <select name="category" id="category">
          <option className={styles.categories_name} selected disabled>
            category
          </option>
          <option className={styles.categories_name}>Automobiles</option>
          <option className={styles.categories_name}>Apparel</option>
          <option className={styles.categories_name}>Books</option>
          <option className={styles.categories_name}>Collectibles</option>
          <option className={styles.categories_name}>Miscellanous</option>
        </select>
      </div>
      <div className={styles.pricerange}>
        <div className={styles.pricerange_title}>PRICE RANGE</div>
        <div className={styles.price_inputs}>
          <input
            type="number"
            placeholder="Min"
            className={styles.mini}
          ></input>
          <input
            type="number"
            placeholder="Max"
            className={styles.maxi}
          ></input>
        </div>
      </div>
    </div>
  );
}
