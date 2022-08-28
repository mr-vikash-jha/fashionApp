import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import constants from '../constants';

const ProductButtons = () => {
  return (
    <View style={styles.main}>
      <TouchableOpacity style={styles.buyBtn}>
        <Icon
          name="shopping-outline"
          color={constants.primaryColor}
          size={25}
        />
        <Text style={styles.buyTitle}>BUY NOW</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.cartBtn}>
        <Text style={styles.cartTitle}>ADD TO CART</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductButtons;

const styles = StyleSheet.create({
  main: {
    height: 80,
    backgroundColor: '#F8F7F7',
    marginHorizontal: -28,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 9,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  buyBtn: {
    width: '58.5%',
    height: 60,
    borderWidth: 1,
    borderColor: constants.primaryColor,
    borderRadius: 3,
    marginRight: '1.5%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  buyTitle: {
    fontSize: 16,
    color: constants.primaryColor,
  },
  cartBtn: {
    width: '38.5%',
    height: 60,
    marginLeft: '1.5%',
    backgroundColor: constants.primaryColor,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartTitle: {
    fontSize: 16,
    color: '#FFFFFF',
  },
});
