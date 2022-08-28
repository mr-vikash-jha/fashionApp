import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import constants from '../constants/index';

const CollectionBanner = () => {
  return (
    <View style={styles.banner}>
      <Text style={styles.bannerText}>collection banner</Text>
    </View>
  );
};

export default CollectionBanner;

const styles = StyleSheet.create({
  banner: {
    backgroundColor: '#D9D9D9',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 459,
  },
  bannerText: {
    fontSize: 32,
    fontWeight: '400',
    color: '#000',
    fontFamily: constants.primaryFont,
  },
});
