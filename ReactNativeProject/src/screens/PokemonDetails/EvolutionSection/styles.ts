import styled from 'styled-components/native';
import {normalize} from '../../../themes/globalTheme/theme';

export const Text = styled.Text`
  font-size: ${({theme}) => theme.font.size.normal};
  color: ${({theme}) => theme.color.black};
  font-weight: bold;
  text-align: center;
  padding: ${normalize(50)}px;
`;
