"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./dropdownMenu.module.css";


export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const routes = [
    { name: "Home", href: "/" },
    { name: "Movies and Shows", href: "/movies-and-shows" },
    { name: "Support", href: "/support" },
    { name: "Subscriptions", href: "subscriptions" }
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = () => {
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdownContainer}>
      <div className={styles.buttonContainer}>
        {/* Dropdown button */}
        <button
          type="button"
          className={styles.button}
          onClick={toggleDropdown}
        >
          <Image
            src="/bars-3.png"
            alt="burger-menu-icon"
            width={100}
            height={100}
            className={styles.icon}
          />
        </button>

        {/* Dropdown menu */}
        {isOpen && (
          <div className={styles.dropdownMenu}>
            <div className={styles.itemContainer}>
              {routes?.map((route, index) => (
                <a
                  key={index}
                  href={route.href}
                  className={styles.menuItem}
                  onClick={() => handleSelect()}
                >
                  {route.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
