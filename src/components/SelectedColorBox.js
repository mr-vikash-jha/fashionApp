import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const SelectedBox = props => {
  return (
    <View style={{...styles.main, borderColor: props.color}}>
      <View style={{...styles.innerColor, backgroundColor: props.color}}></View>
    </View>
  );
};

export default SelectedBox;

const styles = StyleSheet.create({
  main: {
    width: 37,
    height: 37,
    borderWidth: 0.5,
    marginRight: 17.5,
    justifyContent: 'center',
    alignItem: 'center',
  },
  innerColor: {
    alignSelf: 'center',
    width: 31,
    height: 31,
  },
});
