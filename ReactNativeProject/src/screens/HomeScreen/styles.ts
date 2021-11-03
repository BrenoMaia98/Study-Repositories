import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;

  padding: 10px;
`;

export const ScreenTitle = styled.Text`
  font-size: ${({theme}) => theme.font.size.titleBigger};
  font-weight: bold;
  color: ${({theme}) => theme.color.black};
`;

export const InputContainer = styled.View`
  width: 80%;
  margin: 20px 0px;
`;
