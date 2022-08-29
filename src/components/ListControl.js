import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';

const ListControl = () => {
  return (
    <View style={styles.listControl}>
      <View style={styles.filter}>
        <Icon name="filter-outline" size={30} color="#000" />
        <Text style={styles.filterText}>filter</Text>
      </View>
      <View style={styles.sortBy}>
        <Icon name="sort" size={30} color="#000" />
        <Text style={styles.filterText}>sort by</Text>
      </View>
    </View>
  );
};

export default ListControl;

const styles = StyleSheet.create({
  listControl: {
    padding: 0,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    minHeight: 50,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#D9D9D9',
  },
  filter: {
    flex: 0.5,
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderColor: '#D9D9D9',
  },
  sortBy: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterText: {
    color: '#2F2F2F',
    fontSize: 18,
    lineHeight: 28,
    // flexWeight: '400',
    margin: 8,
  },
});
