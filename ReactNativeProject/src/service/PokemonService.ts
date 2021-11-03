import {PokemonTypes} from '../components/HomeScreen/PokemonCard';
import api from './api';

export type PokemonListIndexes = Array<{
  id: string;
  name: string;
}>;

export type PokemonDetailsResponse = {
  id: string;
  types: Array<{
    type: {
      name: PokemonTypes;
    };
  }>;
  sprites: {
    other: {
      'official-artwork': {
        front_default: string;
      };
    };
  };
};

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
