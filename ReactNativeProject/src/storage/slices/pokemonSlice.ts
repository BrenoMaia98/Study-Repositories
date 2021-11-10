import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {PokemonCardInfo} from '../../components/forScreens/HomeScreen/PokemonCard';
import {RootState} from '../store';

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

// Define a type for the slice state
type StateData = {pokemonData: PokemonStoreData};

// Define the initial state using that type
const initialState: StateData = {
  pokemonData: {
    weight: '',
    specie: '',
    height: '',
    stats: {
      hp: 0,
      attack: 0,
      defense: 0,
      specialAttack: 0,
      specialDefense: 0,
      speed: 0,
    },
    mainType: 'fire',
    entryNumber: '',
    name: '',
    image: '',
    pokemonTypes: [],
  },
};

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    updateStore: (state, newData: PayloadAction<Partial<StateData>>) => {
      state = {...state, ...newData.payload};
    },

    updatePokemonData: (
      state,
      newData: PayloadAction<Partial<PokemonStoreData>>,
    ) => {
      const pokemonData = {...(newData.payload as PokemonStoreData)};
      state.pokemonData = pokemonData;
    },

    // cleanStore: state => {
    //   state = initialState;
    // },
    // increment: state => {
    //   state.value += 1;
    // },
    // decrement: state => {
    //   state.value -= 1;
    // },
    // // Use the PayloadAction type to declare the contents of `action.payload`
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload;
    // },
  },
});

export const {updatePokemonData, updateStore} = pokemonSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectPokemonData = (state: RootState) =>
  state.pokemon.pokemonData;

export default pokemonSlice.reducer;
