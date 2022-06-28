import React, { useEffect, useState } from "react";
import Back from "./Back";
import styles from "./Card.module.scss";
import Front from "./Front";
const Card = (props) => {
  const { image, title, options } = props;
  const [side, setSide] = useState("front");

  useEffect(() => {
    let timer;
    if (side === "back") {
      timer = setTimeout(() => {
        setSide("front");
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [side]);

  const changeSideHandler = (e) => {
    if (side === "front") {
      setSide("back");
    } else if (side === "back") {
      setSide("front");
    }
  };

  if (side === "front") {
    return (
      <div onClick={changeSideHandler} className={styles.card}>
        <Front image={image} title={title} />
      </div>
    );
  } else
    return (
      <div onClick={changeSideHandler} className={styles.card}>
        <Back options={options} />
      </div>
    );
};

export default Card;
