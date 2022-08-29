import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import CollectionBanner from '../components/CollectionBanner';
import ProductList from '../components/ProductList';
import Header from '../components/Header';

const HomeScreen = () => {
  return (
    <View style={styles.main}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <CollectionBanner />
        <ProductList />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'white',
  },
});
