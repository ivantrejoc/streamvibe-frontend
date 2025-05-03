import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getMovieById } from "@streambive/app/api/services/movies.service/movies.services";
import { MovieDetail } from "@streambive/app/api/models/movieDetail.model";

export interface MovieDetailsState {
  movieDetails: MovieDetail;
  loading: boolean;
  error: string | null;
}

const initialState: MovieDetailsState = {
  movieDetails: {} as MovieDetail,
  loading: false,
  error: null,
};

export const fetchMovieById = createAsyncThunk<MovieDetail, string>(
  "fetchMovieById",
  async (id: string) => {
    const response = await getMovieById(id);
    return response;
  }
);

const movieByIdSlice = createSlice({
  name: "movieById",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovieById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMovieById.fulfilled, (state, action) => {
        state.loading = false;
        state.movieDetails = action.payload;       
      })
      .addCase(fetchMovieById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default movieByIdSlice.reducer;
