import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/dist/EvilIcons';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.menu}>
        <Icon name="menu" color={'black'} size={30} />
      </View>
      <View style={styles.logo}>
        <Icon name="react" color={'black'} size={30} />
      </View>
      <View style={styles.headerOptions}>
        <Icon2 name="search" color={'black'} size={30} />
        <Icon name="bookmark-outline" color={'black'} size={25} />
        <Icon name="shopping-outline" color={'black'} size={25} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 70,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 15,
  },
  headerOptions: {
    width: '33.3%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
  },
  menu: {
    width: '33.3%',
  },
});

export default Header;
