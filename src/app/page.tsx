"use client";
import { useEffect, useState, useCallback } from "react";
import { HomeHero } from "./components/homeHero";
import { CategoriesSection } from "./components/categoriesSection";
import styles from "./home.module.css";
import { DevicesSection } from "./components/devicesSection";
import FaqSection from "./components/faqSection/FaqSection";
import { PricingSection } from "./components/pricingSection";
import { FreeTrialHero } from "./components/freeTrialHero";
import { getApiGenres } from "./api/services/genres.services";
import { Genre } from "./api/models/genre.model";

export default function Home() {
  const [genres, setGenres] = useState<Genre[]>([]);
  
  const fetchGenres = useCallback(async () => {
    try {
      const response = await getApiGenres();
      setGenres(response);
    
    } catch (error) {
      console.error("Error fetching genres:", error);
    }
  }, []);
  useEffect(() => {
    fetchGenres();
  }, [fetchGenres]);
  
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <HomeHero />
        <CategoriesSection categories={genres} />
        <DevicesSection />
        <FaqSection />
        <PricingSection />
        <FreeTrialHero />
      </main>
    </div>
  );
}
