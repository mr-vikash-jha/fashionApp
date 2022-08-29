import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';

const MoreDetails = () => {
  return (
    <View>
      <View style={styles.manufactureDetails}>
        <Text style={styles.manufactureDetailsText}>MANUFACTURER DETAILS </Text>
        <Icon style={styles.plusIcon} name="plus" size={20} color="#000" />
      </View>
      <View style={styles.returnAndExchange}>
        <Text style={styles.returnAndExchangeText}>RETURN & EXCHANGE</Text>
        <Icon style={styles.plusIcon} name="plus" size={20} color="#000" />
      </View>
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
    marginTop: 30,
    marginHorizontal: -28,
  },
  manufactureDetailsText: {
    marginLeft: 30,
    marginVertical: 18,
    fontSize: 16,
    fontWeight: '500',
    color: '#2F2F2F',
    lineHeight:23
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
    lineHeight:23
  },
  plusIcon: {
    marginRight: 30,
  },
});
