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
import {formatTime} from './helpers';

const Row = ({item}) => {
  const notification = item;
  return (
    <View>
      <ScrollView style={styles.container}>
        <View style={styles.separator} />
        <View style={styles.linkContainer}>
          <Text style={styles.link}>{notification.title}</Text>
          <Text style={styles.link}>{notification.fireTime / 1000}s</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const Session = ({route, navigation}) => {
  const timer = useRef(null);
  const movie = route.params;
  const [elapsedTime, setElapsedTime] = useState(0);
  const {session, deleteSession, createSession} = useContext(SessionContext);

  const startTimer = (startDate: number) => {
    timer.current = setInterval(() => {
      setElapsedTime(Date.now() - startDate);
    }, 500);
  };

  const scheduleNotifications = (now: number) => {
    movie?.notifications.forEach(({title, description, fireTime}) => {
      const fireDate = now + fireTime;
      const notificationRequest = {
        // TODO use notification id
        id: `${movie.id}-${title}-${fireTime}`,
        title,
        body: description,
        fireDate,
      };
      PushNotificationIOS.addNotificationRequest(notificationRequest);
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

  const startSession = async () => {
    /* delete old session */
    if (session) {
      cancelNotifications();
      deleteSession();
    }
    /* create new session */
    const now = Date.now();
    startTimer(now);
    scheduleNotifications(now);
    createSession({
      startDate: now,
      movie,
    });
  };

  const stopSession = async () => {
    cancelTimer();
    cancelNotifications();
    setElapsedTime(0);
    deleteSession();
  };

  useEffect(() => {
    const setupTimer = async () => {
      if (session?.movie?.id === movie.id) {
        startTimer(session.startDate);
      }
    };
    setupTimer();

    return cancelTimer;
  }, []);

  return (
    <ScreenWrapper navigation={navigation}>
      <Text>Session screen</Text>
      <Text>Time: {formatTime(elapsedTime)}</Text>
      <FlatList
        data={movie.notifications}
        renderItem={Row}
        keyExtractor={(item) => `${item.fireTime}`}
      />
      <Button title={'Start'} onPress={startSession} />
      <Button title={'Stop'} onPress={stopSession} />
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
