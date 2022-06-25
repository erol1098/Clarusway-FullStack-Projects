import React from "react";
import styles from "./Navbar.module.scss";
const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <a href="#aboutus">About Us</a>
      <a href="#foryou">For You</a>
      <a href="#services">Services</a>
      <a href="#blog">Blog</a>
      <a href="#vlog">Vlog</a>
      <a href="#contact">Contact</a>
    </nav>
  );
};

export default Navbar;
