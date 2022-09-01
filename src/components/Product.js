import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import ProductImage from './ProductImage';
import ProductDetails from './ProductDetails';
import {useNavigation} from '@react-navigation/native';

const Product = props => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Details')}
      style={styles.product}>
      <ProductImage image={props.image} />
      <ProductDetails />
    </TouchableOpacity>
  );
};

export default Product;

const styles = StyleSheet.create({
  product: {
    marginTop: 50,
    height: 354,
    width: '49.5%',
  },
});
