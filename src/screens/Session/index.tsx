import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, ScrollView, FlatList} from 'react-native';
import ScreenWrapper from '../../components/shared/ScreenWrapper';

const formatTime = (milliseconds) => {
  const seconds = Math.floor(milliseconds / 1000) % 60;
  const minutes = Math.floor(seconds / 60);
  console.log(minutes);
  const hours = Math.floor(minutes / 60);
  return `${hours}:${minutes}:${seconds}`;
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

const Session = ({route}) => {
  let timer;
  const movie = route.params;
  const [elapsedTime, setElapsedTime] = useState(0);

  const startTimer = () => {
    const startTime = Date.now();
    timer = setInterval(() => {
      setElapsedTime(Date.now() - startTime);
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    // scheduleNotifications()
    return () => {
      // cleanup [clear timer and notifications ]
      clearInterval(timer);
    };
  }, []);
  return (
    <ScreenWrapper>
      <Text>Session screen</Text>
      <Text>Time: {formatTime(elapsedTime)}</Text>
      <Text>Elapsed Time: {elapsedTime}</Text>
      <FlatList
        data={movie.notifications}
        renderItem={Row}
        keyExtractor={(item) => item.startTime}
      />
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
