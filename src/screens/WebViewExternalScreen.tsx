import * as React from 'react';
import { WebView } from 'react-native-webview';

export const WebViewExternalScreen = ({ navigation }) => {
  return (
    <WebView source={{ uri: 'https://tomayac.github.io/pwa-feature-detector/' }} />
  );
}