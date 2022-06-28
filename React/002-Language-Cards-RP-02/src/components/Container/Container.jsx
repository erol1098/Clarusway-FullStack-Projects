import React from "react";
import Card from "../Card/Card";
import styles from "./Container.module.scss";
import { languages } from "../../util/data";

const Container = () => {
  return (
    <div className={styles.box}>
      <h1>Languages</h1>
      <div className={styles.container}>
        {languages.map((language) => {
          const { name, img, options } = language;
          return <Card key={name} image={img} title={name} options={options} />;
        })}
      </div>
    </div>
  );
};

export default Container;
