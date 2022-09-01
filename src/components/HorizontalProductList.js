import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import Product from './Product';
import HorizontalProduct from './HorizontalProduct';

const HorizontalProductList = props => {
  return (
    <ScrollView
      style={styles.horizontalProductList}
      horizontal={true}
      showsHorizontalScrollIndicator={false}>
      <HorizontalProduct image={props.img1} />
      <HorizontalProduct image={props.img2} />
      <HorizontalProduct image={props.img3} />
      <HorizontalProduct image={props.img4} />
      <HorizontalProduct image={props.img5} />
    </ScrollView>
  );
};

export default HorizontalProductList;

const styles = StyleSheet.create({
  horizontalProductList: {},
});
