import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Genre } from "@streambive/app/api/models/genre.model";
import { getApiGenres } from "@streambive/app/api/services/genres.services";

export interface GenresState {
  genres: Genre[];
  loading: boolean;
  error: string | null;
}
const initialState: GenresState = {
  genres: [],
  loading: false,
  error: null,
};

export const fetchGenres = createAsyncThunk<Genre[]>(
  "fetchGenres",
  async () => {
    const response = await getApiGenres();
    return response;
  }
);

const genresSlice = createSlice({
  name: "genres",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGenres.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchGenres.fulfilled, (state, action) => {
        state.genres = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchGenres.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default genresSlice.reducer;
