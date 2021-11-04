import api from './api';
import {PokemonDetailsResponse, PokemonListIndexes} from './PokemonTypes';

export default class PokemonService {
  getPokemonList(maxNumber: number) {
    return api.get<{
      results: PokemonListIndexes;
    }>(`/pokemon?limit=${maxNumber}`);
  }

  getPokemonDetails(name: string) {
    return api.get<PokemonDetailsResponse>(`/pokemon/${name}`);
  }
}
