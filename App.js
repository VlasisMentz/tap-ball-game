import react, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import { Ball } from './components/Ball';
import Obstacles from './components/Obstacles';

export default function App() {
  const screenWidth = Math.floor(Dimensions.get('screen').width);
  const screenHeight = Math.floor(Dimensions.get('screen').height);
  const ballLeft = screenWidth / 2;
  const [ballBottom, setBallBottom] = useState(screenHeight / 2);
  const [obstaclesLeft, setObstaclesLeft] = useState(screenWidth);
  const [obstaclesNegHeight, setObstaclesNegHeight] = useState(0);
  const [obstaclesNegHeightTwo, setObstaclesNegHeightTwo] = useState(0);
  const [obstaclesLeftTwo, setObstaclesLeftTwo] = useState(
    screenWidth + screenWidth / 2 + 30
  );
  const obstacleWidth = 60;
  const obstacleHeight = 400;
  const gap = 150;
  const gravity = 3;
  let gameTimerId;
  let obstaclesLeftTimerId;
  let obstaclesLeftTimerIdTwo;
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(0);

  // Ball Falling Logic
  useEffect(() => {
    if (ballBottom > 0) {
      gameTimerId = setInterval(() => {
        setBallBottom(ballBottom - gravity);
      }, 30);
      return () => clearInterval(gameTimerId);
    }
  }, [ballBottom]);

  // Jumping ball Logic

  const jump = () => {
    if (!isGameOver && ballBottom < screenHeight) {
      setBallBottom((ballBottom) => ballBottom + 30);
      console.log('jumped');
    }
  };

  // First Obstacle logic

  useEffect(() => {
    if (obstaclesLeft > -obstacleWidth) {
      obstaclesLeftTimerId = setInterval(() => {
        setObstaclesLeft((obstaclesLeft) => obstaclesLeft - 5);
      }, 30);
      return () => {
        clearInterval(obstaclesLeftTimerId);
      };
    } else {
      setObstaclesLeft(screenWidth);
      setObstaclesNegHeight(-Math.random() * 200);
      setScore(score + 10);
    }
  }, [obstaclesLeft]);

  // Second Obstacle logic

  useEffect(() => {
    if (obstaclesLeftTwo > -obstacleWidth) {
      obstaclesLeftTimerIdTwo = setInterval(() => {
        setObstaclesLeftTwo((obstaclesLeftTwo) => obstaclesLeftTwo - 5);
      }, 30);
      return () => {
        clearInterval(obstaclesLeftTimerIdTwo);
      };
    } else {
      setObstaclesLeftTwo(screenWidth);
      setObstaclesNegHeightTwo(-Math.random() * 100);
      setScore(score + 10);
    }
  }, [obstaclesLeftTwo]);

  // Collision Logic

  useEffect(() => {
    console.log(obstaclesLeft);
    console.log(screenWidth / 2);
    console.log(obstaclesLeft > screenWidth / 2);
    if (
      ((ballBottom < obstaclesNegHeight + obstacleHeight + 30 ||
        ballBottom > obstaclesNegHeight + obstacleHeight + gap - 30) &&
        obstaclesLeft > screenWidth / 2 - 30 &&
        obstaclesLeft < screenWidth / 2 + 30) ||
      ((ballBottom < obstaclesNegHeightTwo + obstacleHeight + 30 ||
        ballBottom > obstaclesNegHeightTwo + obstacleHeight + gap - 30) &&
        obstaclesLeftTwo > screenWidth / 2 - 30 &&
        obstaclesLeftTwo < screenWidth / 2 + 30)
    ) {
      console.log('game over');
      gameOver();
    }
  });

  const gameOver = () => {
    clearInterval(gameTimerId);
    clearInterval(obstaclesLeftTimerId);
    clearInterval(obstaclesLeftTimerIdTwo);
    setIsGameOver(true);
  };

  return (
    <TouchableWithoutFeedback onPress={jump}>
      <View style={styles.container}>
        {isGameOver && <Text style={{ marginTop: 50 }}>Score: {score}</Text>}
        <Ball ballBottom={ballBottom} ballLeft={ballLeft} />
        <Obstacles
          color={'green'}
          obstaclesLeft={obstaclesLeft}
          obstacleWidth={obstacleWidth}
          obstacleHeight={obstacleHeight}
          gap={gap}
          randomBottom={obstaclesNegHeight}
        />
        <Obstacles
          color={'red'}
          obstaclesLeft={obstaclesLeftTwo}
          obstacleWidth={obstacleWidth}
          obstacleHeight={obstacleHeight}
          gap={gap}
          randomBottom={obstaclesNegHeightTwo}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
