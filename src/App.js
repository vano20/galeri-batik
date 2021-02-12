/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React, {onPress} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './screen/Home';
import ItemList from './screen/ItemList';
import ProvinceList from './screen/ProvinceList';
import Detail from './screen/Detail';
import Viewer from './screen/Viewer';

const Stack = createStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#1F85DE',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Provinces"
            component={ProvinceList}
            options={{
              title: 'Provinsi',
            }}
          />
          <Stack.Screen name="List" component={ItemList} />
          <Stack.Screen name="Detail" component={Detail} />
          <Stack.Screen name="Viewer" component={Viewer} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
