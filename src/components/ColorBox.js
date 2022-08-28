import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ColorBox = props => {
  return <View style={{...styles.main, backgroundColor: props.color}}></View>;
};

export default ColorBox;

const styles = StyleSheet.create({
  main: {
    width: 31,
    height: 31,
    marginRight: 17.5,
  },
});
