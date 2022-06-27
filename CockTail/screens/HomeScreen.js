import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  KeyboardAvoidingView,
  Keyboard,
  Pressable,
  FlatList,
} from 'react-native';
import helper from '../theme/helper';
import SearcBar from '../componets/SearchBar';
import Category from '../componets/UI/Category';
import CocktailCard from '../componets/CocktailCard';

const HomeScreen = () => {
  const tempArry = [
    {title: 'Margarita', index: 1},
    {title: 'Beer', index: 2},
    {title: 'Vodka Shot', index: 3},
  ];
  return (
    <SafeAreaView>
      <View style={styles.searchContainer}>
        <SearcBar />
      </View>
      <View style={styles.categoryContainer}>
        <Category iconName={'cocktail'} title={'Cocktail'} />
        <Category iconName={'glass-whiskey'} title={'Ordinary Drink'} />
      </View>

      <View style={styles.cardContainer}>
        <View
          style={{
            width: '100%',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <FlatList
            style={{width: '80%'}}
            data={tempArry}
            renderItem={itemData => (
              <CocktailCard title={itemData.item.title} />
            )}
            keyExtractor={itemData => itemData.id}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  searchContainer: {
    width: helper.size(260),
    height: 52,
    marginTop: helper.size(20),
    marginLeft: helper.size(10),
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: helper.size(20),
    marginLeft: helper.size(60),
    marginRight: helper.size(60),
  },
  cardContainer: {
    backgroundColor: 'blue',

    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    height: '100%',
  },
});
