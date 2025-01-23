import React from "react";
import styles from "./Menu.module.css";

const Menu = () => {
  return (
    <section id="menu" className={`container ${styles.menu}`}>
      <h2>Menu</h2>
      <ul>
        <li>Burger - $10</li>
        <li>Pizza - $12</li>
        <li>Beer - $5</li>
      </ul>
    </section>
  );
};

export default Menu;
