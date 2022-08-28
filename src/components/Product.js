import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import ProductImage from './ProductImage';
import ProductDetails from './ProductDetails';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import constants from '../constants';

const Product = props => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Details')}
      style={styles.product}>
      <ProductImage image={props.image} />
      <ProductDetails />
      <View style={styles.bookmark}>
        <Icon name="bookmark-outline" size={15} color="#C78B9E" />
      </View>
    </TouchableOpacity>
  );
};

export default Product;

const styles = StyleSheet.create({
  product: {
    marginTop: 50,
    height: 354,
    width: '49.3%',
    marginRight: '0.7%',
    position: 'relative',
  },
  bookmark: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 27,
    width: 27,
    backgroundColor: constants.bannerColor,
    borderRadius: 25,
    position: 'absolute',
    top: '91%',
    left: '82%',
  },
});
