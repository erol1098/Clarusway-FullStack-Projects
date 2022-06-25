import React from "react";
import styles from "./Main.module.scss";
import { data } from "../../util/data";
import Card from "../card/Card";

const Main = () => {
  return (
    <main className={styles["card-container"]}>
      {data.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </main>
  );
};
export default Main;
