import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import HorizontalProductImage from './HorizontalProductImage';
import HorizontalProductDetails from './HorizontalProductDetails';

const HorizontalProduct = ({image}) => {
  return (
    <View style={styles.product}>
      <HorizontalProductImage image={image} />
      <HorizontalProductDetails />
    </View>
  );
};

export default HorizontalProduct;

const styles = StyleSheet.create({
  product: {
    height: 273,
    width: 144,
    marginLeft: 14,
  },
});
