import 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen } from './screens/HomeScreen';
import { WebViewExternalScreen } from './screens/WebViewExternalScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="WebViewPWA" component={WebViewExternalScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
