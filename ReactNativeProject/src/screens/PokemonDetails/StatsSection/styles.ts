import styled from 'styled-components/native';
import {normalize} from '../../../themes/globalTheme/theme';

export const Container = styled.View`
  width: 100%;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: ${normalize(6)}px 0;
  border-bottom-width: 1px;
  border-bottom-color: ${({theme}) => theme.color.black};
`;

export const StatsText = styled.Text`
  font-size: ${({theme}) => theme.font.size.small};
  color: ${({theme}) => theme.color.gray};
  margin: 0px ${normalize(10)}px;
  text-align: center;
`;

export const BoldText = styled(StatsText)`
  font-weight: bold;
  text-align: right;
  width: 30%;
`;

interface BarStatusProps {
  percentage: number;
  color: string;
}

export const BarStatus = styled.View<BarStatusProps>`
  flex: 1;
  width: 100%;
`;

export const StatusProgressBar = styled.View<BarStatusProps>`
  width: ${({percentage}) => percentage}%;
  height: 50px;
  background-color: ${({theme, percentage}) => {
    if (percentage < 25) {
      return theme.color.red;
    }
    if (percentage < 60) {
      return theme.color.blue;
    }
    return theme.color.green;
  }};
`;
