import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import HorizontalProductList from './HorizontalProductList';
import constants from '../constants';

const RecentView = () => {
  return (
    <View style={styles.similarProducts}>
      <View style={styles.similarProductsView}>
        <View style={styles.similarProductsTitle}>
          <Text style={styles.similarProductsTitleText}>RECENTLY VIEW</Text>
        </View>
        <TouchableOpacity style={styles.viewAllButton}>
          <Text style={styles.viewAllButtonText}>View all</Text>
        </TouchableOpacity>
      </View>
      <View>
        <HorizontalProductList />
      </View>
    </View>
  );
};

export default RecentView;

const styles = StyleSheet.create({
  similarProducts: {
    marginTop: 40,
    paddingBottom:'25%'
  },
  similarProductsView: {
    marginBottom: 20,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  similarProductsTitle: {
    marginLeft: 15,
  },
  viewAllButton: {
    marginRight: 15,
  },
  similarProductsTitleText: {
    fontSize: 18,
    fontWeight: '500',
    color: constants.grey,
    lineHeight:23,
    letterSpacing: 0.02
  },
  viewAllButtonText: {
    fontSize: 16,
    fontWeight: '400',
    color: constants.primaryColor,
    lineHeight:23
  },
});
