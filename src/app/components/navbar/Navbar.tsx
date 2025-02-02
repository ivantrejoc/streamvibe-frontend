"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./navbar.module.css";
import DropdownMenu from "../dropdownMenu/DropdownMenu";

export function Navbar() {
  const [isMobile, setIsmobile] = useState(false);

  const handleSize = () => {
    if (window.innerWidth < 768) {
      setIsmobile(true);
    }
  };

  useEffect(() => {
    handleSize();

    window.addEventListener("resize", handleSize);
    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, []);

  return (
    <div className={styles.mainContainer}>
      <Link href="/">
        <div className={styles.logoContainer}>
          <Image
            src="/steamvibe-logo-white.png"
            alt="steamvibe-logo"
            layout="responsive"
            width={250}
            height={60}
            className={styles.logo}
          />
        </div>
      </Link>
      {!isMobile ? (
        <div className={styles.desktopNavContainer}>
          <div className={styles.linksContainer}>
            <Link className={styles.linksButtons} href="/">
              Home
            </Link>
            <Link href="/" className={styles.linksButtons}>
              Movies & Shows
            </Link>
            <Link className={styles.linksButtons} href="/">
              Support
            </Link>
            <Link className={styles.linksButtons} href="/">
              Subscriptions
            </Link>
          </div>
          <div className={styles.actionsContainer}>
            <button className={styles.actionButton}>
              <Image
                src="/icons8-magnifying-glass-192.png"
                alt="magnifying-glass"
                layout="fill"
              />
            </button>
            <button className={styles.actionButton}>
              <Image src="/icons8-bell-192.png" alt="bell-icon" layout="fill" />
            </button>
          </div>
        </div>
      ) : (
        <DropdownMenu />
      )}
    </div>
  );
}
