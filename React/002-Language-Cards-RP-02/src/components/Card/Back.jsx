import React from "react";
import styles from "./Card.module.scss";

const Back = ({ options }) => {
  return (
    <section className={styles.back}>
      <ul className={styles.desc}>
        {options.map((option, index) => (
          <li key={index + 1}>{option}</li>
        ))}
      </ul>
    </section>
  );
};

export default Back;
