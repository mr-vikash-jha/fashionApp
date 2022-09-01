import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import constants from '../constants';
import ColourContainer from './ColourContainer';
import SizeContainer from './SizeContainer';
import ProductButtons from './ProductButtons';
import ProductDiscreption from './ProductDiscreption';
import MoreDetails from './MoreDetails';

const IndudialProductDetails = () => {
  return (
    <View style={styles.main}>
      <View style={styles.mainContainer}>
        <View style={styles.title}>
          <Text style={styles.titleText}>ABSTRACT PRINT MODAL MINI DRESS </Text>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>Rs. 2499</Text>
          <Text style={styles.taxContainer}>Incl Tax</Text>
        </View>
      </View>
      <ColourContainer />
      <SizeContainer />
      <View style={styles.notify}>
        <Image source={require('../Images/message.png')} />
        <Text style={styles.notifyTitle}>Notify Me</Text>
      </View>
      <ProductButtons />
      <ProductDiscreption />
      <MoreDetails />
    </View>
  );
};

export default IndudialProductDetails;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    marginHorizontal: 28,
  },
  mainContainer: {
    marginVertical: 25,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  title: {
    // marginRight:25
  },
  titleText: {
    fontSize: 14,
    // fontSize: constants.IndividualProductTitleFontSize,
    fontWeight: constants.IndividualProductTitleFontWeight,
    color: constants.productTitleFontColor,
    letterSpacing: 0.03,
    fontFamily: constants.primaryFont,
  },
  priceContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  price: {
    fontSize: constants.IndividualProductPriceFontSize,
    fontWeight: constants.IndividualProductPriceFontWeight,
    color: constants.productTitleFontColor,
    fontFamily: constants.primaryFont,
  },
  taxContainer: {
    fontSize: constants.IndividualProductPriceSecFontSize,
    color: constants.productDiscFontColor,
    fontFamily: constants.primaryFont,
  },
  notify: {
    marginTop: 15,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  notifyTitle: {
    marginLeft: 3,
    fontSize: 18,
    color: '#2F2F2F',
    fontSize: 17,
    fontWeight: '400',
    fontFamily: constants.primaryFont,
  },
});
