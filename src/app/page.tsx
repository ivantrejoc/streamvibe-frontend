"use client";
import { useEffect } from "react";
import { fetchGenres } from "@streambive/redux/features/genres/genresSlice";
import { useAppDispatch, useAppSelector } from "@streambive/redux/store";
import { HomeHero } from "./components/homeHero";
import { CategoriesSection } from "./components/categoriesSection";
import styles from "./home.module.css";
import { DevicesSection } from "./components/devicesSection";
import FaqSection from "./components/faqSection/FaqSection";
import { PricingSection } from "./components/pricingSection";
import { FreeTrialHero } from "./components/freeTrialHero";

export default function Home() {
  const dispatch = useAppDispatch();
  const genres = useAppSelector((state) => state.genres.genres);

  useEffect(() => {
    dispatch(fetchGenres());
  }, [dispatch]);

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
