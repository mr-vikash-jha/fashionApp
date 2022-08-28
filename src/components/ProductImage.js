import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

const ProductImage = ({image}) => {
  return (
    <View style={styles.productImage}>
      <Image style={styles.Image} source={image} />
    </View>
  );
};

export default ProductImage;

const styles = StyleSheet.create({
  productImage: {
    height: 265,
    marginBottom: 14.28,
  },
  Image: {
    width: '100%',
    height: '100%',
  },
});
