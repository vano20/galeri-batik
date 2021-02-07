import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  TextInput,
} from 'react-native';
import provinces from '../services/province';
import CapitalizedText from '../components/CapitalizedText';

const ProvinceList = ({navigation}) => {
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('List')}>
        <View style={styles.itemContainer}>
          <View style={styles.itemDesc}>
            <CapitalizedText bold title>
              {item.name}
            </CapitalizedText>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.layout}>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchTextInput}
          placeholder="Search provinces"
          // onChangeText={(text) => onChangeText(text)}
          // value={value}
        />
      </View>
      <FlatList
        data={provinces.data[0].ID}
        renderItem={renderItem}
        keyExtractor={(item) => item.iso_code}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  searchBar: {
    padding: 20,
  },
  searchTextInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
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
});

export default ProvinceList;
