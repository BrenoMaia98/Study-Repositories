import {useNavigation} from '@react-navigation/core';
import React, {useEffect, useState} from 'react';
import {Button, FlatList} from 'react-native';
import {PokemonImage} from '../../components/forScreens/HomeScreen/PokemonCard/styles';
import PokemonService from '../../service/PokemonService';
import {PokemonSpeciesDetailsResponse} from '../../service/PokemonTypes';
import {store} from '../../storage/fakeContext';
import AboutSection from './AboutSection';
import EvolutionSection from './EvolutionSection';
import StatsSection from './StatsSection';
import {
  ContainerScreen,
  ScrollViewScreen,
  ScreenTitle,
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

  useEffect(() => {
    service.pokemon
      .getPokemonSpeciesDetails(store.pokemonData.specie)
      .then(resp => {
        setSpeciesDetails({
          ...resp.data,
          flavor_text_entries: resp.data.flavor_text_entries.filter(item => {
            return item.language.name === 'en';
          }),
        });
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ContainerScreen>
      <ScrollViewScreen>
        <Button title="Go Back" onPress={() => navigation.goBack()} />
        <ImageView>
          <PokemonImage source={{uri: store.pokemonData.image}} />
        </ImageView>
        <FlatList
          data={statusTabs}
          keyExtractor={item => item}
          renderItem={({item}) => (
            <TabButtonView
              onPress={() => {
                setSelectedTab(item);
              }}
              type={store.pokemonData.mainType}>
              <TabItemText
                active={selectedTab === item}
                type={store.pokemonData.mainType}>
                {item}
              </TabItemText>
            </TabButtonView>
          )}
          horizontal
        />
        {selectedTab === 'Sobre' && <AboutSection {...speciesDetails} />}
        {selectedTab === 'Status' && (
          <StatsSection stats={store.pokemonData.stats} color="black" />
        )}
        {selectedTab === 'Evolução' && <EvolutionSection />}

        <Divider />
      </ScrollViewScreen>
    </ContainerScreen>
  );
};

export default PokemonDetails;
