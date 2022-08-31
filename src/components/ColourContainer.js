import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SelectedColorBox from './SelectedColorBox';
import constants from '../constants';
import ColorBox from './ColorBox';

const ColourContainer = () => {
  return (
    <View style={styles.main}>
      <View style={styles.mainTitle}>
        <Text style={styles.heading}>COLOUR:  </Text>
        <Text style={styles.color}>Grey</Text>
      </View>
      <View style={styles.colorDisplay}>
        <SelectedColorBox color="#2F2F2F" />
        <ColorBox color="#19191C" />
        <ColorBox color="#D0CCB3" />
        <ColorBox color="#7C88B2" />
      </View>
    </View>
  );
};

export default ColourContainer;

const styles = StyleSheet.create({
  main: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItem: 'center',
  },
  mainTitle: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 15,
  },
  heading: {
    fontSize: constants.ColorTitleFont,
    fontWeight: constants.ColorTitleWeight,
    color: '#2F2F2F',
    letterSpacing: 0.02
  },
  color: {
    fontSize: constants.ColorNameFont,
    color: '#787775',
  },
  colorDisplay: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
