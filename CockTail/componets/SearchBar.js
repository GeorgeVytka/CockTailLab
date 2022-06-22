import React, {useState} from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';
import helper from '../theme/helper';
import Icon from 'react-native-vector-icons/FontAwesome';

const SearcBar = () => {
  const [serachInput, setSearchInput] = useState('');
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            onChangeText={setSearchInput}
            value={serachInput}
            placeholder="Search for Cocktails"
            keyboardType="default"
          />
        </View>
      </View>
      <Text>
        <Icon name="filter" size={30} color="#900" />;
      </Text>
    </View>
  );
};

export default SearcBar;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'red',

    borderRadius: 40,
    justifyContent: 'center',
  },
  inputContainer: {
    marginLeft: 20,
    justifyContent: 'center',
  },
});
