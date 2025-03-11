import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import MovieOrShow from "@streambive/app/api/models/movieOrShow.model";
import { getTopRatedMovies } from "@streambive/app/api/services/movies.service/movies.services";

export interface TopRatedMoviesState {
  topRated: MovieOrShow[];
  loading: boolean;
  error: string | null;
}

const initialState: TopRatedMoviesState = {
  topRated: [],
  loading: false,
  error: null,
};

export const fetchTopRatedMovies = createAsyncThunk<MovieOrShow[]>(
  "fetchTopRatedMovies",
  async () => {
    const response = await getTopRatedMovies();
    return response;
  }
);

const topRatedMoviesSlice = createSlice({
  name: "topRatedMovies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTopRatedMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTopRatedMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.topRated = action.payload;
      })
      .addCase(fetchTopRatedMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});


export default topRatedMoviesSlice.reducer;