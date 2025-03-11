"use client";
import { useEffect } from "react";
import { fetchTrending } from "@streambive/redux/features/trending/trendingSlice";
import { useAppDispatch, useAppSelector } from "@streambive/redux/store";
import MoviesAndShowsSlider from "../components/moviesAndShowsSlider/MoviesAndShowsSlider";
import styles from "./moviesAndShows.module.css";
import { MoviesSection } from "../components/moviesSection";
import { fetchMoviesReleases } from "@streambive/redux/features/movies/moviesRelease/moviesReleaseSlice";
import { FreeTrialHero } from "../components/freeTrialHero";
import { fetchTopRatedMovies } from "@streambive/redux/features/movies/topRatedMovies/topRatedMoviesSlice";
import { fetchTvShowsReleases } from "@streambive/redux/features/tvShows/tvShowsReleases/tvShowsReleaseSlice";
import { fetchTopRatedShows } from "@streambive/redux/features/tvShows/topRatedShows/topRatedShowsSlice";

export default function MoviesAndShows() {
  const dispatch = useAppDispatch();
  const trending = useAppSelector((state) => state.trending.trending);
  const moviesReleases = useAppSelector(
    (state) => state.moviesRelease.releases
  );
  const topRatedMovies = useAppSelector(
    (state) => state.topRatedMovies.topRated
  );
  const tvShowsReleases = useAppSelector(
    (state) => state.tvShowsReleases.releases
  );

  const topRatedShows = useAppSelector((state) => state.topRatedShows.topRated);

  useEffect(() => {
    dispatch(fetchTrending());
    dispatch(fetchMoviesReleases());
    dispatch(fetchTopRatedMovies());
    dispatch(fetchTvShowsReleases());
    dispatch(fetchTopRatedShows());
  }, [dispatch]);

  const firstTenTrending = trending?.slice(0, 10);

  const trendingMovies = trending?.filter(
    (trending) => trending.media_type === "movie"
  );

  const trendingShows = trending?.filter(
    (trending) => trending.media_type === "tv"
  );

  const filteredShowsReleases = tvShowsReleases?.filter(
    (tvShow) => tvShow.poster_path !== null
  );

  const moviesSectionData = {
    sectionTitle: "Movies",
    trendingAndReleases: [
      {
        title: "Trending Now",
        moviesOrShows: trendingMovies
      },
      {
        title: "New Releases",
        moviesOrShows: moviesReleases
      }
    ],
    topRated: {
      title: "Must - Watch Movies",
      moviesOrShows: topRatedMovies
    }
  };

  const tvShowsSectionData = {
    sectionTitle: "TV Shows",
    trendingAndReleases: [
      {
        title: "Trending Now",
        moviesOrShows: trendingShows
      },
      {
        title: "New Releases",
        moviesOrShows: filteredShowsReleases
      }
    ],
    topRated: {
      title: "Must - Watch TV Shows",
      moviesOrShows: topRatedShows
    }
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <MoviesAndShowsSlider trendings={firstTenTrending} />
        <MoviesSection
          sectionTitle={moviesSectionData.sectionTitle}
          trendingAndReleases={moviesSectionData.trendingAndReleases}
          topRated={moviesSectionData.topRated}
        />
        <MoviesSection
          sectionTitle={tvShowsSectionData.sectionTitle}
          trendingAndReleases={tvShowsSectionData.trendingAndReleases}
          topRated={tvShowsSectionData.topRated}
        />
        <FreeTrialHero />
      </main>
    </div>
  );
}
