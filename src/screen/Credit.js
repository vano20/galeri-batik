import React from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Linking,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const deviceWidth = Dimensions.get('window').width;

const Credit = ({navigation}) => {
  const handlePress = async (url) => {
    await Linking.openURL(url);
  };
  return (
    <View style={styles.container}>
      {/* <Text style={[styles.baseText, styles.titleText]}>Hello world!</Text> */}
      <View style={styles.imageContainer}>
        <TouchableOpacity
          onPress={() =>
            handlePress(
              'https://unsplash.com/@camerale?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText',
            )
          }>
          <View style={styles.imageShadow}>
            <Image
              source={require('./img/small-banner.jpg')}
              style={styles.smallBanner}
            />
          </View>
          <LinearGradient
            start={{x: 0.0, y: 0.0}}
            end={{x: 0.0, y: 1.0}}
            locations={[0.7, 1]}
            colors={['#ffffff44', '#00000088']}
            style={styles.batikContainer}>
            <Text style={styles.smallBannerText}>
              Photo by @camerale on unsplash
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
      {/* <Button title="List Batik" onPress={() => navigation.navigate('List')} /> */}
      <View style={styles.imageContainer}>
        <TouchableOpacity
          onPress={() =>
            handlePress(
              'https://unsplash.com/@brett_jordan?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText',
            )
          }>
          <Image
            source={require('./img/games-banner.jpg')}
            style={styles.smallBanner}
          />
          <LinearGradient
            start={{x: 0.0, y: 0.0}}
            end={{x: 0.0, y: 1.0}}
            locations={[0.7, 1]}
            colors={['#ffffff44', '#00000088']}
            style={styles.batikContainer}>
            <Text style={styles.smallBannerText}>
              Photo by @brett_jordan on unsplash
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
      <View style={styles.creditContainer}>
        <TouchableOpacity
          onPress={() =>
            handlePress(
              'https://unsplash.com/@mattjonesdp?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText',
            )
          }>
          <Image
            source={require('./img/thank-you.jpg')}
            style={styles.smallBanner}
          />
          <LinearGradient
            start={{x: 0.0, y: 0.0}}
            end={{x: 0.0, y: 1.0}}
            locations={[0.7, 1]}
            colors={['#ffffff44', '#00000088']}
            style={styles.batikContainer}>
            <Text style={styles.smallBannerText}>
              Photo by @mattjonesdp on unsplash
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
      <View style={styles.creditContainer}>
        <TouchableOpacity
          onPress={() =>
            handlePress(
              'https://unsplash.com/@dead____artist?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
            )
          }>
          <Image source={require('./img/map.jpg')} style={styles.smallBanner} />
          <LinearGradient
            start={{x: 0.0, y: 0.0}}
            end={{x: 0.0, y: 1.0}}
            locations={[0.7, 1]}
            colors={['#ffffff44', '#00000088']}
            style={styles.batikContainer}>
            <Text style={styles.smallBannerText}>
              Photo by @dead____artist on unsplash
            </Text>
          </LinearGradient>
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
    flex: 1,
    justifyContent: 'flex-start',
    padding: 0,
    borderRadius: 10,
    backgroundColor: '#fff',
    elevation: 5,
    marginBottom: 5,
  },
  creditContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 0,
    borderRadius: 10,
    backgroundColor: '#fff',
    elevation: 5,
    marginBottom: 5,
  },
  restContainer: {
    flex: 4,
    paddingTop: 10,
  },
  imageShadow: {},
  smallBanner: {
    width: deviceWidth - 30,
    borderRadius: 10,
    height: '100%',
  },
  smallBannerText: {
    color: 'white',
    padding: 20,
    backgroundColor: 'rgba(255,255,255, 0)',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'right',
    width: '100%',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
  batikContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderRadius: 10,
  },
});
export default Credit;
