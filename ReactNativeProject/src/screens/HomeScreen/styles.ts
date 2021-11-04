import styled from 'styled-components/native';

export const ContainerScreen = styled.View`
  height: ${({theme}) => theme.utils.SCREEN_HEIGHT}px;
`;

export const ScrollViewScreen = styled.ScrollView`
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

export const CardsView = styled.View`
  /* flex: 1; */
  flex-direction: row;
  flex-wrap: wrap;

  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;
