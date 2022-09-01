import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import constants from '../constants';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';

const PriceDetails = props => {
  return (
    <View style={styles.priceDetail}>
      <View style={styles.priceView}>
        <View style={styles.originalPrice}>
          <Text style={styles.originalPriceText}>₹ 3499</Text>
        </View>
        <View style={styles.discountedPrice}>
          <Text style={styles.discountedPriceText}>₹ 3499</Text>
        </View>
        <View style={styles.dicount}>
          <Text style={styles.dicountText}>50%</Text>
        </View>
      </View>
      {props.setbookmark && (
        <View style={styles.bookmark}>
          <Icon name="bookmark-outline" size={15} color="#C78B9E" />
        </View>
      )}
    </View>
  );
};

export default PriceDetails;
const styles = StyleSheet.create({
  priceDetail: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  priceView: {
    flex: 1,
    minHeight: 13,
    flexDirection: 'row',
  },
  originalPrice: {
    marginRight: 8.55,
    color: '#2F2F2F',
    fontFamily: 'Josefin Sans',
  },
  originalPriceText: {
    fontSize: 12,
    fontWeight: '400',
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    textDecorationColor: '#2f2f2f',
    color: '#2f2f2f',
  },
  discountedPrice: {
    marginRight: 11.33,
  },
  discountedPriceText: {
    fontSize: 12,
    fontWeight: '400',
    color: '#2f2f2f',
  },
  dicountText: {
    fontSize: 12,
    fontWeight: '400',
    color: constants.productDiscountColor,
  },
  bookmark: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 26.65,
    width: 26.65,
    backgroundColor: constants.bannerColor,
    borderRadius: 25,
  },
});
