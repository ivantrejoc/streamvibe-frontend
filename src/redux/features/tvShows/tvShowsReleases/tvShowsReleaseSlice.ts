import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import MovieOrShow from "@streambive/app/api/models/movieOrShow.model";
import { getShowsNewReleases } from "@streambive/app/api/services/tvShows.services/tvShows.services";

export interface TvShowsReleaseState {
  releases: MovieOrShow[];
  loading: boolean;
  error: string | null;
}

const initialState: TvShowsReleaseState = {
  releases: [],
  loading: false,
  error: null,
};

export const fetchTvShowsReleases = createAsyncThunk<MovieOrShow[]>(
  "fetchTvShowsReleases",
  async () => {
    const response = await getShowsNewReleases();
    return response;
  }
);

const tvShowsReleasesSlice = createSlice({
  name: "tvShowsReleases",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTvShowsReleases.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTvShowsReleases.fulfilled, (state, action) => {
        state.loading = false;
        state.releases = action.payload;
      })
      .addCase(fetchTvShowsReleases.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default tvShowsReleasesSlice.reducer;
