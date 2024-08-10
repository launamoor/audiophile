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
import CategoriesFlex from "./CategoriesFlex";
import { motion, useAnimationControls } from "framer-motion";

const Navbar = () => {
  const pathname = usePathname();
  const { cartOpen, openCart, closeCart } = useCart();

  const [mobileMenu, setMobileMenu] = useState(false);
  const [windowWidth, setWindowWidth] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setMobileMenu(windowWidth < 850 ? true : false);
    }

    const handleResize = () => {
      setWindowWidth(() => window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [mobileMenu, windowWidth]);

  const handleToggleCart = () => {
    if (cartOpen) {
      closeCart();
    } else {
      openCart();
    }
  };

  const wrapperVariants = {
    hidden: {
      opacity: 0,
      y: "-100vh",
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", delay: 0.1 },
    },
    exit: {
      y: "-100vh",
      transition: { ease: "easeInOut" },
    },
  };

  const controls = useAnimationControls();

  const handleToggleMobileMenu = () => {
    if (!mobileMenuOpen) controls.start("visible");
    if (mobileMenuOpen) {
      controls.start("exit");
      setTimeout(() => {
        setMobileMenuOpen((prev) => !prev);
      }, 250);
      return;
    }
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <header
      style={{ backgroundColor: `${pathname === "/" ? "#111" : "#000"}` }}
    >
      <div className={mobileMenu ? styles.containerMobile : styles.container}>
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
            <div style={{ width: "100%", position: "relative" }}>
              <nav style={{ width: "100%" }}>
                <ul className={styles.navListMobile}>
                  <li>
                    <button
                      onClick={handleToggleMobileMenu}
                      className={styles.menuButton}
                    >
                      <Image src={menuIcon} alt="Menu Icon" />
                    </button>
                  </li>
                  <li>
                    <Link onClick={() => setMobileMenuOpen(false)} href={"/"}>
                      <Image src={logo} alt="Audiophile Logo" priority />
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={() => handleToggleCart()}
                      className={styles.cartButton}
                    >
                      <Image src={cartIcon} alt="Cart Icon" priority />
                    </button>
                  </li>
                </ul>
              </nav>
              <motion.div
                variants={wrapperVariants}
                initial="hidden"
                animate={controls}
                exit="exit"
              >
                {mobileMenuOpen && (
                  <CategoriesFlex
                    style={{
                      marginTop: "5rem",
                      marginBottom: "5rem",
                      width: "100%",
                    }}
                    layout={{
                      flexDirection: "column",
                      gap: "8rem",
                      backgroundColor: "#fff",
                      padding: "10rem 0",
                    }}
                    mobileView={mobileMenu}
                    handleToggle={() => setMobileMenuOpen(false)}
                  />
                )}
              </motion.div>
            </div>
          )}

          {/* Mobile menu end */}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
