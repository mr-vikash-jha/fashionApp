import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

const HorizontalProductImage = ({image}) => {
  return (
    <View style={styles.productImage}>
      <Image style={styles.Image} source={image} />
    </View>
  );
};

export default HorizontalProductImage;

const styles = StyleSheet.create({
  productImage: {
    height: 178,
    marginBottom: 14,
  },
  Image: {
    width: '100%',
    height: '100%',
  },
});
