import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Button} from 'react-native';
import {Container, ScreenTitle} from './styles';
const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <ScreenTitle>HomeScreen</ScreenTitle>
      <Button
        title="Navigate to next Screen"
        onPress={() => {
          console.log('hi');

          navigation.navigate('Screen2' as never); //@TO-DO  study how to aply typescript to this line
        }}
      />
    </Container>
  );
};

export default HomeScreen;
