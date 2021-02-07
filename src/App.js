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

import {Button, View, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';

const Stack = createStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#f4511e',
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
              title: 'Home',
              headerRight: () => (
                <Button
                  onPress={() => alert('This is a button!')}
                  title="Info"
                  color="#fff"
                />
              ),
            }}
          />
          <Stack.Screen
            name="Provinces"
            component={ProvinceList}
            options={{
              title: 'Province',
              headerRight: () => (
                <View style={styles.headerRightStyle}>
                  <Icon
                    type="MaterialIcons"
                    name={'search'}
                    color="#fff"
                    onPress={() => alert('This is a button!')}
                  />
                </View>
              ),
            }}
          />
          <Stack.Screen
            name="List"
            component={ItemList}
            options={{title: 'Gallery'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  headerRightStyle: {
    padding: 10,
  },
});

export default App;
