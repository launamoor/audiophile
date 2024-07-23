"use client";
import React from "react";
import styles from "./styles/Navbar.module.css";
import Image from "next/image";
import logo from "@/assets/images/shared/desktop/logo.svg";
import cartIcon from "@/assets/images/shared/desktop/icon-cart.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header
      style={{ backgroundColor: `${pathname === "/" ? "#111" : "#000"}` }}
    >
      <div className={styles.container}>
        <div className={styles.headerDiv}>
          <Image src={logo} alt="Audiophile Logo" priority />
          <nav>
            <ul className={styles.navList}>
              <li>
                <Link href={"/"} className={styles.navButton}>
                  Home
                </Link>
              </li>
              <li>
                <Link href={"/headphones"} className={styles.navButton}>
                  Headphones
                </Link>
              </li>
              <li>
                <Link href={"/speakers"} className={styles.navButton}>
                  Speakers
                </Link>
              </li>
              <li>
                <Link href={"/earphones"} className={styles.navButton}>
                  Earphones
                </Link>
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
