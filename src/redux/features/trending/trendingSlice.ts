import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Movie from "@streambive/app/api/models/movie.model";
import { getApiTrending } from "@streambive/app/api/services/trending.services/trending.services";

export interface TrendingState {
  trending: Movie[];
  loading: boolean;
  error: string | null;
}

const initialState: TrendingState = {
  trending: [],
  loading: false,
  error: null,
};

export const fetchTrending = createAsyncThunk<Movie[]>(
  "fetchTrending",
  async () => {
    const response = await getApiTrending();
    return response;
  }
);

const trendingSlice = createSlice({
  name: "trending",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrending.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTrending.fulfilled, (state, action) => {
        state.trending = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchTrending.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default trendingSlice.reducer;
