import React, {useEffect, useState} from 'react';

import {
  Container,
  EntryNumber,
  Name,
  PokemonTypeBadge,
  PokemonImage,
} from './styles';
import * as BadgeTypeImage from '../../../assets/PokemonType';
import PokemonService from '../../../service/PokemonService';

export type PokemonTypes = 'grass' | 'fire' | 'water' | 'flying' | 'poison';

export type PokemonCardInfo = {
  mainType: PokemonTypes;
  entryNumber: string;
  name: string;
  image: string;
  pokemonTypes: PokemonTypes[];
};

type PokemonCardProps = {
  pokemonName: string;
};
const PokemonCard: React.FC<PokemonCardProps> = ({pokemonName}) => {
  const service = {pokemon: new PokemonService()};

  const [pokemonCardInfo, setPokemonCardInfo] = useState<PokemonCardInfo>({
    entryNumber: '',
    image: '',
    mainType: 'fire',
    name: '',
    pokemonTypes: [],
  });

  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const {entryNumber, image, mainType, pokemonTypes, name} = pokemonCardInfo;

  useEffect(() => {
    service.pokemon.getPokemonDetails(pokemonName).then(resp => {
      const {id, sprites, types} = resp.data;
      setIsLoaded(true);
      setPokemonCardInfo({
        entryNumber: id,
        pokemonTypes: types.map(item => item.type.name),
        name: pokemonName,
        mainType: types[0].type.name,
        image: sprites.other['official-artwork'].front_default,
      });
    });
  }, [pokemonName, service.pokemon]);

  const renderTypeBadges = (type: PokemonTypes, key: string) => {
    return <PokemonTypeBadge key={key} source={BadgeTypeImage[type]} />;
  };

  if (isLoaded === false) {
    return null;
  }

  return (
    <Container mainType={mainType}>
      {!!image && <PokemonImage source={{uri: image}} />}
      <EntryNumber>{entryNumber}</EntryNumber>
      <Name>{name === 'charizard' ? 'Não é dragão' : name}</Name>
      {pokemonTypes.map(item => renderTypeBadges(item, `key-${item}`))}
    </Container>
  );
};

export default PokemonCard;
