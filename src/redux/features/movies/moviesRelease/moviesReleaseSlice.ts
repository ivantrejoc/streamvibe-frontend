import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getMoviesNewReleases } from "@streambive/app/api/services/movies.service/movies.services";
import MovieOrShow from "@streambive/app/api/models/movieOrShow.model";

export interface MoviesReleaseState {
  releases: MovieOrShow[];
  loading: boolean;
  error: string | null;
}

const initialState: MoviesReleaseState = {
  releases: [],
  loading: false,
  error: null,
};

export const fetchMoviesReleases = createAsyncThunk<MovieOrShow[]>(
  "fetchMoviesReleases",
  async () => {
    const response = await getMoviesNewReleases();
    return response;
  }
);

const moviesReleasesSlice = createSlice({
  name: "moviesReleases",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMoviesReleases.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMoviesReleases.fulfilled, (state, action) => {
        state.loading = false;
        state.releases = action.payload;
      })
      .addCase(fetchMoviesReleases.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default moviesReleasesSlice.reducer;
