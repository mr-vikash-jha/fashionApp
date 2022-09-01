import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import constants from '../constants';
import {TouchableOpacity} from 'react-native-gesture-handler';

const SizeBox = props => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        ...styles.main,
        borderColor:
          props.sizeNumber === props.selectedSizeNumber
            ? constants.primaryColor
            : '#E5E5E5',
      }}>
      <Text
        style={{
          ...styles.title,
          color:
            props.sizeNumber === props.selectedSizeNumber
              ? constants.primaryColor
              : '#E5E5E5',
        }}>
        {props.title}
      </Text>
      <Text
        style={{
          ...styles.size,
          color:
            props.sizeNumber === props.selectedSizeNumber
              ? constants.primaryColor
              : '#E5E5E5',
        }}>
        {props.size}
      </Text>
    </TouchableOpacity>
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
    borderRadius: 2.2,
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
