import React, { useState } from "react";
import styles from "./style.module.scss";
import Spinner from "../spinner";

const AddProduct = ({ AddProductOn, setAddProductOn }) => {
  const [title, setTitle] = useState();
  const [images, setImages] = useState([]);
  const [category, setCategory] = useState();
  const [start, setStart] = useState();
  const [end, setEnd] = useState();
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const sendForm = new FormData();
    sendForm.set("title", title);
    sendForm.set("images", images);
    sendForm.set("category", category);
    sendForm.set("start", start);
    sendForm.set("end", end);
    console.log({ category });
    // post request and loading=false
  };
  return (
    <>
      {loading ? <Spinner /> : null}
      <div className={styles.AddProductWrapper}>
        <div className={styles.AddProduct}>
          <p className="btn" onClick={() => setAddProductOn(false)}>
            x
          </p>
          <h2>Add New Product</h2>
          <div>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="Category">Category</label>
            {/* <input
              type="text"
              id="Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            /> */}
            <select
              name="category"
              id="Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option selected disabled>
                category
              </option>
              <option value="Automobiles">Automobiles</option>
              <option value="Apparel">Apparel</option>
              <option value="Books">Books</option>
              <option value="Collectibles">Collectibles</option>
              <option value="Services">Services</option>
              <option value="Miscellanous">Miscellanous</option>
            </select>
          </div>
          <div>
            <label htmlFor="start">Start Bid</label>
            <input
              type="datetime-local"
              id="start"
              value={start}
              onChange={(e) => setStart(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="end">End Bid</label>
            <input
              type="datetime-local"
              id="end"
              value={end}
              onChange={(e) => setEnd(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="images">Images</label>
            <input
              type="file"
              id="images"
              className={styles.imageOverflow}
              multiple
              onChange={(e) => {
                const files = Array.from(e.target.files);
                const imageBody = document.querySelector("#imgupload");
                while (imageBody.firstChild) {
                  imageBody.removeChild(imageBody.lastChild);
                }
                setImages([]);
                files.forEach((file) => {
                  const reader = new FileReader();
                  reader.onload = () => {
                    if (reader.readyState === 2) {
                      setImages((old) => [...old, reader.result]);
                      const links = document.createElement("a");
                      links.href = reader.result;
                      links.target = "_blank";
                      const image = document.createElement("img");
                      image.src = reader.result;
                      links.appendChild(image);
                      imageBody.appendChild(links);
                    }
                  };
                  reader.readAsDataURL(file);
                });
              }}
            />
          </div>
          <div className={styles.imageUploadSection}>
            <label htmlFor="imgupload">Images to be Uploaded</label>
            <div className={styles.imageUploaded} id="imgupload"></div>
          </div>
          <div className="btn" onClick={handleSubmit}>
            submit
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
