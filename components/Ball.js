import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

export const Ball = ({ ballBottom, ballLeft }) => {
  const ballWidth = 50;
  const ballHeight = 50;

  return (
    <View
      style={{
        position: 'absolute',
        backgroundColor: 'purple',
        borderRadius: 50,
        width: ballWidth,
        height: 50,
        left: ballLeft - ballWidth / 2,
        bottom: ballBottom - ballHeight / 2,
      }}
    />
  );
};
