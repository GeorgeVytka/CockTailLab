import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import helper from '../theme/helper';

const CocktailCard = ({title}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageContainer}
        source={require('../assits/img/5noda61589575158.jpeg')}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.titleStyle}>{title}</Text>
      </View>
    </View>
  );
};

export default CocktailCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'yellow',
    flexDirection: 'row',
    width: '100%',
    height: 100,
    marginTop: helper.size(15),
    borderRadius: 20,
    alignItems: 'center',
  },
  imageContainer: {
    height: 70,
    width: 70,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'white',
    marginLeft: 25,
  },
  titleContainer: {
    marginLeft: 10,
  },
  titleStyle: {
    fontSize: 25,
  },
});
