import React, {useEffect, useState, useRef, useContext} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  FlatList,
  Button,
} from 'react-native';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import ScreenWrapper from '../../components/shared/ScreenWrapper';
import {SessionContext} from '../../../App';

const formatTime = (milliseconds) => {
  const seconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  return `${hours}:${minutes}:${seconds % 60}`;
};

const Row = ({item}) => {
  const notification = item;
  return (
    <View>
      <ScrollView style={styles.container}>
        <View style={styles.separator} />
        <View style={styles.linkContainer}>
          <Text style={styles.link}>{notification.title}</Text>
          <Text style={styles.link}>{notification.startTime / 1000}s</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const Session = ({route, navigation}) => {
  const timer = useRef(null);
  const movie = route.params;
  const [elapsedTime, setElapsedTime] = useState(0);
  const {session, stopSession, startSession} = useContext(SessionContext);

  const startTimer = (startTime: number) => {
    timer.current = setInterval(() => {
      setElapsedTime(Date.now() - startTime);
    }, 500);
  };

  const scheduleNotifications = () => {
    movie?.notifications.forEach(({title, description, startTime}) => {
      const notificationRequest = {
        id: `${title}-${startTime}`, // change to unique id
        title,
        body: description,
        fireDate: Date.now() + startTime,
      };
      PushNotificationIOS.addNotificationRequest(notificationRequest);
      console.log('Schedule notification for: ', startTime / 1000);
    });
  };

  const cancelTimer = () => {
    if (timer.current) {
      clearInterval(timer.current);
      timer.current = null;
    }
  };

  const cancelNotifications = () => {
    PushNotificationIOS.removeAllPendingNotificationRequests();
  };

  const handleStartButtonPress = async () => {
    // TODO move to it's own function
    // Clear notifications and existing session if it exists
    if (session) {
      cancelNotifications();
      stopSession();
    }

    const now = Date.now();
    startTimer(now);
    scheduleNotifications();

    startSession({
      startTime: now,
      movie,
    });
  };

  // TODO maybe this should be pause / play?
  const handleStopButtonPress = async () => {
    cancelTimer();
    setElapsedTime(0);
    cancelNotifications();

    stopSession();
  };

  useEffect(() => {
    const setup = async () => {
      // TODO match session's movieID against movie id instead of title
      if (session?.movie?.id === movie.title) {
        startTimer(session.startTime);
      }
    };
    setup();

    return cancelTimer;
  }, []);

  return (
    <ScreenWrapper navigation={navigation}>
      <Text>Session screen</Text>
      <Text>Time: {formatTime(elapsedTime)}</Text>
      <FlatList
        data={movie.notifications}
        renderItem={Row}
        keyExtractor={(item) => `${item.startTime}`}
      />
      <Button title={'Start'} onPress={handleStartButtonPress} />
      <Button title={'Stop'} onPress={handleStopButtonPress} />
    </ScreenWrapper>
  );
};

export default Session;

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
    marginTop: 32,
    paddingHorizontal: 24,
  },
  linkContainer: {
    flexWrap: 'wrap',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  link: {
    flex: 2,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.primary,
  },
  description: {
    flex: 3,
    paddingVertical: 16,
    fontWeight: '400',
    fontSize: 18,
    color: Colors.dark,
  },
  separator: {
    backgroundColor: Colors.light,
    height: 1,
  },
});
