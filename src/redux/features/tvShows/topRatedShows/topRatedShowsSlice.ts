import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import MovieOrShow from "@streambive/app/api/models/movieOrShow.model";
import { getTopRatedShows } from "@streambive/app/api/services/tvShows.services/tvShows.services";

export interface TopRatedShowsState {
  topRated: MovieOrShow[];
  loading: boolean;
  error: string | null;
}

const initialState: TopRatedShowsState = {
  topRated: [],
  loading: false,
  error: null,
};

export const fetchTopRatedShows = createAsyncThunk<MovieOrShow[]>(
  "fetchTopRatedShows",
  async () => {
    const response = await getTopRatedShows();
    return response;
  }
);

const topRatedShowsSlice = createSlice({
  name: "topRatedShows",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTopRatedShows.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTopRatedShows.fulfilled, (state, action) => {
        state.loading = false;
        state.topRated = action.payload;
      })
      .addCase(fetchTopRatedShows.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default topRatedShowsSlice.reducer;
