import React, {useState} from 'react';

import Notification from './notification';
import NotificationModal from './notificationModal';
import StatusMarker from './statusMarker';
import {
  Container,
  VerticalBar,
  IntervalMarker,
  IntervalMarkerText,
} from './style';
import {Text} from 'react-native';

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

  const intervalMarkerTime = 900000; // 15 min
  const numIntervalMarkers = Math.floor(endTime / intervalMarkerTime);

  return (
    <Container
      onLayout={(event) => {
        setContainerHeight(event.nativeEvent.layout.height);
      }}>
      <VerticalBar />
      <StatusMarker trackPosition={trackPosition} />
      <NotificationModal
        notificationModalData={notificationModalData}
        closeModal={closeModal}
      />
      {Array(numIntervalMarkers)
        .fill(1)
        .map((_, index) => {
          const top = `${Math.floor(
            ((intervalMarkerTime * index + 1) / endTime) * 100,
          )}%`;
          const mins = Math.floor((intervalMarkerTime * index + 1) / 1000 / 60);
          if (mins === 0) return;
          return (
            <IntervalMarker style={{top}}>
              <IntervalMarkerText>{mins}min</IntervalMarkerText>
            </IntervalMarker>
          );
        })}

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
