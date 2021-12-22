import React, {useState} from 'react';
import {Animated, ScrollView} from 'react-native';
import styled from '@emotion/native';
import Notification from './notification';
import NotificationModal from './notificationModal';

const Container = styled.View`
  flex: 1;
  height: 500px;
`;

const TrackLine = styled(Animated.View)`
  height: 2px;
  background-color: #4a4157;
  z-index: 2;
`;

const TrackMarkerSmall = styled.View`
  position: absolute;
  top: -5px;
  right: -5px;
  width: 10px;
  height: 10px;
  background-color: white;
  border-radius: 1000px;
`;

const TrackMarkerMedium = styled.View`
  position: absolute;
  top: -13px;
  right: -13px;
  width: 26px;
  height: 26px;
  background-color: rgb(150, 60, 187);
  border-radius: 1000px;
`;

const TrackMarkerLarge = styled.View`
  position: absolute;
  top: -17px;
  right: -17px;
  width: 34px;
  height: 34px;
  background-color: rgba(123, 49, 153, 0.4);
  border-radius: 1000px;
`;

const VerticalTrackContainer = styled.View`
  position: absolute;
  right: -3px;
  top: 0;
  height: 100%;
  width: 6px;
  background-color: #4a4157;
  border-radius: 10px;
`;

const Track = ({elapsedTime, endTime, notifications}) => {
  const [containerHeight, setContainerHeight] = useState(0);
  const [notificationModalData, setNotificationModalData] = useState(null);
  const trackPosition = (containerHeight * elapsedTime) / endTime;

  const handleNotificationPress = (notification) => {
    setNotificationModalData(notification);
  };

  const closeModal = () => {
    setNotificationModalData(null);
  };

  return (
    <Container
      onLayout={(event) => {
        console.log('height', event.nativeEvent.layout.height * 3);

        setContainerHeight(event.nativeEvent.layout.height);
      }}>
      <VerticalTrackContainer />
      <TrackLine
        style={{
          transform: [{translateY: trackPosition}],
        }}>
        <TrackMarkerMedium />
        <TrackMarkerLarge />
        <TrackMarkerSmall />
      </TrackLine>
      <NotificationModal
        notificationModalData={notificationModalData}
        closeModal={closeModal}
      />
      {notifications &&
        notifications.map((notificationData) => {
          const top = `${Math.floor(
            (notificationData.fireTime / endTime) * 100,
          )}%`;
          return (
            <Notification
              key={notificationData.fireTime}
              top={top}
              notificationData={notificationData}
              handleNotificationPress={handleNotificationPress}
            />
          );
        })}
    </Container>
  );
};

export default Track;
