import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";

import { HomeScreen } from "./screens/HomeScreen";
import { WebViewExternalScreen } from "./screens/WebViewExternalScreen";
import { WebViewInternalScreen } from "./screens/WebViewInternalScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" options={{ title: 'RN Playground' }} component={HomeScreen} />
            <Stack.Screen name="WebViewPWA" component={WebViewExternalScreen} />
            <Stack.Screen
              name="WebViewInternal"
              component={WebViewInternalScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
}
