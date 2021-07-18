import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, FlatList, Text} from 'react-native';

const GameList = ({navigation}) => {
  const [results] = useState(['1', '2']);

  const onSelectSet = (item) => {
    navigation.navigate(`Permainan ${item}`);
  };

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity onPress={() => onSelectSet(item)}>
        <View style={styles.itemContainer}>
          <View style={styles.itemDesc}>
            <Text style={styles.itemText}>Permainan {item}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.layout}>
      <FlatList
        data={results}
        renderItem={renderItem}
        keyExtractor={(item, index) => `${index}`}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerRightStyle: {
    padding: 10,
  },
  layout: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  searchBar: {
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    width: '90%',
    marginTop: 10,
  },
  searchTextInput: {
    flex: 1,
    padding: 10,
    height: 40,
  },
  itemContainer: {
    flex: 1,
    padding: 10,
    flexDirection: 'row',
  },
  itemDesc: {
    flex: 4,
    padding: 10,
    flexDirection: 'column',
  },
  itemText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default GameList;
