import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Button, Text} from 'react-native';
import {store} from '../../storage/fakeContext';
import {Container, ScreenTitle} from './styles';
const PokemonDetails = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <ScreenTitle>PokemonDetails</ScreenTitle>
      <Text>{JSON.stringify(store, null, 2)}</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </Container>
  );
};

export default PokemonDetails;
