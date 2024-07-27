import React from "react";
import styles from "@/components/styles/FeaturedItems.module.css";
import circles from "@/public/images/home/desktop/pattern-circles.svg";
import speaker from "@/public/images/home/desktop/image-speaker-zx9.png";
import Image from "next/image";
import Link from "next/link";

const FeaturedItems = () => {
  return (
    <section className={styles.outerWrapper}>
      <div className={styles.container}>
        <div className={styles.innerWrapper}>
          <div className={styles.zxspeakerOuterWrapper}>
            <div className={styles.circlesDiv}>
              <Image className={styles.circles} src={circles} alt="Circles" />
              <div className={styles.circlesSpeaker}>
                <Image src={speaker} alt="Speaker" />
              </div>
            </div>
            <div className={styles.zxspeakerInnerWrapper}>
              <div className={styles.zxspeakerTextbox}>
                <h2 className={styles.zxspeakerTitle}>ZX9 Speaker</h2>
                <p className={styles.zxspeakerDescription}>
                  Upgrade to premium speakers that are phenomenally built to
                  deliver truly remarkable sound.
                </p>
                <Link href={"/product/6"} className={styles.zxspeakerButton}>
                  See Product
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.zx7speakerOuterWrapper}>
            <div className={styles.zx7speakerTextbox}>
              <h4>ZX7 Speaker</h4>
              <Link href={"product/5"} className={styles.zx7speakerButton}>
                See Product
              </Link>
            </div>
          </div>
          <div className={styles.earphonesOuterWrapper}>
            <div className={styles.earphonesImage}></div>
            <div className={styles.earphonesTextbox}>
              <h4>YX1 Earphones</h4>
              <Link href={"product/1"} className={styles.zx7speakerButton}>
                See Product
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedItems;
