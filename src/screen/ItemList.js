import React, {useLayoutEffect} from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import batiks from '../services/batiks';
import CapitalizedText from '../components/CapitalizedText';

const ItemList = ({route, navigation}) => {
  const {title, selected} = route.params;
  const results = batiks.data.filter((item, index) => index === selected);
  useLayoutEffect(() => {
    navigation.setOptions({
      title: title || 'Gallery',
    });
  }, [navigation, title]);

  const renderItem = ({item}) => {
    return (
      <View style={styles.itemContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Detail', {item: item})}>
          <Image source={item.image} style={styles.smallBanner} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Detail', {item: item})}>
          <View style={styles.itemDesc}>
            <View>
              <CapitalizedText bold title>
                {item.name}
              </CapitalizedText>
            </View>
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
  },
  itemDesc: {
    flex: 4,
    padding: 10,
    flexDirection: 'column',
  },
  smallBanner: {
    flex: 1,
    width: 100,
    height: 100,
    borderRadius: 10,
  },
});

export default ItemList;
