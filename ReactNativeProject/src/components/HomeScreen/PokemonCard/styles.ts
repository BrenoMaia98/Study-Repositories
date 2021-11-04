import {Image} from 'react-native';
import styled from 'styled-components/native';
import {PokemonTypes} from '.';

export const Container = styled.View<{mainType: PokemonTypes}>`
  width: 48%;
  max-width: 180px;

  margin-top: 50px;
  margin-bottom: 15px;
  padding: 15px;
  padding-top: 0px;
  border-radius: 15px;

  align-items: center;

  border: 1px solid
    ${({theme, mainType}) => theme.type[mainType].border || theme.color.gray};
  background-color: ${({theme, mainType}) =>
    theme.type[mainType].backGroundColor};
`;

//-----------------------------------

export const ImageView = styled.View`
  margin-top: -50px;

  width: 150px;
  height: 150px;
`;

export const PokemonImage = styled(Image).attrs({objectFit: 'contain'})`
  width: 100%;
  height: 100%;
`;

//-----------------------------------

export const EntryNumber = styled.Text`
  align-self: flex-end;
`;

export const Name = styled.Text`
  font-size: ${({theme}) => theme.font.size.big};
  color: ${({theme}) => theme.color.black};
  font-weight: bold;
`;

//-----------------------------------

export const BadgesContainer = styled.View`
  flex-direction: row;
`;

export const BadgeText = styled(Name)`
  font-size: ${({theme}) => theme.font.size.normal};
`;

export const PokemonTypeBadge = styled(Image)`
  align-self: flex-end;
`;

//-----------------------------------
