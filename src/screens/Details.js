import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import IndudialProductDetails from '../components/IndudialProductDetails';
import SimilarProducts from '../components/SimilarProducts';
import LikeProducts from '../components/LikeProducts';
import RecentView from '../components/RecentView';

const Details = () => {
  return (
    <View>
      <Header />
      <ScrollView>
        <View style={styles.bredcrum}>
          <Text>Home / Mens Clothing / Shirts / Layerr</Text>
        </View>
        <Image style={styles.image} source={require('../Images/mainimg.png')} />
        <IndudialProductDetails />
        <SimilarProducts />
        <LikeProducts />
        <RecentView />
      </ScrollView>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  bredcrum: {
    padding:14,
    flex:1,
  }
});
