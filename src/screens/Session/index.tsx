import React, {useEffect, useState, useRef, useContext} from 'react';

import PushNotificationIOS from '@react-native-community/push-notification-ios';
import ScreenWrapper from '../../components/shared/ScreenWrapper';
import Track from '../../components/sessionTrack';
import {SessionContext} from '../../../App';

import styled from '@emotion/native';

const Container = styled.View`
  height: 100%;
  padding: 10px 20px;
`;

const ToggleButtonWrapper = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ToggleButton = styled.Image`
  height: 100px;
  width: 100px;
`;

const Session = ({route, navigation}) => {
  const timer = useRef(null);
  const movie = route.params;
  const [elapsedTime, setElapsedTime] = useState(0);
  const {session, deleteSession, createSession} = useContext(SessionContext);

  const [isActive, setIsActive] = useState(false);

  const startTimer = (startDate: number) => {
    setIsActive(true);
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
    setIsActive(false);
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
      <Container>
        <Track
          endTime={movie?.endTime}
          notifications={movie?.notifications}
          elapsedTime={elapsedTime}
          isSessionActive={!!session}
        />
        <ToggleButtonWrapper onPress={isActive ? stopSession : startSession}>
          <ToggleButton
            source={
              isActive
                ? require('../../assets/images/pause.png')
                : require('../../assets/images/play.png')
            }
          />
        </ToggleButtonWrapper>
      </Container>
    </ScreenWrapper>
  );
};

export default Session;
