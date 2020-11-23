/**
 * @format
 */
import React from 'react';
import {View, Text, StatusBar, Button} from 'react-native';
import ScreenWrapper from '../../components/shared/ScreenWrapper';

const Home = ({navigation}) => {
  return (
    <>
      {/* <StatusBar barStyle="dark-content" /> */}
      <ScreenWrapper>
        <Text>Home</Text>
        <Button
          onPress={() => navigation.navigate('Reference')}
          title="See Reference"
          color="#841584"
          accessibilityLabel="See Reference"
        />
      </ScreenWrapper>
    </>
  );
};

export default Home;
