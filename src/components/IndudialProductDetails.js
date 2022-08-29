import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import constants from '../constants';
import ColourContainer from './ColourContainer';
import SizeContainer from './SizeContainer';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import ProductButtons from './ProductButtons';
import ProductDiscreption from './ProductDiscreption';
import MoreDetails from './MoreDetails';

const IndudialProductDetails = () => {
  return (
    <View style={styles.main}>
      <View style={styles.mainContainer}>
        <Text style={styles.title}>ABSTRACT PRINT MODAL MINI DRESS</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>Rs. 2499</Text>
          <Text style={styles.taxContainer}>Incl Tax</Text>
        </View>
      </View>
      <ColourContainer />
      <SizeContainer />
      <View style={styles.notify}>
        <Icon name="email-outline" color={'#2F2F2F'} size={18} />
        <Text style={styles.notifyTitle}>Notify Me</Text>
      </View>
      <ProductButtons />
      <ProductDiscreption />
      <View style={styles.model}>
        <Text style={styles.modelTitle}>Model Size:</Text>
        <View style={styles.modelDiscView}>
          <Text style={styles.modeldisc}> Height:</Text>
          <Text style={styles.modelText}>185cm/6'1" </Text>
          <Text style={styles.modeldisc}> Wears:</Text>
          <Text style={styles.modelText}>M/L</Text>
        </View>
      </View>
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
    fontSize: constants.IndividualProductTitleFontSize,
    fontWeight: constants.IndividualProductTitleFontWeight,
    color: constants.productTitleFontColor,
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
  },
  taxContainer: {
    fontSize: constants.IndividualProductPriceSecFontSize,
    color: constants.productDiscFontColor,
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
  },
  model: {
    marginTop: 18,
  },
  modelTitle: {
    fontSize: 18,
    fontWeight: '400',
    color: '#000',
    fontSize: 17,
  },
  modelDiscView: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  modeldisc: {
    fontsize: 13,
    color: '#000',
    fontWeight: '400',
  },
  modelText: {
    color: '#787775',
  },
});
