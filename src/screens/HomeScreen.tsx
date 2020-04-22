import * as React from 'react';
import { Icon, Menu, MenuItem } from '@ui-kitten/components';

const ForwardIcon = (props) => (
    <Icon {...props} name='arrow-ios-forward'/>
  );

export const HomeScreen = ({ navigation }) => {
    return (
      <Menu>
        <MenuItem title='WebView (external)' onPress={() => navigation.navigate('WebViewPWA')} accessoryRight={ForwardIcon}/>
        <MenuItem title='WebView (internal assets)' onPress={() => navigation.navigate('WebViewInternal')} accessoryRight={ForwardIcon}/>
      </Menu>
    );
}