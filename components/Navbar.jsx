import React from "react";
import styles from "./styles/Navbar.module.css";
import Image from "next/image";
import logo from "@/assets/images/shared/desktop/logo.svg";
import cartIcon from "@/assets/images/shared/desktop/icon-cart.svg";

const Navbar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.headerDiv}>
          <Image src={logo} alt="Audiophile Logo" priority />
          <nav>
            <ul className={styles.navList}>
              <li>
                <button className={styles.navButton}>Home</button>
              </li>
              <li>
                <button className={styles.navButton}>Headphones</button>
              </li>
              <li>
                <button className={styles.navButton}>Speakers</button>
              </li>
              <li>
                <button className={styles.navButton}>Earphones</button>
              </li>
            </ul>
          </nav>
          <button className={styles.cartButton}>
            <Image src={cartIcon} alt="Cart Icon" priority />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
