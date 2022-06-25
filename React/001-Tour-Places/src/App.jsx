import React from "react";
import styles from "./App.module.scss";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
const App = () => {
  return (
    <div className={styles.app}>
      <Navbar />
      <Header />
    </div>
  );
};

export default App;
