import React, {useLayoutEffect} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import Gallery from 'react-native-image-gallery';

export default ({route, navigation}) => {
  const {images} = route.params;
  useLayoutEffect(() => {
    navigation.setOptions({
      title: '',
      headerStyle: {
        backgroundColor: '#000',
      },
      headerBackImage: () => {
        return <Icon type="MaterialIcons" name={'clear'} color="#fff" />;
      },
    });
  }, [navigation]);
  return (
    <Gallery style={{flex: 1, backgroundColor: 'black'}} images={images} />
  );
};
