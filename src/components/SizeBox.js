import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import constants from '../constants';

const SizeBox = props => {
  return (
    <View style={{...styles.main, borderColor: props.color}}>
      <Text style={{...styles.title, color: props.color}}>{props.title}</Text>
      <Text style={{...styles.size, color: props.color}}>{props.size}</Text>
    </View>
  );
};

export default SizeBox;

const styles = StyleSheet.create({
  main: {
    marginTop: 15,
    marginRight: 10,
    width: 60,
    height: 60,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#E5E5E5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: constants.ColorTitleFont,
    fontWeight: '600',
    color: '#2F2F2F',
  },
  size: {
    fontSize: 10,
    color: '#E5E5E5',
  },
});
