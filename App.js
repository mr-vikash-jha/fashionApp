import React from 'react';
import {StyleSheet, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Details from './src/screens/Details';
import HomeScreen from './src/screens/HomeScreen';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        // options={{header: false}}
        name="Home"
        component={HomeScreen}
      />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  bredcrum: {
    marginLeft: 15,
    marginBottom: 15,
  },
  image: {
    width: '100%',
    height: 532,
  },
});
