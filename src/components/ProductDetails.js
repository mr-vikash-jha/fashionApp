import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import PriceDetails from './PriceDetails';
import constants from '../constants';

const ProductDetails = () => {
  return (
    <View style={styles.productDetails}>
      <Text style={styles.productTitle}>
        PRINTED DRESS WITH SPAGHETTI STRAP IN STRETCH
      </Text>
      <Text style={styles.productDiscription}>CUPLET - BLACK </Text>
      <PriceDetails />
    </View>
  );
};

export default ProductDetails;
const styles = StyleSheet.create({
  productDetails: {
    marginHorizontal: 15,
  },
  productTitle: {
    color: 'black',
    fontSize: 9,
    fontWeight: '500',
    fontFamily: 'Josefin Sans',
    lineHeight: 14,
    letterSpacing: 0.12,
    fontFamily: constants.primaryFont,
  },
  productDiscription: {
    marginVertical: 7.8,
    fontSize: 8,
    fontWeight: '400',
    lineHeight: 12,
    color: '#787775',
    fontFamily: 'Josefin Sans',
  },
});
