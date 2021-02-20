import React from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const deviceWidth = Dimensions.get('window').width;

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
          <View style={styles.batikContainer}>
            <Text style={styles.smallBannerText}>Galeri Batik</Text>
          </View>
        </TouchableOpacity>
      </View>
      {/* <Button title="List Batik" onPress={() => navigation.navigate('List')} /> */}
      <View style={styles.imageContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Provinces')}>
          <Image
            source={require('./img/games-banner.jpg')}
            style={styles.smallBanner}
          />
          <View style={styles.batikContainer}>
            <Text style={styles.smallBannerText}>Permainan</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.creditContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Provinces')}>
          <Image
            source={require('./img/thank-you.jpg')}
            style={styles.smallBanner}
          />
        </TouchableOpacity>
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
    flex: 2,
    justifyContent: 'flex-start',
    padding: 5,
  },
  creditContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 5,
  },
  restContainer: {
    flex: 4,
    paddingTop: 10,
  },
  smallBanner: {
    width: deviceWidth - 30,
    borderRadius: 10,
    height: '100%',
  },
  smallBannerText: {
    color: 'black',
    padding: 20,
    backgroundColor: 'rgba(255,255,255, 1)',
    borderRadius: 10,
    fontWeight: 'bold',
    fontSize: 30,
    fontStyle: 'italic',
    elevation: 6,
  },
  batikContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default HomeScreen;
