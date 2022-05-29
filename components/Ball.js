import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export const Ball = ({ ballBottom, ballLeft }) => {
  const ballWidth = 50;
  const ballHeight = 50;
  const ufoImage = require('.././assets/ufo.png');

  return (
    <View
      style={{
        position: 'absolute',
        // backgroundColor: 'purple',
        borderRadius: 50,
        width: ballWidth,
        height: 50,
        left: ballLeft - ballWidth / 2,
        bottom: ballBottom - ballHeight / 2,
      }}
    >
      <Image source={ufoImage} style={{ width: '150%', height: '150%' }} />
    </View>
  );
};
