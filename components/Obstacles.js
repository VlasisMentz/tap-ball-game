import React from 'react';
import { View } from 'react-native';

const Obstacles = ({
  color,
  obstaclesLeft,
  obstacleHeight,
  obstacleWidth,
  gap,
  randomBottom,
}) => {
  console.log(
    obstaclesLeft,
    obstacleHeight,
    obstacleWidth,
    gap,
    randomBottom,
    color
  );
  return (
    <>
      <View
        style={{
          position: 'absolute',
          backgroundColor: color,
          width: obstacleWidth,
          height: obstacleHeight,
          left: obstaclesLeft,
          bottom: randomBottom + obstacleHeight + gap,
        }}
      />
      <View
        style={{
          position: 'absolute',
          backgroundColor: color,
          width: obstacleWidth,
          height: obstacleHeight,
          left: obstaclesLeft,
          bottom: randomBottom,
        }}
      />
    </>
  );
};

export default Obstacles;
