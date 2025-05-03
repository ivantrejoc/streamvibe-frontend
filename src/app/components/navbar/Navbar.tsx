"use client";
import { useIsMobile } from "@streambive/hooks";
import Link from "next/link";
import Image from "next/image";
import styles from "./navbar.module.css";
import DropdownMenu from "../dropdownMenu/DropdownMenu";

export default function Navbar() {
  const isMobile = useIsMobile();

  const routes = [
    { name: "Home", href: "/" },
    { name: "Movies and Shows", href: "/movies-and-shows" },
    { name: "Support", href: "/support" },
    { name: "Subscriptions", href: "subscriptions" }
  ];

  return (
    <nav className={styles.mainContainer}>
      <Link href="/">
        <div className={styles.logoContainer}>
          <Image
            src="/steamvibe-logo-white.png"
            alt="steamvibe-logo"
            width={250}
            height={83.3}
            className={styles.logo}
            style={{ objectFit: "cover" }}
          />
        </div>
      </Link>
      {!isMobile ? (
        <div className={styles.desktopNavContainer}>
          <div className={styles.linksContainer}>
            {routes?.map((route, index) => (
              <Link key={index} className={styles.linkButton} href={route.href}>
                {route.name}
              </Link>
            ))}
          </div>
          <div className={styles.actionsContainer}>
            <button className={styles.actionButton}>
              <Image
                src="/icons8-magnifying-glass-192.png"
                alt="magnifying-glass"
                width={30}
                height={30}
                style={{ objectFit: "cover" }}
              />
            </button>
            <button className={styles.actionButton}>
              <Image
                src="/icons8-bell-192.png"
                alt="bell-icon"
                width={30}
                height={30}
                style={{ objectFit: "cover" }}
              />
            </button>
          </div>
        </div>
      ) : (
        <DropdownMenu />
      )}
    </nav>
  );
}
