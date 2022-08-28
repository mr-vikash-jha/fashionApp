import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Product from './Product';

const RenderList = () => {
  const img1 = require('../Images/img1.jpg');
  const img2 = require('../Images/img2.jpg');
  const img3 = require('../Images/img3.png');
  const img4 = require('../Images/img4.png');
  const img5 = require('../Images/img5.png');
  const img6 = require('../Images/img6.png');
  const img7 = require('../Images/img7.png');
  const img8 = require('../Images/img8.png');
  return (
    <View style={styles.renderList}>
      <Product image={img1} />
      <Product image={img2} />
      <Product image={img3} />
      <Product image={img4} />
      <Product image={img5} />
      <Product image={img6} />
      <Product image={img7} />
      <Product image={img8} />
    </View>
  );
};

export default RenderList;

const styles = StyleSheet.create({
  renderList: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    overflow: 'hidden',
  },
});
