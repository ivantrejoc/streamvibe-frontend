"use client";
import { useEffect } from "react";
import { fetchTrending } from "@streambive/redux/features/trending/trendingSlice";
import { useAppDispatch, useAppSelector } from "@streambive/redux/store";
import MoviesAndShowsSlider from "../components/moviesAndShowsSlider/MoviesAndShowsSlider";
import styles from "./moviesAndShows.module.css";
import { MoviesSection } from "../components/moviesSection";
import { fetchMoviesReleases } from "@streambive/redux/features/moviesRelease/moviesReleaseSlice";
import { FreeTrialHero } from "../components/freeTrialHero";
import { fetchTopRatedMovies } from "@streambive/redux/features/topRatedMovies/topRatedMoviesSlice";

export default function MoviesAndShows() {
  const dispatch = useAppDispatch();
  const trending = useAppSelector((state) => state.trending.trending);
  const moviesReleases = useAppSelector(
    (state) => state.moviesRelease.releases
  );
  const topRatedMovies = useAppSelector(
    (state) => state.topRatedMovies.topRated
  );

  useEffect(() => {
    dispatch(fetchTrending());
    dispatch(fetchMoviesReleases());
    dispatch(fetchTopRatedMovies());
  }, [dispatch]);

  const firstTenTrending = trending?.slice(0, 10);

  const trendingMovies = trending?.filter(
    (trending) => trending.media_type === "movie"
  );

  const moviesSectionData = {
    trendingAndReleases: [
      {
        title: "Trending Now",
        movies: trendingMovies
      },
      {
        title: "New Releases",
        movies: moviesReleases
      }
    ],
    topRated: {
      title: "Must -Watch Movies",
      movies: topRatedMovies
    }
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <MoviesAndShowsSlider trendings={firstTenTrending} />
        <MoviesSection
          trendingAndReleases={moviesSectionData.trendingAndReleases}
          topRated={moviesSectionData.topRated}
        />
        <FreeTrialHero />
      </main>
    </div>
  );
}
