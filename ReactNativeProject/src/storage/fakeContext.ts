import {useCallback, useEffect, useState} from 'react';
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

const useStorage = () => {
  const [store, setStore] = useState<StoreData>({} as StoreData);

  useEffect(() => {
    console.log('STORE UPDATED', store);
  }, [store]);

  const updateStore = useCallback(
    (newData: Partial<StoreData>) => {
      setStore({...store, ...newData});
    },
    [store],
  );

  const updatePokemonData = useCallback(
    (newData: Partial<PokemonStoreData>) => {
      setStore({...store, pokemonData: {...newData} as PokemonStoreData});
    },
    [store],
  );

  const cleanStore = useCallback(() => {
    setStore({} as StoreData);
  }, []);

  return {store, updateStore, updatePokemonData, cleanStore};
};

export default useStorage;
