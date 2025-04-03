import axios from 'axios';


export const fetchPokemons = async (page: number = 1) => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${(page - 1) * 6}&limit=6`);
    return response.data.results;
}

export const getPokemonDetails = async (name: string) => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    return response.data;
}

