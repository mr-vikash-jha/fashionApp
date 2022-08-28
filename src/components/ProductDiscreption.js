import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ProductDiscreption = () => {
  return (
    <View style={styles.main}>
      <Text style={styles.textDisc}>
        A Premium Double layer Seer-sucker shirt. can be worn for evening get
        together. liked by young adults and out going people. Regular Collar.
        100% premium cotton double layer seer sucker fabric. Full Sleeves and
        regular collar. Tailored Fit / Perfected pattern after extensive
        research on body measurements. Hand Wash - For detailed instructions-
        follow the wash-care label on the garment. Can be paired with Rare
        Rabbit Denim.
      </Text>
    </View>
  );
};

export default ProductDiscreption;

const styles = StyleSheet.create({
  textDisc: {
    fontSize: 15,
    lineHeight: 25,
  },
});
