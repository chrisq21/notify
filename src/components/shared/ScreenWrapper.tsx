import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

const ScreenWrapper = ({children}) => (
  <>
    <StatusBar barStyle="dark-content" />
    <SafeAreaView>{children}</SafeAreaView>
  </>
);

export default ScreenWrapper;
