import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React from 'react';
import constants from '../constants';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import SizeBox from './SizeBox';

const SizeContainer = () => {
  return (
    <View style={styles.main}>
      <View style={styles.sizeControll}>
        <Text style={styles.sizeTitle}>SIZE</Text>
        <TouchableOpacity style={styles.sizeButton}>
          <Icon name="arrow-expand" color={constants.primaryColor} size={18} />
          <Text style={styles.sizeButtonTitle}>Size Chart</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal={true} style={styles.sizeBoxContainer}>
        <SizeBox color={constants.primaryColor} title="XS" size={36} />
        <SizeBox title="S" size={38} />
        <SizeBox title="M" size={40} />
        <SizeBox title="L" size={42} />
        <SizeBox title="XL" size={44} />
        <SizeBox title="XXL" size={46} />
      </ScrollView>
    </View>
  );
};

export default SizeContainer;

const styles = StyleSheet.create({
  main: {
    marginTop: 25,
  },
  sizeControll: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  sizeButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  sizeTitle: {
    fontSize: constants.ColorTitleFont,
    fontWeight: constants.ColorTitleWeight,
    color: constants.ColorColor,
  },
  sizeButtonTitle: {
    fontSize: constants.ColorTitleFont,
    color: constants.primaryColor,
    borderBottomWidth: 1,
    borderBottomColor: constants.primaryColor,
  },
  sizeBoxContainer: {
    marginRight: -28,
  },
});
