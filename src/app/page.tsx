"use client";
import { HomeHero } from "./components/homeHero";
import { CategoriesSection } from "./components/categoriesSection";
import styles from "./home.module.css";
import { DevicesSection } from "./components/devicesSection";
import FaqSection from "./components/faqSection/FaqSection";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <HomeHero />
        <CategoriesSection />
        <DevicesSection />
        <FaqSection />
      </main>
    </div>
  );
}
