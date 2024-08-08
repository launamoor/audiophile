"use client";
import React from "react";
import styles from "./styles/Navbar.module.css";
import Image from "next/image";
import logo from "@/assets/images/shared/desktop/logo.svg";
import cartIcon from "@/assets/images/shared/desktop/icon-cart.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/CartContext";
import menuIcon from "@/assets/images/shared/tablet/icon-hamburger.svg";
import { useState, useEffect } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const { cartOpen, openCart, closeCart } = useCart();

  const [mobileMenu, setMobileMenu] = useState(true);
  const [windowWidth, setWindowWidth] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setMobileMenu(windowWidth < 850 ? true : false);
    }

    window.addEventListener("resize", () => {
      setWindowWidth(() => window.innerWidth);
    });

    return () =>
      window.removeEventListener("resize", () => {
        setWindowWidth(() => window.innerWidth);
      });
  }, [mobileMenu, windowWidth]);

  const handleToggleCart = () => {
    if (cartOpen) {
      closeCart();
    } else {
      openCart();
    }
  };

  return (
    <header
      style={{ backgroundColor: `${pathname === "/" ? "#111" : "#000"}` }}
    >
      <div className={styles.container}>
        <div className={styles.headerDiv}>
          {!mobileMenu && (
            <div className={styles.dekstopMenu}>
              <Link href={"/"}>
                <Image src={logo} alt="Audiophile Logo" priority />
              </Link>
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

              <button onClick={handleToggleCart} className={styles.cartButton}>
                <Image src={cartIcon} alt="Cart Icon" priority />
              </button>
            </div>
          )}

          {/* Mobile menu */}

          {mobileMenu && (
            <nav style={{ width: "100%" }}>
              <ul className={styles.navListMobile}>
                <li>
                  <button className={styles.menuButton}>
                    <Image src={menuIcon} alt="Menu Icon" />
                  </button>
                </li>
                <li>
                  <Link href={"/"}>
                    <Image src={logo} alt="Audiophile Logo" priority />
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleToggleCart}
                    className={styles.cartButton}
                  >
                    <Image src={cartIcon} alt="Cart Icon" priority />
                  </button>
                </li>
              </ul>
            </nav>
          )}

          {/* Mobile menu end */}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
