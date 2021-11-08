import React, {useCallback, useEffect, useState} from 'react';

import {
  Container,
  EntryNumber,
  Name,
  PokemonTypeBadge,
  PokemonImage,
  ImageView,
  BadgesContainer,
  BadgeText,
} from './styles';
import * as BadgeTypeImage from '../../../../assets/PokemonType';
import PokemonService from '../../../../service/PokemonService';
import {ActivityIndicator, TouchableOpacity} from 'react-native';
import {useTheme} from 'styled-components';
import {useNavigation} from '@react-navigation/native';
import {PokemonTypes} from '../../../../service/PokemonTypes';
import {
  PokemonStoreData,
  updatePokemonData,
} from '../../../../storage/fakeContext';

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
  const navigation = useNavigation();

  const [pokemonCardInfo, setPokemonCardInfo] = useState<PokemonCardInfo>({
    entryNumber: '',
    image: '',
    mainType: 'fire',
    name: '',
    pokemonTypes: [],
  });
  const [otherPokemonDetails, setOtherPokemonDetails] = useState<
    Partial<PokemonStoreData>
  >({} as PokemonStoreData);

  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const {entryNumber, image, mainType, pokemonTypes, name} = pokemonCardInfo;
  const theme = useTheme();

  useEffect(() => {
    service.pokemon.getPokemonDetails(pokemonName).then(resp => {
      const {id, weight, height, stats, sprites, types, species} = resp.data;
      const newPokemonTypes = types.map(item => item.type.name);

      setIsLoaded(true);
      const newPokemonCardInfo = {
        entryNumber: `#${'000'.substr(id.toString().length)}${id}`,
        pokemonTypes: newPokemonTypes,
        name: pokemonName,
        mainType: types[0].type.name,
        image:
          sprites.other['official-artwork'].front_default ||
          sprites.front_default,
      };
      setPokemonCardInfo(newPokemonCardInfo);

      const newStoreData = {
        ...newPokemonCardInfo,
        weight: `${weight / 10} kg`,
        specie: species.name,
        height: `${height / 10} m`,
        stats: {
          hp: stats[0].base_stat || 0,
          attack: stats[1].base_stat || 0,
          defense: stats[2].base_stat || 0,
          specialAttack: stats[3].base_stat || 0,
          specialDefense: stats[4].base_stat || 0,
          speed: stats[5].base_stat || 0,
        },
      };
      setOtherPokemonDetails(newStoreData);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onPressCard = () => {
    updatePokemonData({...pokemonCardInfo, ...otherPokemonDetails});

    navigation.navigate('PokemonDetails' as never); //@TO-FIX navigation typescript
  };

  //Render Functions
  const renderTypeBadges = (type: PokemonTypes, key: string) => {
    return <PokemonTypeBadge key={key} source={BadgeTypeImage[type]} />;
  };

  return (
    <Container mainType={mainType}>
      {isLoaded === false ? (
        <ActivityIndicator size="large" color={theme.color.blue} />
      ) : (
        <TouchableOpacity onPress={onPressCard}>
          <ImageView>
            {!!image && <PokemonImage source={{uri: image}} />}
          </ImageView>
          <EntryNumber>{entryNumber}</EntryNumber>
          <Name>{name === 'charizard' ? 'Não é dragão' : name}</Name>
          <BadgesContainer>
            <BadgeText>Tipo:</BadgeText>
            {pokemonTypes.map(item => renderTypeBadges(item, `key-${item}`))}
          </BadgesContainer>
        </TouchableOpacity>
      )}
    </Container>
  );
};

export default PokemonCard;
