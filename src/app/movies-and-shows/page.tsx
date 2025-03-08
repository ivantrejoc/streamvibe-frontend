"use client";
import MoviesAndShowsSlider from "../components/moviesAndShowsSlider/MoviesAndShowsSlider";
import styles from "./moviesAndShows.module.css";

export default function MoviesAndShows() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
       <MoviesAndShowsSlider />
      </main>
    </div>
  );
}
