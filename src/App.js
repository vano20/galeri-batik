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
import Detail from './screen/Detail';
import Viewer from './screen/Viewer';
import GameOne from './screen/GameOne';
import GameTwo from './screen/GameTwo';
import GameList from './screen/GameList';
import Credit from './screen/Credit';

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
          <Stack.Screen name="List" component={ItemList} />
          <Stack.Screen name="Detail" component={Detail} />
          <Stack.Screen name="Viewer" component={Viewer} />
          <Stack.Screen name="Permainan 1" component={GameOne} />
          <Stack.Screen name="Permainan 2" component={GameTwo} />
          <Stack.Screen name="Permainan" component={GameList} />
          <Stack.Screen name="Terima kasih!" component={Credit} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
