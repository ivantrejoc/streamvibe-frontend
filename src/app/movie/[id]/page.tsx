"use client";
import { use, useEffect, useMemo } from "react";
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
  const memoVideoPath = useMemo(() => videoPath, [videoPath]);

  const casting = movie?.credits?.cast.slice(0, 7);
  const memoCasting = useMemo(() => casting, [casting]);

  const director = movie?.credits?.crew.find(
    (personnel) => personnel.known_for_department === "Directing"
  );
  const memoDirector = useMemo(() => director, [director]);

  const music = movie?.credits?.crew.find(
    (personnel) => personnel.known_for_department === "Sound"
  );
  const memoMusic = useMemo(() => music, [music]);

  const reviews = movie?.reviews?.results;
  const memoReviews = useMemo(() => reviews, [reviews]);

  const releaseYear = movie?.release_date?.slice(0, 4);
  const memoReleaseYear = useMemo(() => releaseYear, [releaseYear]);

  const languages = movie?.spoken_languages;
  const rating = movie?.vote_average;
  const genres = movie?.genres;

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!movie) {
    return <div>Movie not found.</div>;
  }

  if (!memoVideoPath) {
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
          videoPath={memoVideoPath}
        />
        <MovieInfo
          description={movie?.overview}
          casting={memoCasting}
          director={memoDirector}
          music={memoMusic}
          reviews={memoReviews}
          releaseYear={memoReleaseYear}
          languages={languages}
          rating={rating}
          genres={genres}
        />
        <FreeTrialHero />
      </main>
    </div>
  );
}
