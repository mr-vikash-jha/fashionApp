import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import constants from '../constants';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import {act} from 'react-test-renderer';

const ProductDiscreption = () => {
  const [active, setActive] = useState(false);
  const activeStateHandler = () => {
    setActive(!active);
  };
  return (
    <View style={styles.main}>
      {/* //product description */}
      <TouchableOpacity onPress={activeStateHandler} style={styles.Description}>
        <Text style={styles.DescriptionText}>DESCRIPTION</Text>
        <Icon
          style={styles.plusIcon}
          name={active ? 'minus' : 'plus'}
          size={20}
          color="#000"
        />
      </TouchableOpacity>
      {active && (
        <View>
          <Text style={styles.textDisc}>
            A Premium Double layer Seer-sucker shirt. can be worn for evening
            get together. liked by young adults and out going people. Regular
            Collar. 100% premium cotton double layer seer sucker fabric. Full
            Sleeves and regular collar. Tailored Fit / Perfected pattern after
            extensive research on body measurements. Hand Wash - For detailed
            instructions- follow the wash-care label on the garment. Can be
            paired with Rare Rabbit Denim.
          </Text>
          <View style={styles.model}>
            <Text style={styles.modelTitle}>Model Size:</Text>
            <View style={styles.modelDiscView}>
              <Text style={styles.modeldisc}>Height:</Text>
              <Text style={styles.modelText}>185cm/6'1" </Text>
              <Text style={styles.modeldisc}> Wears:</Text>
              <Text style={styles.modelText}>M/L</Text>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

export default ProductDiscreption;

const styles = StyleSheet.create({
  textDisc: {
    fontSize: 15,
    lineHeight: 25,
    color: constants.bredcrumColor,
    fontWeight: '400',
    fontFamily: constants.primaryFont,
  },
  Description: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: '#D9D9D9',
    marginTop: 30,
    marginHorizontal: -28,
  },
  DescriptionText: {
    marginLeft: 30,
    marginVertical: 18,
    fontSize: 16,
    fontWeight: '500',
    color: '#2F2F2F',
    lineHeight: 23,
  },
  plusIcon: {
    marginRight: 30,
  },
  model: {
    marginVertical: 18,
  },
  modelTitle: {
    fontSize: 18,
    fontWeight: '400',
    color: '#000',
    fontSize: 17,
    fontFamily: constants.primaryFont,
  },
  modelDiscView: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  modeldisc: {
    fontSize: 13,
    color: '#000',
    fontWeight: '400',
    fontFamily: constants.primaryFont,
  },
  modelText: {
    color: '#787775',
  },
});
