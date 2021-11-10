import {useNavigation} from '@react-navigation/core';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Button, FlatList} from 'react-native';
import {PokemonImage} from '../../components/forScreens/HomeScreen/PokemonCard/styles';
import {useAppSelector} from '../../hooks/reduxHooks';
import PokemonService from '../../service/PokemonService';
import {PokemonSpeciesDetailsResponse} from '../../service/PokemonTypes';
import AboutSection from './AboutSection';
import EvolutionSection from './EvolutionSection';
import StatsSection from './StatsSection';
import {
  ContainerScreen,
  ScrollViewScreen,
  Divider,
  TabItemText,
  TabButtonView,
  ImageView,
} from './styles';
type TabType = 'Sobre' | 'Status' | 'Evolução';

const PokemonDetails = () => {
  const navigation = useNavigation();
  // const detailsTabs:Array<{title:string}> = {}
  const service = {pokemon: new PokemonService()};
  const statusTabs: TabType[] = ['Sobre', 'Status', 'Evolução'];
  const [selectedTab, setSelectedTab] = useState<TabType>('Sobre');
  const [speciesDetails, setSpeciesDetails] =
    useState<PokemonSpeciesDetailsResponse>({
      base_happiness: 0,
      capture_rate: 0,
      flavor_text_entries: [{flavor_text: '', language: {name: ''}}],
      growth_rate: {name: ''},
    });
  const [isLoading, setLoading] = useState<boolean>(true);

  const pokemonData = useAppSelector(redux => redux.pokemon.pokemonData);

  useEffect(() => {
    if (pokemonData && pokemonData.specie) {
      service.pokemon
        .getPokemonSpeciesDetails(pokemonData.specie)
        .then(resp => {
          setSpeciesDetails({
            ...resp.data,
            flavor_text_entries: resp.data.flavor_text_entries.filter(item => {
              return item.language.name === 'en';
            }),
          });
          setLoading(false);
        });
    } else {
      setLoading(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ContainerScreen>
      <ScrollViewScreen>
        <Button title="Go Back" onPress={() => navigation.goBack()} />

        {isLoading ? (
          <ActivityIndicator size="large" />
        ) : (
          <>
            <ImageView>
              <PokemonImage source={{uri: pokemonData.image}} />
            </ImageView>
            <FlatList
              data={statusTabs}
              keyExtractor={item => item}
              renderItem={({item}) => (
                <TabButtonView
                  onPress={() => {
                    setSelectedTab(item);
                  }}
                  type={pokemonData.mainType}>
                  <TabItemText
                    active={selectedTab === item}
                    type={pokemonData.mainType}>
                    {item}
                  </TabItemText>
                </TabButtonView>
              )}
              horizontal
            />
            {selectedTab === 'Sobre' && <AboutSection {...speciesDetails} />}
            {selectedTab === 'Status' && (
              <StatsSection stats={pokemonData.stats} color="black" />
            )}
            {selectedTab === 'Evolução' && <EvolutionSection />}

            <Divider />
          </>
        )}
      </ScrollViewScreen>
    </ContainerScreen>
  );
};

export default PokemonDetails;
