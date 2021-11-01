import styled from 'styled-components/native';

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const ScreenTitle = styled.Text`
  font-size: ${({theme}) => theme.font.size.titleBigger};
  color: ${({theme}) => theme.color.blue};
  font-weight: bold;
`;
