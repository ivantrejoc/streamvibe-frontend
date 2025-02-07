"use client";
import { HomeHero } from "./components/homeHero";
import { CategoriesSection } from "./components/categoriesSection";
import styles from "./home.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <HomeHero />
        <CategoriesSection />
      </main>
    </div>
  );
}
