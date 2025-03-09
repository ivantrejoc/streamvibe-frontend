"use client";
import { useEffect } from "react";
import { fetchTrending } from "@streambive/redux/features/trending/trendingSlice";
import { useAppDispatch, useAppSelector } from "@streambive/redux/store";
import MoviesAndShowsSlider from "../components/moviesAndShowsSlider/MoviesAndShowsSlider";
import styles from "./moviesAndShows.module.css";

export default function MoviesAndShows() {
  const dispatch = useAppDispatch();
  const trending = useAppSelector((state) => state.trending.trending);

  useEffect(() => {
    dispatch(fetchTrending());
  }, [dispatch]);

  const firstTenTrending = trending?.slice(0, 10);
  console.log("FIRST TEN TRENDING: ", firstTenTrending);
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <MoviesAndShowsSlider trendings ={firstTenTrending} />
      </main>
    </div>
  );
}
