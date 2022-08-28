import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import ListControl from './ListControl';
import RenderList from './RenderList';

const ProductList = () => {
  return (
    <View style={styles.productList}>
      <ListControl />
      <RenderList />
    </View>
  );
};

export default ProductList;
const styles = StyleSheet.create({
  productList: {
    marginTop: 40,
  },
});
