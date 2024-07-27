import React from "react";
import styles from "@/components/styles/Footer.module.css";
import Image from "next/image";
import logo from "@/assets/images/shared/desktop/logo.svg";
import facebookLogo from "@/assets/images/shared/desktop/icon-facebook.svg";
import instagramLogo from "@/assets/images/shared/desktop/icon-instagram.svg";
import twitterLogo from "@/assets/images/shared/desktop/icon-twitter.svg";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.outerWrapper}>
      <div className={styles.container}>
        <div className={styles.innerWrapper}>
          <div className={styles.navigationFlex}>
            <Image src={logo} alt="Logo" />
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
          </div>
          <div className={styles.descriptionDiv}>
            <p className={styles.description}>
              Audiophile is an all in one stop to fulfill your audio needs.
              We're a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we’re open 7 days a week.
            </p>
            <nav className={styles.socialNav}>
              <ul className={styles.socialNavList}>
                <li>
                  <button className={styles.socialButton}>
                    <Image src={facebookLogo} alt="Facebook logo" />
                  </button>
                </li>
                <li>
                  <button className={styles.socialButton}>
                    <Image src={instagramLogo} alt="Instagram logo" />
                  </button>
                </li>
                <li>
                  <button className={styles.socialButton}>
                    <Image src={twitterLogo} alt="Twitter logo" />
                  </button>
                </li>
              </ul>
            </nav>
          </div>
          <div className={styles.copyrightDiv}>
            <p className={styles.copyright}>
              Copyright 2021. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
