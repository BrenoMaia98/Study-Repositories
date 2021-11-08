import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import {PokemonTypes} from '../../service/PokemonTypes';
import {normalize} from '../../themes/globalTheme/theme';

export const ContainerScreen = styled.SafeAreaView`
  height: ${({theme}) => theme.utils.SCREEN_HEIGHT}px;
  padding-bottom: ${({theme}) => theme.utils.SCREEN_HEIGHT * 0.05}px;
`;

export const ScrollViewScreen = styled.ScrollView`
  flex: 1;
`;

export const ImageView = styled.View`
  width: ${normalize(200)}px;
  height: ${normalize(200)}px;
  margin: auto;
`;

export const ScreenTitle = styled.Text`
  font-size: ${({theme}) => theme.font.size.titleBigger};
  font-weight: bold;
`;

//---------------------------------
// Tabs
//---------------------------------

export const TabButtonView = styled(TouchableOpacity)<{
  type: PokemonTypes;
}>`
  background-color: ${({theme, type}) => theme.type[type].darkColor};

  margin: 0px ${normalize(5)}px;
  padding: ${normalize(5)}px ${normalize(15)}px;
  border-top-left-radius: ${normalize(15)}px;
  border-top-right-radius: ${normalize(15)}px;
`;

export const TabItemText = styled.Text<{type: PokemonTypes; active: boolean}>`
  font-size: ${({theme}) => theme.font.size.small};
  ${({active, theme}) => active && `font-size:${theme.font.size.big}`};
  color: ${({theme, type}) => theme.type[type].lightColorContrast};
  font-weight: bold;

  margin: auto;
`;

//---------------------------------
// Others
//---------------------------------

export const Divider = styled.View`
  background-color: ${({theme}) => theme.color.black};
  height: 2px;
`;
