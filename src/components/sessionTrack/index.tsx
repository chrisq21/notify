import React, {useState} from 'react';

import Notification from './notification';
import NotificationModal from './notificationModal';

import {
  Container,
  VerticalTrackContainer,
  TrackLine,
  TrackMarkerMedium,
  TrackMarkerLarge,
  TrackMarkerSmall,
} from './style';

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
