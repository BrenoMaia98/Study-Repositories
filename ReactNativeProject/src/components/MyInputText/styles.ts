import {TextInput} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
`;

export const CustomTextInput = styled(TextInput)`
  border: 2px solid ${({theme}) => theme.color.black};
  border-radius: 500px;
  padding: 0px 15px;
`;

export const TextLabel = styled.Text`
  font-size: ${({theme}) => theme.font.size.big};
  font-weight: bold;
  color: ${({theme}) => theme.color.black};
`;

export const TextError = styled.Text`
  font-size: ${({theme}) => theme.font.size.small};
  font-weight: bold;
  color: ${({theme}) => theme.color.red};
`;
