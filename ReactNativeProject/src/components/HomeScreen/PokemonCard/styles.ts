import {Image} from 'react-native';
import styled from 'styled-components/native';
import {PokemonTypes} from '.';

export const Container = styled.View<{mainType: PokemonTypes}>`
  width: 50%;
  
  margin-top: 50px;
  margin-bottom: 15px;
  padding: 15px;
  padding-top: 0px;
  border-radius: 15px;

  align-items: center;
  
  border: 1px solid ${({theme, mainType}) => theme.type[mainType].border}
  background-color: ${({theme, mainType}) => {
    return theme.type[mainType].backGroundColor;
  }};
`;

export const PokemonImage = styled(Image)`
  margin-top: -50px;
`;
export const PokemonTypeBadge = styled(Image)`
  align-self: flex-end;
`;

export const EntryNumber = styled.Text`
  align-self: flex-end;
`;
export const Name = styled.Text`
  font-size: ${({theme}) => theme.font.size.big};
  color: ${({theme}) => theme.color.black};
  font-weight: bold;
`;
