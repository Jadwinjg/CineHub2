import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: {
    recommended: [],
    newDisney: [],
    original: [],
    trending: [],
  },
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload;
    },
  },
});


export const getRecommended = (state) => state.movies.movies.recommended;
export const getTrending = (state) => state.movies.movies.trending;
export const getNew = (state) => state.movies.movies.newDisney;
export const getOriginal = (state) => state.movies.movies.original;


export const { setMovies } = movieSlice.actions;

export default movieSlice.reducer;
