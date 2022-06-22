import React from 'react';
import {Text, View, SafeAreaView, StyleSheet} from 'react-native';
import helper from '../theme/helper';
import SearcBar from '../componets/SearchBar';
const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.searchContainer}>
        <SearcBar />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  searchContainer: {
    width: helper.size(300),
    height: 42,
    marginTop: helper.size(20),
    marginLeft: helper.size(10),
  },
});
