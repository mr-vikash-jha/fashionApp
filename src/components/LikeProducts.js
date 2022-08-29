import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import HorizontalProductList from './HorizontalProductList';
import constants from '../constants';

const LikeProducts = () => {
  return (
    <View style={styles.similarProducts}>
      <View style={styles.similarProductsView}>
        <View style={styles.similarProductsTitle}>
          <Text style={styles.similarProductsTitleText}>YOU MAY ALSO LIKE</Text>
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

export default LikeProducts;

const styles = StyleSheet.create({
  similarProducts: {
    marginTop: 40,
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
    color: '#2F2F2F',
    lineHeight:23
  },
  viewAllButtonText: {
    fontSize: 16,
    fontWeight: '400',
    color: constants.primaryColor,
    lineHeight:23
  },
});
