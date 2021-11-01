import {useNavigation} from '@react-navigation/core';
import React, {useState} from 'react';
import {Button, Image} from 'react-native';
import MyInputText from '../../components/MyInputText';
import {Container, InputContainer} from './styles';
import HomeHeader from '../../assets/HomeScreen/HomeHeader.png';
import PokemonCard from '../../components/HomeScreen/PokemonCard';
import * as Sprites from '../../assets/sprites';
const HomeScreen = () => {
  const navigation = useNavigation();
  const [text, setText] = useState('');

  return (
    <Container>
      <Image source={HomeHeader} />
      <InputContainer>
        <MyInputText
          label="Nome do Pokemon"
          placeholder="Digite aqui..."
          value={text}
          onChangeText={newText => {
            setText(newText);
          }}
        />
      </InputContainer>
      <PokemonCard
        mainType="grass"
        entryNumber={1}
        name="Bulbassauro"
        image={Sprites.img1}
        otherTypes={['poison']}
      />
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
