import styled from 'styled-components/native';
import {normalize} from '../../../themes/globalTheme/theme';

//---------------------------------
// About Section
//---------------------------------

export const AboutSectionView = styled.View`
  background-color: ${({theme}) => theme.color.lightGray};
  padding: ${normalize(10)}px;
`;
export const ColumView = styled.View``;

export const ItemView = styled.View`
  flex-direction: row;
  align-items: center;

  min-height: ${normalize(30)}px;

  border-bottom-width: 1px;
  border-color: ${({theme}) => theme.color.black};
`;
export const ItemDescription = styled.Text`
  font-size: ${({theme}) => theme.font.size.normal};
  color: ${({theme}) => theme.color.black};

  margin-left: ${normalize(10)}px;

  width: 50%;
`;
export const ItemValue = styled.Text`
  font-size: ${({theme}) => theme.font.size.normal};
  color: ${({theme}) => theme.color.gray};
`;

export const Text = styled.Text`
  font-size: ${({theme}) => theme.font.size.normal};
  color: ${({theme}) => theme.color.black};
  font-weight: bold;
`;
