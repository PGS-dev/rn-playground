import * as React from 'react';
import { Button, View, Text } from 'react-native';

export const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to WebView (external)"
        onPress={() => navigation.navigate('WebViewPWA')}
      />
      <Button
        title="Go to WebView (internal assets)"
        onPress={() => navigation.navigate('WebViewInternal')}
      />
    </View>
  );
}