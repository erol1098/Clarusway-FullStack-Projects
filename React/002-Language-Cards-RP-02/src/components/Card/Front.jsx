import React from "react";
import styles from "./Card.module.scss";
const Front = (props) => {
  const { title, image } = props;
  return (
    <section className={styles.front}>
      <div className={styles.img}>
        <img src={image} alt={title} />
      </div>
      <p className={styles.title}>{title}</p>
    </section>
  );
};

export default Front;
