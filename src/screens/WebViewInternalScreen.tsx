import * as React from 'react';
import { WebView } from 'react-native-webview';

export const WebViewInternalScreen = ({ navigation }) => {
  return (
    <WebView source={{ uri: 'file:///android_asset/build/index.html' }} />
  );
}