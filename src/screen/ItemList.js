import React, {useLayoutEffect} from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native';
import batiks from '../services/batik-jatim';
import CapitalizedText from '../components/CapitalizedText';

const deviceWidth = Dimensions.get('window').width;

const ItemList = ({navigation}) => {
  const results = batiks.data;
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Surabaya',
    });
  });

  const renderItem = ({item}) => {
    return (
      <View style={styles.itemContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Detail', {item: item})}>
          <Image source={{uri: item.image}} style={styles.smallBanner} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Detail', {item: item})}>
          <View style={styles.itemDesc}>
            <CapitalizedText bold title>
              {item.name}
            </CapitalizedText>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={styles.layout}>
      <FlatList
        data={results}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  itemContainer: {
    flex: 1,
    padding: 10,
    flexDirection: 'row',
    width: deviceWidth,
  },
  itemDesc: {
    flex: 4,
    padding: 10,
    flexDirection: 'column',
    width: deviceWidth - 130,
  },
  smallBanner: {
    flex: 1,
    width: 100,
    height: 100,
    borderRadius: 10,
  },
});

export default ItemList;
