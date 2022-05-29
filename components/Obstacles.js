import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

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

  //   Linear Gradient Styles
  var styles = StyleSheet.create({
    linearGradient: {
      flex: 1,
      paddingLeft: 15,
      paddingRight: 15,
      borderRadius: 5,
    },
  });
  //   background-image: linear-gradient(to bottom, #be6d04, #dc3527, #e8005a, #ce009f, #5d12eb);
  return (
    <>
      <View
        style={{
          position: 'absolute',
          //   backgroundColor: color,
          width: obstacleWidth,
          height: obstacleHeight,
          left: obstaclesLeft,
          bottom: randomBottom + obstacleHeight + gap,
        }}
      >
        <LinearGradient
          colors={['#be6d04', '#dc3527', '#e8005a', '#ce009f', '#5d12eb']}
          style={styles.linearGradient}
        ></LinearGradient>
      </View>
      <View
        style={{
          position: 'absolute',
          //   backgroundColor: color,
          width: obstacleWidth,
          height: obstacleHeight,
          left: obstaclesLeft,
          bottom: randomBottom,
        }}
      >
        <LinearGradient
          colors={['#5d12eb', '#ce009f', '#e8005a', '#dc3527', '#be6d04']}
          style={styles.linearGradient}
        ></LinearGradient>
      </View>
    </>
  );
};

export default Obstacles;
