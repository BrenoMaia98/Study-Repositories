import React from 'react';

import {
  Container,
  Row,
  BarStatus,
  BoldText,
  StatsText,
  StatusProgressBar,
} from './styles';

export interface PokemonProps {
  stats: {
    hp: number;
    attack: number;
    defense: number;
    specialAttack: number;
    specialDefense: number;
    speed: number;
  };
  color: string;
}

const StatsSection: React.FC<PokemonProps> = ({stats, color}) => {
  const statsContent: {title: string; field: keyof typeof stats}[] = [
    {title: 'HP', field: 'hp'},
    {title: 'Attack', field: 'attack'},
    {title: 'Defense', field: 'defense'},
    {title: 'Special Attack', field: 'specialAttack'},
    {title: 'Special Defense', field: 'specialDefense'},
    {title: 'Speed', field: 'speed'},
  ];

  return (
    <Container>
      {statsContent &&
        statsContent.map((stat, index) => (
          <Row key={`${index}-${stat.field}`}>
            <BoldText>{stat.title}</BoldText>
            <StatsText>{stats[stat.field] || 1}</StatsText>
            <BarStatus
              percentage={stats[stat.field] < 100 ? stats[stat.field] : 100}
              color={color}>
              <StatusProgressBar
                percentage={stats[stat.field] < 100 ? stats[stat.field] : 100}
                color={color}
              />
            </BarStatus>
            <StatsText>100</StatsText>
          </Row>
        ))}
    </Container>
  );
};

export default StatsSection;
