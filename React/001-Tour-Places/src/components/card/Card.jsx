import React from "react";
import styles from "./Card.module.scss";
const Card = (props) => {
  const { title, desc, image } = props.item;
  return (
    <section className={styles.card}>
      <h2 className={styles.title}>{title}</h2>
      <img src={image} alt="" />
      <p className={styles.desc}>{desc}</p>
    </section>
  );
};

export default Card;
