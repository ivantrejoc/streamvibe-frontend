import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import genresReducer from "./features/genres/genresSlice";
import trendingReducer from "./features/trending/trendingSlice";
import moviesReleaseReducer from "./features/movies/moviesRelease/moviesReleaseSlice";
import topRatedMoviesReducer from "./features/movies/topRatedMovies/topRatedMoviesSlice";
import tvShowsReleaseReducer from "./features/tvShows/tvShowsReleases/tvShowsReleaseSlice";
import topRatedShowsReducer from "./features/tvShows/topRatedShows/topRatedShowsSlice";
import movieByIdReducer from "./features/movies/movieById/movieByIdSlice";

export const store = () => {
  return configureStore({
    reducer: {
      genres: genresReducer,
      trending: trendingReducer,
      moviesRelease: moviesReleaseReducer,
      topRatedMovies: topRatedMoviesReducer,
      tvShowsReleases: tvShowsReleaseReducer,
      topRatedShows: topRatedShowsReducer,
      movieById: movieByIdReducer
    },
  });
};

// // Infer the type of makeStore
export type AppStore = ReturnType<typeof store>;
// // Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
// Redux typed hooks
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
