// src/components/Board.js
import React from 'react';
import { View, StyleSheet } from 'react-native'; 
import Square from './Square';

const Board = ({ squares, onPress }) => {
  return (
    <View style={styles.board}>
      {squares.map((value, index) => (
        <Square key={index} value={value} onPress={() => onPress(index)} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  board: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    aspectRatio: 1,
  },
});

export default Board;
