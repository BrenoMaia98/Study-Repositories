import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Button} from 'react-native';
import {Container, ScreenTitle} from './styles';
const Screen2 = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <ScreenTitle>Screen2</ScreenTitle>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </Container>
  );
};

export default Screen2;
