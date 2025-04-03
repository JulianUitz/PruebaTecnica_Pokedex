import { useState } from "react";
import { fetchPokemons, getPokemonDetails } from "../services/pokemonService";
import { Pokemon } from "../models/Pokemon";
export const usePokemonSearch = () => {

  // State de la lista de sugerencias filtradas según el texto ingresado.
  const [suggestions, setSuggestions] = useState<Pokemon[]>([]);

  // State del pokemon seleccionado tras hacer clic en una sugerencia.
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);

  // State que indica si se está cargando la información.
  const [loading, setLoading] = useState<boolean>(false);

  // Variable que busca sugerencias de pokemon filtrando por el nombre ingresado.
  const searchSuggestions = async (query: string) => {
    if (query.length < 2) {
      setSuggestions([]);
      return;
    }

    // Se obtiene la lista completa de Pokémon.
    const allPokemon = await fetchPokemons();

    // Filtra los que incluyan el texto ingresado, limitando a 6 resultados.
    const filtered = allPokemon
      .filter((p: { name: string }) => p.name.includes(query.toLowerCase()))
      .slice(0, 6);

    // Obtiene los detalles de cada Pokémon filtrado.
    const detailedSuggestions = await Promise.all(
      filtered.map(async (p: { name: string }) => {
        const details = await getPokemonDetails(p.name);
        return details;
      })
    );

    setSuggestions(detailedSuggestions);
  };

  // Obtiene los detalles completos de un Pokémon específico.
  const fetchPokemonDetails = async (name: string) => {
    setLoading(true);
    try {
      const data = await getPokemonDetails(name);
      setSelectedPokemon(data);
    } catch (error) {
      console.error("No se encontró el Pokémon", error);
    } finally {
      setLoading(false);
    }
  };

  return { suggestions, selectedPokemon, searchSuggestions, fetchPokemonDetails, loading, setSelectedPokemon };
};
