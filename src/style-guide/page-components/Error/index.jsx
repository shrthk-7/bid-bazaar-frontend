import React from 'react';
import styles from "./style.module.scss";

const Error = () => {
  return (
    <>
      <div className={styles.error}>
        <h1>404</h1>
        {/* 404 */}
        <p>Page Not Found</p>
      </div>
    </>
  )
}

export default Error