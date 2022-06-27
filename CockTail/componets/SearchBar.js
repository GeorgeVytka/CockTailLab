import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Pressable,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';
import helper from '../theme/helper';
import Icon from 'react-native-vector-icons/FontAwesome';

const SearcBar = () => {
  const [serachInput, setSearchInput] = useState('');

  const handleFilterPress = () => {
    console.log('filter press');
  };
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            onChangeText={setSearchInput}
            value={serachInput}
            placeholder="Search for Cocktails"
            keyboardType="default"
          />
        </View>
      </View>
      <View style={styles.filterImgContainer}>
        <Pressable
          onPress={handleFilterPress}
          style={({pressed}) => [
            {
              backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
            },
            styles.filterStyle,
          ]}>
          <Text>
            <Icon name="filter" size={30} color="#900" /> Filter
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SearcBar;

const styles = StyleSheet.create({
  container: {flexDirection: 'row'},
  searchContainer: {
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
  filterImgContainer: {
    justifyContent: 'center',
    marginLeft: helper.size(20),
  },
  filterStyle: {
    padding: 3,
    borderRadius: 5,
  },
});
