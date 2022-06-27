import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
const Category = ({iconName, title}) => {
  return (
    <View style={styles.conatiner}>
      <Text>
        <Icon name={iconName} size={50} color="#900" />
      </Text>
      <Text style={styles.textStyle}>{title}</Text>
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  conatiner: {
    borderWidth: 2,
    borderColor: '#900',
    borderRadius: 10,
    padding: 3,
    width: 90,
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    color: '#900',
    marginTop: 2,
    textAlign: 'center',
  },
});
