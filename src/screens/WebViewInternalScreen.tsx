import * as React from "react";
import { PermissionsAndroid, Linking, Alert } from "react-native";
import { WebView } from "react-native-webview";

let enteronce = false;

const requestCameraAndGalleryPermission = async () => {
  try {
    var permission = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.CAMERA &&
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE
    );
    console.log("camera && gallery permission granted:- ", permission);
    if (!permission) {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA &&
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("Camera && Gallery permissions granted");
      } else {
        console.log("Camera && Gallery permission denied");
      }
    }
  } catch (err) {
    console.warn(err);
  }
};

export const WebViewInternalScreen = ({ navigation }) => {
  const onMessage = async (event) => {
    const parsed = JSON.parse(event.nativeEvent.data);

    if (parsed.method === "openLink") {
      const supported = await Linking.canOpenURL(parsed.url);

      if (supported) {
        // Opening the link with some app, if the URL scheme is "http" the web link should be opened
        // by some browser in the mobile
        await Linking.openURL(parsed.url);
      } else {
        Alert.alert(`Don't know how to open this URL: ${parsed.url}`);
      }
    }
  };

  const handleWebViewNavigationStateChange = (webView) => {
    if (
      enteronce == false &&
      (webView.url.includes("file-upload") || webView.url.includes("camera"))
    ) {
      enteronce = true;
      // enteronce is to enter inside the code and ask permissions only once or else the page will continue to ask permission

      requestCameraAndGalleryPermission();
    } else {
      enteronce = false;
    }
  };

  return (
    <WebView
      source={{ uri: "file:///android_asset/build/index.html" }}
      onNavigationStateChange={handleWebViewNavigationStateChange}
      onMessage={onMessage}
    />
  );
};
