import { createSlice } from "@reduxjs/toolkit";

interface PokemonState {
  currentPage: number;
}

const initialState: PokemonState = { currentPage: 1 };

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    nextPage: (state) => {
      state.currentPage += 1;
    },
    prevPage: (state) => {
      state.currentPage = Math.max(1, state.currentPage - 1);
    },
  },
});

export const { nextPage, prevPage } = pokemonSlice.actions;
export default pokemonSlice.reducer;