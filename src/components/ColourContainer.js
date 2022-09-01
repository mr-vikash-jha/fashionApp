import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import SelectedColorBox from './SelectedColorBox';
import constants from '../constants';
import ColorBox from './ColorBox';

const ColourContainer = () => {
  const [selectedColor, setSelectedColor] = useState('#787775');
  let colorName;
  if (selectedColor === '#787775') {
    colorName = 'Grey';
  } else if (selectedColor === '#19191C') {
    colorName = 'Black';
  } else if (selectedColor === '#D0CCB3') {
    colorName = 'DarkKhadi';
  } else if (selectedColor === '#7C88B2') {
    colorName = 'SlateGray';
  }
  return (
    <View style={styles.main}>
      <View style={styles.mainTitle}>
        <Text style={styles.heading}>COLOUR: </Text>
        <Text style={styles.color}>{colorName}</Text>
      </View>
      <View style={styles.colorDisplay}>
        <ColorBox
          color="#787775"
          selectedColor={selectedColor}
          onPress={() => setSelectedColor('#787775')}
        />
        <ColorBox
          color="#19191C"
          selectedColor={selectedColor}
          onPress={() => setSelectedColor('#19191C')}
        />
        <ColorBox
          color="#D0CCB3"
          selectedColor={selectedColor}
          onPress={() => setSelectedColor('#D0CCB3')}
        />
        <ColorBox
          color="#7C88B2"
          selectedColor={selectedColor}
          onPress={() => setSelectedColor('#7C88B2')}
        />
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
    letterSpacing: 0.02,
    fontFamily: constants.primaryFont,
  },
  color: {
    fontSize: constants.ColorNameFont,
    color: '#787775',
    fontFamily: constants.primaryFont,
  },
  colorDisplay: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
