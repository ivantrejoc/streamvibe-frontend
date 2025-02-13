"use client";
import { useState } from "react";
import styles from "./faqItem.module.css";
import Image from "next/image";

interface FaqItemProps {
  id: number;
  title: string;
  content: string;
}

export default function FaqItem({ id, title, content }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${isOpen ? styles.open : styles.closed}`}>
      <div className={styles.faqIndex}>
        <span className={styles.id}>{id < 10 ? `${id}` : id}</span>
      </div>
      <div
        className={`${styles.textContainer} ${
          isOpen ? styles.textContainerOpen : ""
        }`}
      >
        <span className={styles.title}>{title}</span>
        <span className={`${styles.content} ${isOpen ? styles.show : ""}`}>
          {content}
        </span>
      </div>
      <button className={styles.faqButton} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
            
          <Image width={32}
          height={32} src={"/minus.png"} className={styles.icon} alt="minus-icon" />
        ) : (
          <Image width={32}
          height={32} src={"/plus.png"} className={styles.icon} alt="plus-icon" />
        )}
      </button>
    </div>
  );
}
