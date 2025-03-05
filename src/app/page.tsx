"use client";
import { HomeHero } from "./components/homeHero";
import { CategoriesSection } from "../categoriesSection";
import styles from "./home.module.css";
import { DevicesSection } from "./components/devicesSection";
import FaqSection from "./components/faqSection/FaqSection";
import { PricingSection } from "./components/pricingSection";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <HomeHero />
        <CategoriesSection />
        <DevicesSection />
        <FaqSection />
        <PricingSection/>
      </main>
    </div>
  );
}
