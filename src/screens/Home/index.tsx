/**
 * @format
 */
import React, {useContext, useEffect} from 'react';
import {
  Text,
  Button,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import ScreenWrapper from '../../components/shared/ScreenWrapper';
import data from '../../tests/mockData';
import {SessionContext} from '../../../App';

const Home = ({navigation}) => {
  const {deleteSession} = useContext(SessionContext);

  useEffect(() => {
    const requestNotificationPermissions = async () => {
      PushNotificationIOS.requestPermissions();
    };
    requestNotificationPermissions();
  }, []);

  return (
    <ScreenWrapper navigation={navigation}>
      <ScrollView style={styles.container}>
        {data.map((movie) => {
          return (
            <React.Fragment key={movie.title}>
              <View style={styles.separator} />
              <TouchableOpacity
                accessibilityRole={'button'}
                onPress={() => navigation.navigate('Session', movie)}
                style={styles.linkContainer}>
                <Text style={styles.link}>{movie.title}</Text>
              </TouchableOpacity>
            </React.Fragment>
          );
        })}
        <Button
          onPress={deleteSession}
          title="Remove Session"
          color="#841584"
          accessibilityLabel="See Reference"
        />
      </ScrollView>
    </ScreenWrapper>
  );
};

export default Home;

const Colors = {
  primary: '#1292B4',
  white: '#FFF',
  lighter: '#F3F3F3',
  light: '#DAE1E7',
  dark: '#444',
  black: '#000',
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
  },
  linkContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
  },
  link: {
    flex: 2,
    fontSize: 18,
    fontWeight: '400',
    color: 'white',
  },
});
