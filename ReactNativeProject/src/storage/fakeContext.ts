// import {useCallback, useEffect, useMemo, useState} from 'react';
import {PokemonCardInfo} from '../components/HomeScreen/PokemonCard';

/*
 This is a fake context, to be a data provider between
 components, ContextAPI or Redux will be implemented in
 the future! :D
 */
export interface PokemonStoreData extends PokemonCardInfo {
  weight: string;
  specie: string;
  height: string;
  stats: {
    hp: number;
    attack: number;
    defense: number;
    specialAttack: number;
    specialDefense: number;
    speed: number;
  };
}

type StoreData = {pokemonData: PokemonStoreData};

let store: StoreData = {} as StoreData;

const updateStore = (newData: Partial<StoreData>) => {
  store = {...store, ...newData};
};

const updatePokemonData = (newData: Partial<PokemonStoreData>) => {
  store = {...store, pokemonData: {...newData} as PokemonStoreData};
};

const cleanStore = () => {
  store = {} as StoreData;
};

export {store, updateStore, updatePokemonData, cleanStore};
