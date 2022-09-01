import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import IndudialProductDetails from '../components/IndudialProductDetails';
import SimilarProducts from '../components/SimilarProducts';
import LikeProducts from '../components/LikeProducts';
import RecentView from '../components/RecentView';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import constants from '../constants';
import ImageSlider from '../components/ImageSlider';
import {SliderBox} from 'react-native-image-slider-box';
// import {ViewPropTypes} from 'deprecated-react-native-prop-types';

const Details = () => {
  const state = {
    image: [
      require('../Images/mainimg.png'),
      require('../Images/mainimg.png'),
      require('../Images/mainimg.png'),
      require('../Images/mainimg.png'),
      require('../Images/mainimg.png'),
    ],
  };
  return (
    <View style={styles.main}>
      <Header />
      <ScrollView style={styles.detailsStyle}>
        <View style={styles.bredcrum}>
          <Text style={styles.headerText}>
            Home / Mens Clothing / Shirts / Layer
          </Text>
        </View>
        {/* <ImageSlider /> */}
        {/* <Image source={require('../Images/mainimg.png')} /> */}
        <SliderBox
          images={state.image}
          style={styles.slider}
          paginationBoxStyle={{
            alignSelf: 'flex-start',
          }}
          dotColor="#787775"
          inactiveDotColor="#D9D9D9"
        />
        <View style={styles.bookmarkView}>
          <View style={styles.bookmark}>
            <Icon name="bookmark-outline" size={25} color="#787775" />
          </View>
          <View style={styles.bookmark}>
            <Image source={require('../Images/share.png')} />
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
  main: {
    backgroundColor: 'white',
  },
  detailsStyle: {
    position: 'relative',
  },
  bookmarkView: {
    position: 'absolute',
    top: '19%',
    left: '85%',
  },
  bookmark: {
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    borderRadius: 25,
  },
  bredcrum: {
    padding: 14,
  },
  headerText: {
    fontFamily: constants.primaryFont,
    lineHeight: 28,
    fontSize: 15,
    color: '#787775',
    fontWeight: '400',
  },
  // slider: {
  //   // backgroundColor: 'red',
  //   height: 530,
  // },
});
