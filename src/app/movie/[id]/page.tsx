"use client";
import { use, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@streambive/redux/store";
import { fetchMovieById } from "@streambive/redux/features/movies/movieById/movieByIdSlice";
import VideoHero from "@streambive/app/components/videoHero/VideoHero";
import styles from "../../../styles/views.module.css";
import { FreeTrialHero } from "@streambive/app/components/freeTrialHero";
import { MovieInfo } from "@streambive/app/components/movieInfo";
interface MovieParams {
  params: Promise<Params>;
}

type Params = {
  id: string;
};

export default function MovieDetails({ params }: MovieParams) {
  const { id } = use(params);
  const dispatch = useAppDispatch();
  const movie = useAppSelector((state) => state.movieById.movieDetails);
  const loading = useAppSelector((state) => state.movieById.loading);

  useEffect(() => {
    dispatch(fetchMovieById(id));
  }, [dispatch, id]);

  const videos = movie?.videos?.results;
  const videoPath = videos?.find((video) => video.type === "Trailer");

  console.log("THE MOVIE DETAILS: ", movie);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!movie) {
    return <div>Movie not found.</div>;
  }

  if (!videoPath) {
    return <div>No trailers available.</div>;
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <VideoHero
          key={movie.id}
          title={movie.original_title}
          synopsis={movie.overview}
          imagePath={movie.backdrop_path}
          videoPath={videoPath}
        />
        <MovieInfo />
        <FreeTrialHero />
      </main>
    </div>
  );
}
