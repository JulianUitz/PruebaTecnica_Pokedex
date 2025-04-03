import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "./pokemonSlice";

// Configura el store con un único reducer para manejar el estado de Pokémon.
export const store = configureStore({
  reducer: { pokemon: pokemonReducer },
});

// Tipo que representa todo el estado global de la web.
export type RootState = ReturnType<typeof store.getState>;

// Tipo para el dispatch de las acciones en la aplicación.
export type AppDispatch = typeof store.dispatch;
