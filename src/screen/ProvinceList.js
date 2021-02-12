import React, {useState, useEffect, useLayoutEffect} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  TextInput,
  Text,
} from 'react-native';
import {Icon} from 'react-native-elements';
import provinces from '../services/province';
import batiks from '../services/batiks';

const ProvinceList = ({navigation}) => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [debounceKeyword, setDebounceKeyword] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [results, setResults] = useState(provinces.data[0].ID);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebounceKeyword(searchKeyword);
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [searchKeyword]);

  useEffect(() => {
    const allProvinces = provinces.data[0].ID;
    const filteredProvinces = allProvinces.filter((item) => {
      return item.name.toLowerCase().includes(debounceKeyword.toLowerCase());
    });

    if (debounceKeyword) {
      setResults(filteredProvinces);
    } else {
      setResults(allProvinces);
    }
  }, [debounceKeyword]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => {
            if (!searchKeyword) {
              setShowSearch(!showSearch);
            }
          }}>
          <View style={styles.headerRightStyle}>
            <Icon type="MaterialIcons" name={'search'} color="#fff" />
          </View>
        </TouchableOpacity>
      ),
    });
  }, [navigation, showSearch, searchKeyword]);

  const onSelectProvince = (item, index) => {
    const findBatik = batiks.data.find(
      (batikItem, batikIndex) => index === batikIndex,
    );
    if (findBatik) {
      navigation.navigate('Detail', {
        title: item.name,
        item: findBatik,
      });
    }
  };

  const renderItem = ({item, index}) => {
    const capitalized =
      item.name.slice(0, 1).toUpperCase() +
      item.name.slice(1, item.name.length);
    return (
      <TouchableOpacity onPress={() => onSelectProvince(item, index)}>
        <View style={styles.itemContainer}>
          <View style={styles.itemDesc}>
            <Text style={styles.itemText}>{capitalized}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.layout}>
      {showSearch && (
        <View style={styles.searchBar}>
          <TextInput
            style={styles.searchTextInput}
            placeholder="Search provinces"
            onChangeText={(text) => setSearchKeyword(text)}
            value={searchKeyword}
            clearButtonMode="always"
          />
          <Icon
            type="MaterialIcons"
            name={'clear'}
            size={20}
            onPress={() => setSearchKeyword('')}
          />
        </View>
      )}
      <FlatList
        data={results}
        renderItem={renderItem}
        keyExtractor={(item) => item.iso_code}
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

export default ProvinceList;
