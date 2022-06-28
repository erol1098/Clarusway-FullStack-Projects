import React from "react";
import styles from "./App.module.css";
import Container from "./components/Container/Container";
import logo from "./assets/react.svg";
const App = () => {
  return (
    <main className={styles.app}>
      <img src={logo} alt="logo" style={{ width: "13rem" }} />
      <Container />
    </main>
  );
};

export default App;
