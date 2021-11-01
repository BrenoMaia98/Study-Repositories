import React from 'react';
import {ImageSourcePropType} from 'react-native';

import {
  Container,
  EntryNumber,
  Name,
  PokemonTypeBadge,
  PokemonImage,
} from './styles';
import * as BadgeTypeImage from '../../../assets/PokemonType';
export type PokemonTypes = 'grass' | 'fire' | 'water' | 'flying' | 'poison';

type PokemCardProps = {
  mainType: PokemonTypes;
  entryNumber: number;
  name: string;
  image: ImageSourcePropType;
  otherTypes: PokemonTypes[];
};

const PokemCard: React.FC<PokemCardProps> = ({
  mainType,
  entryNumber,
  name,
  image,
  otherTypes,
}) => {
  const renderTypeBadges = (type: PokemonTypes) => {
    return <PokemonTypeBadge source={BadgeTypeImage[type]} />;
  };

  return (
    <Container mainType={mainType}>
      <PokemonImage source={image} />
      <EntryNumber>{entryNumber}</EntryNumber>
      <Name>{name}</Name>
      {otherTypes.map(item => renderTypeBadges(item))}
    </Container>
  );
};

export default PokemCard;
