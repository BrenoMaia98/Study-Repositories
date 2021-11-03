import {useNavigation} from '@react-navigation/core';
import React, {useCallback, useEffect} from 'react';
import {Button} from 'react-native';
import MyInputText from '../../components/MyInputText';
import {Container} from './styles';
import PokemonCard from '../../components/HomeScreen/PokemonCard';
import PokemonService, {PokemonListIndexes} from '../../service/PokemonService';
const HomeScreen = () => {
  const navigation = useNavigation();
  const service = {pokemon: new PokemonService()};

  const [pokemonList, setPokemonList] = React.useState<PokemonListIndexes>([]);

  //Carregar a lista inicial de pokemons
  const handlePokemonListDefault = useCallback(async () => {
    const response = await service.pokemon.getPokemonList(9);

    setPokemonList(response.data.results);
  }, [service.pokemon]);

  useEffect(() => {
    handlePokemonListDefault();
  }, [handlePokemonListDefault]);

  return (
    <Container>
      <MyInputText label="Nome do Pokemon" placeholder="Digite aqui..." />
      <Button
        title="Navigate to next Screen"
        onPress={() => {
          console.log('hi');
          navigation.navigate('Screen2' as never); //@TO-DO  study how to aply typescript to this line
        }}
      />
      {/* <PokemonCard
        entryNumber={1}
        image={Sprites.img7}
        mainType="fire"
        name="charizard"
        otherTypes={['flying']}
      /> */}
      {pokemonList.map((pokemonItem, index) => (
        <PokemonCard key={index} pokemonName={pokemonItem.name} />
      ))}
    </Container>
  );
};

export default HomeScreen;
