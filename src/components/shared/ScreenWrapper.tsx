import React from 'react';
import {View, Text, SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import SessionHeader from './SessionHeader';

const ScreenWrapper = ({children, navigation}) => (
  <>
    <StatusBar barStyle="dark-content" />
    <SessionHeader navigation={navigation} />
    <SafeAreaView style={{flex: 1, backgroundColor: 'rgb(32, 24, 40)'}}>
      {children}
    </SafeAreaView>
  </>
);

export default ScreenWrapper;
