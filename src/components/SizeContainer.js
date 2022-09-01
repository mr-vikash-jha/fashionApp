import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import constants from '../constants';
import SizeBox from './SizeBox';

const SizeContainer = () => {
  const [selectedSizeNumber, setSelectedSizeNumber] = useState(1);

  return (
    <View style={styles.main}>
      <View style={styles.sizeControll}>
        <Text style={styles.sizeTitle}>SIZE</Text>
        <TouchableOpacity style={styles.sizeButton}>
          <Image source={require('../Images/arrow.png')} />
          <Text style={styles.sizeButtonTitle}>Size Chart</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal={true} style={styles.sizeBoxContainer}>
        <SizeBox
          sizeNumber={1}
          selectedSizeNumber={selectedSizeNumber}
          onPress={() => setSelectedSizeNumber(1)}
          color={constants.primaryColor}
          title="XS"
          size={36}
        />
        <SizeBox
          sizeNumber={2}
          selectedSizeNumber={selectedSizeNumber}
          onPress={() => setSelectedSizeNumber(2)}
          title="S"
          size={38}
        />
        <SizeBox
          sizeNumber={3}
          selectedSizeNumber={selectedSizeNumber}
          onPress={() => setSelectedSizeNumber(3)}
          title="M"
          size={40}
        />
        <SizeBox
          sizeNumber={4}
          selectedSizeNumber={selectedSizeNumber}
          onPress={() => setSelectedSizeNumber(4)}
          title="L"
          size={42}
        />
        <SizeBox
          sizeNumber={5}
          selectedSizeNumber={selectedSizeNumber}
          onPress={() => setSelectedSizeNumber(5)}
          title="XL"
          size={44}
        />
        <SizeBox
          sizeNumber={6}
          selectedSizeNumber={selectedSizeNumber}
          onPress={() => setSelectedSizeNumber(6)}
          title="XXL"
          size={46}
        />
      </ScrollView>
    </View>
  );
};

export default SizeContainer;

const styles = StyleSheet.create({
  main: {
    marginTop: 25,
  },
  sizeControll: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  sizeButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  sizeTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2F2F2F',
  },
  sizeButtonTitle: {
    marginLeft: 8,
    fontSize: constants.ColorTitleFont,
    color: constants.primaryColor,
    borderBottomWidth: 1,
    borderBottomColor: constants.primaryColor,
  },
  sizeBoxContainer: {
    marginRight: -28,
  },
});
