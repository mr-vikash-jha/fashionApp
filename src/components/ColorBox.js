import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const ColorBox = props => {
  return props.selectedColor === props.color ? (
    <TouchableOpacity onPress={props.onPress} style={styles.main}>
      <View
        style={{
          ...styles.innerColor,
          backgroundColor: props.color,
        }}></View>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity
      onPress={props.onPress}
      style={{...styles.main, borderColor: '#ffffff'}}>
      <View
        style={{
          ...styles.innerColor,
          backgroundColor: props.color,
        }}></View>
    </TouchableOpacity>
  );
};

export default ColorBox;

const styles = StyleSheet.create({
  main: {
    width: 37,
    height: 37,
    borderWidth: 0.5,
    justifyContent: 'center',
    alignItem: 'center',
    marginRight: 17.5,
    borderColor: '#2F2F2F',
  },
  innerColor: {
    alignSelf: 'center',
    width: 31,
    height: 31,
  },
});
