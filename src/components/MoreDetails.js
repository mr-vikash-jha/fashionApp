import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';

const MoreDetails = () => {
  const [mactive, setMactive] = useState(false);
  const [active, setActive] = useState(false);
  const manufactureDetailHandler = () => {
    setMactive(!mactive);
  };
  const returnAndExchangeHandler = () => {
    setActive(!active);
  };
  return (
    <View>
      <TouchableOpacity
        onPress={manufactureDetailHandler}
        style={styles.manufactureDetails}>
        <Text style={styles.manufactureDetailsText}>MANUFACTURER DETAILS </Text>
        <Icon
          style={styles.plusIcon}
          name={mactive ? 'minus' : 'plus'}
          size={20}
          color="#000"
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={returnAndExchangeHandler}
        style={styles.returnAndExchange}>
        <Text style={styles.returnAndExchangeText}>RETURN & EXCHANGE</Text>
        <Icon
          style={styles.plusIcon}
          name={active ? 'minus' : 'plus'}
          size={20}
          color="#000"
        />
      </TouchableOpacity>
    </View>
  );
};

export default MoreDetails;

const styles = StyleSheet.create({
  manufactureDetails: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#D9D9D9',
    marginHorizontal: -28,
  },
  manufactureDetailsText: {
    marginLeft: 30,
    marginVertical: 18,
    fontSize: 16,
    fontWeight: '500',
    color: '#2F2F2F',
    lineHeight: 23,
  },
  returnAndExchange: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#D9D9D9',
    marginHorizontal: -28,
  },
  returnAndExchangeText: {
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
});
