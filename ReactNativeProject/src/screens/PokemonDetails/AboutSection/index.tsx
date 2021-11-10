import React from 'react';
import {useAppSelector} from '../../../hooks/reduxHooks';
import {PokemonSpeciesDetailsResponse} from '../../../service/PokemonTypes';
import {
  AboutSectionView,
  ItemView,
  ItemValue,
  ItemDescription,
  ColumView,
  Text,
} from './styles';

const AboutSection = ({
  base_happiness,
  capture_rate,
  flavor_text_entries,
  growth_rate,
}: PokemonSpeciesDetailsResponse) => {
  const {specie, height, weight} = useAppSelector(
    state => state.pokemon.pokemonData,
  );
  // const {specie, height, weight} = store.pokemonData;

  const renderStatsItem = (label?: string, value?: string | number) => (
    <ItemView>
      <ItemDescription>{label || ''}</ItemDescription>
      <ItemValue>{value || ''}</ItemValue>
    </ItemView>
  );

  const statsArray = [
    ['Espécie:', specie],
    ['Altura:', height],
    ['Peso:', weight],
    ['Nível de Felicidade:', base_happiness],
    ['Chance de captura:', capture_rate],
    ['Crescimento:', growth_rate.name],
  ];

  return (
    <AboutSectionView>
      <Text>
        {flavor_text_entries[0].flavor_text.replace(/(\r\n|\n|\r)/gm, ' ') ||
          ''}
      </Text>
      <ColumView>
        {statsArray.map(item => renderStatsItem(String(item[0]), item[1]))}
      </ColumView>
    </AboutSectionView>
  );
};
export default AboutSection;
