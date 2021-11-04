import {
  NamedAPIResource,
  PokemonSprites,
  PokemonStat,
  PokemonType,
} from 'pokenode-ts';

export type PokemonTypes =
  // | 'bug'
  // | 'dark'
  // | 'dragon'
  // | 'electric'
  // | 'fairy'
  // | 'fighting'
  | 'fire'
  | 'flying'
  // | 'ghost'
  | 'grass'
  // | 'ground'
  // | 'ice'
  // | 'normal'
  | 'poison'
  // | 'psychic'
  // | 'rock'
  // | 'steel'
  | 'water';

export interface Pokemon {
  id: number;
  name: string;
  /** The height of this Pokémon in decimetres */
  height: number;
  /** The weight of this Pokémon in hectograms */
  weight: number;
  sprites: PokemonSprites;
  /** The species this Pokémon belongs to */
  species: NamedAPIResource;
  /** A list of base stat values for this Pokémon */
  stats: PokemonStat[];
  /** A list of details showing types this Pokémon has */
  types: PokemonType[];
}

//SERVICES TYPES
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
    front_default: string;
    other: {
      'official-artwork': {
        front_default: string;
      };
    };
  };
  weight: number;
  height: number;
  stats: PokemonStat[];
  species: {
    name: string;
  };
};
