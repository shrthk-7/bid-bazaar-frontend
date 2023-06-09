import React, { useState } from "react";
import styles from "./style.module.scss";
import slides from "../../../../mock.json";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { GrDown } from "react-icons/gr";

export default function Filteroptions({ setFilteredCat, setFilterOn }) {
  const [isClicked1, setIsClicked1] = useState(false);
  // const [val, setVal] = useState("");

  function toggle() {
    setIsClicked1(!isClicked1);
  }
  function handlebar() {}
  console.log(isClicked1);
  return (
    <div className={styles.categories}>
      <div className={styles.category}>
        <div className={styles.category_title}>CATEGORIES</div>
        <select
          name="category"
          id="category"
          onChange={(e) => {
            setFilterOn(true);
            setFilteredCat(e.target.value);
          }}
        >
          <option className={styles.categories_name} selected disabled>
            category
          </option>
          <option className={styles.categories_name} value="Automobiles">
            Automobiles
          </option>
          <option className={styles.categories_name} value="Apparel">
            Apparel
          </option>
          <option className={styles.categories_name} value="Books">
            Books
          </option>
          <option className={styles.categories_name} value="Collectibles">
            Collectibles
          </option>
          <option className={styles.categories_name} value="Services">
            Services
          </option>
          <option className={styles.categories_name} value="Miscellanous">
            Miscellanous
          </option>
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
        <div className="btn" onClick={handlebar}>
          OK
        </div>
      </div>
    </div>
  );
}
