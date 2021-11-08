import api from './api';
import {
  PokemonDetailsResponse,
  PokemonListIndexes,
  PokemonSpeciesDetailsResponse,
} from './PokemonTypes';

export default class PokemonService {
  getPokemonList(maxNumber: number) {
    return api.get<{
      results: PokemonListIndexes;
    }>(`/pokemon?limit=${maxNumber}`);
  }

  getPokemonDetails(name: string) {
    return api.get<PokemonDetailsResponse>(`/pokemon/${name}`);
  }

  getPokemonSpeciesDetails(name: string) {
    return api.get<PokemonSpeciesDetailsResponse>(`pokemon-species/${name}`);
  }
}
