import React from 'react';
import {Image, StyleSheet, View, Text, TouchableOpacity} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* <Text style={[styles.baseText, styles.titleText]}>Hello world!</Text> */}
      <View style={styles.imageContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Provinces')}>
          <Image
            source={require('./img/small-banner.jpg')}
            style={styles.smallBanner}
          />
          <View style={styles.smallBannerTextContainer}>
            <Text style={styles.smallBannerText}>Batik Gallery</Text>
          </View>
        </TouchableOpacity>
      </View>
      {/* <Button title="List Batik" onPress={() => navigation.navigate('List')} /> */}
      <View style={styles.restContainer}>
        <Text style={[styles.baseText, styles.titleText]}>Hello world!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 10,
  },
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  imageContainer: {
    flex: 1,
  },
  restContainer: {
    flex: 4,
    paddingTop: 10,
  },
  smallBanner: {
    flex: 1,
    alignSelf: 'stretch',
    resizeMode: 'cover',
    width: 340,
    height: 'auto',
    borderRadius: 10,
  },
  smallBannerText: {
    color: 'black',
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    fontWeight: 'bold',
  },
  smallBannerTextContainer: {
    position: 'absolute',
    top: 60,
    left: 230,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default HomeScreen;
