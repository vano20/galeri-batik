import React, {useLayoutEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import CapitalizedText from '../components/CapitalizedText';

const deviceWidth = Dimensions.get('window').width;

const Detail = ({route, navigation}) => {
  const {item} = route.params;
  const capitalized =
    item.name.slice(0, 1).toUpperCase() +
    item.name.slice(1, item.name.length).toLowerCase();
  useLayoutEffect(() => {
    navigation.setOptions({
      title: capitalized,
    });
  }, [capitalized, navigation]);
  const onClickImage = (image) => {
    const images = [
      {
        source: {uri: image},
      },
    ];
    navigation.navigate('Viewer', {
      images,
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <TouchableOpacity onPress={() => onClickImage(item.image)}>
          <Image source={{uri: item.image}} style={styles.image} />
        </TouchableOpacity>
      </View>
      <View style={styles.title}>
        <CapitalizedText bold title={35}>
          {item.name}
        </CapitalizedText>
      </View>
      <View style={styles.content}>
        <Text style={styles.contentText}>{item.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: 10,
    borderRadius: 10,
  },
  imageContainer: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: 10,
  },
  image: {
    width: deviceWidth,
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    padding: 10,
    width: '100%',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginBottom: 10,
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  titleText: {
    textAlign: 'center',
  },
  content: {
    flex: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    maxHeight: '50%',
  },
  contentText: {
    textAlign: 'justify',
    fontSize: 18,
    padding: 10,
  },
});

export default Detail;
