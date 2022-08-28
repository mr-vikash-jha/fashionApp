import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import Product from './Product';
import HorizontalProduct from './HorizontalProduct';

const HorizontalProductList = () => {
  const img1 = require('../Images/img9.png');
  const img2 = require('../Images/img10.png');
  const img3 = require('../Images/img11.png');
  const img4 = require('../Images/img12.png');
  const img5 = require('../Images/img13.png');
  return (
    <ScrollView
      style={styles.horizontalProductList}
      horizontal={true}
      showsHorizontalScrollIndicator={false}>
      <HorizontalProduct image={img1} />
      <HorizontalProduct image={img2} />
      <HorizontalProduct image={img3} />
      <HorizontalProduct image={img4} />
      <HorizontalProduct image={img5} />
    </ScrollView>
  );
};

export default HorizontalProductList;

const styles = StyleSheet.create({
  horizontalProductList: {},
});
