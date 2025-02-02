"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./dropdownMenu.module.css"

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPage, setSelectedPage] = useState(" ");

  const pages = ["Home", "Movies & Shows", "Support", "Subscriptions"];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (page: string) => {
    setSelectedPage(page);
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
          {selectedPage}
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
          <div
            className={styles.dropdownMenu}
          >
            <div className={styles.itemContainer}>
              {pages.map((page, index) => (
                <a
                  key={index}
                  href="#"
                  className={styles.menuItem}
                  onClick={() => handleSelect(page)}
                >
                  {page}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
