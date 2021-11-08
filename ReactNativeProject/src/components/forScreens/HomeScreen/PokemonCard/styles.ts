import {Image} from 'react-native';
import styled from 'styled-components/native';
import {PokemonTypes} from '../../../../service/PokemonTypes';

export const Container = styled.View<{mainType: PokemonTypes}>`
  width: 48%;

  max-width: ${({theme}) => theme.utils.normalize(150)}px;

  margin-top: ${({theme}) => theme.utils.normalize(50)}px;

  margin-bottom: ${({theme}) => theme.utils.normalize(15)}px;
  padding: ${({theme}) => theme.utils.normalize(15)}px;
  padding-top: 0px;
  border-radius: ${({theme}) => theme.utils.normalize(15)}px;

  align-items: center;

  border: 1px solid
    ${({theme, mainType}) => theme.type[mainType].darkColor || theme.color.gray};
  background-color: ${({theme, mainType}) => theme.type[mainType].paleColor};
`;

//-----------------------------------

export const ImageView = styled.View`
  margin-top: ${({theme}) => theme.utils.normalize(-50)}px;

  width: 150px;
  height: 150px;
  width: ${({theme}) => theme.utils.normalize(120)}px;
  height: ${({theme}) => theme.utils.normalize(120)}px;
`;

export const PokemonImage = styled(Image).attrs({objectFit: 'contain'})`
  width: 100%;
  height: 100%;
`;

//-----------------------------------

export const EntryNumber = styled.Text`
  font-size: ${({theme}) => theme.font.size.normal};
  align-self: flex-end;
`;

export const Name = styled.Text`
  font-size: ${({theme}) => theme.font.size.big};
  color: ${({theme}) => theme.color.black};
  font-weight: bold;
  text-align: center;
`;

//-----------------------------------

export const BadgesContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const BadgeText = styled(Name)`
  font-size: ${({theme}) => theme.font.size.normal};
`;

export const PokemonTypeBadge = styled(Image)`
  width: ${({theme}) => theme.font.size.big};
  height: ${({theme}) => theme.font.size.big};
`;

//-----------------------------------
