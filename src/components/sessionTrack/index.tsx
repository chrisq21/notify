import React, {useState} from 'react';

import Notification from './notification';
import NotificationModal from './notificationModal';
import StatusMarker from './statusMarker';
import {Container, VerticalBar} from './style';

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
        setContainerHeight(event.nativeEvent.layout.height);
      }}>
      <VerticalBar />
      <StatusMarker trackPosition={trackPosition} />
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
