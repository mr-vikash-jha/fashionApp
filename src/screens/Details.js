
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import IndudialProductDetails from '../components/IndudialProductDetails';
import SimilarProducts from '../components/SimilarProducts';
import LikeProducts from '../components/LikeProducts';
import RecentView from '../components/RecentView';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';

const Details = () => {
  return (
    <View>
      <Header />
      <ScrollView style={styles.detailsStyle}>
        <View style={styles.bredcrum}>
          <Text style= {styles.headerText}>Home / Mens Clothing / Shirts / Layerr</Text>
        </View>
        <Image style={styles.image} source={require('../Images/mainimg.png')} />
        <View style={styles.bookmarkView}>
          <View style={styles.bookmark}>
            <Icon name="bookmark-outline" size={25} color="#787775" />
          </View>
          <View style={styles.bookmark}>
            <Icon name="share-outline" size={25} color="#787775" />
          </View>
        </View>
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
  detailsStyle: {
    position: 'relative',
  },
  bookmarkView: {
    position: 'absolute',
    top: '16%',
    left: '82%',
  },
  bookmark: {
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 50,
    backgroundColor: '#D9D9D9',
    borderRadius: 25,
  },
  bredcrum:{
    padding:14,
  },
  headerText:{
    lineHeight:28,
    fontSize:15,
    color:'#787775',
    fontWeight:'400',
  }
});