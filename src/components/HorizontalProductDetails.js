import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import PriceDetails from './PriceDetails';

const HorizontalProductDetails = () => {
  return (
    <View style={styles.productDetails}>
      <Text style={styles.productTitle}>
        PRINTED DRESS WITH SPAGHETTI STRAP IN ....
      </Text>
      <Text style={styles.productDiscription}>CUPLET - BLACK </Text>
      <PriceDetails />
    </View>
  );
};

export default HorizontalProductDetails;
const styles = StyleSheet.create({
  productDetails: {
    marginRight: 8,
  },
  productTitle: {
    fontSize: 9,
    fontWeight: '500',
  },
  productDiscription: {
    marginVertical: 7.8,
    fontSize: 8,
    fontWeight: '400',
  },
});
