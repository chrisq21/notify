import React from 'react';
import {formatTime} from '../../../utils/formatTime';

import {
  NotificationContainer,
  NotificationButton,
  NotificationInnerContainer,
  NotificationTime,
  NotificationTitle,
  NotificationArrow,
  NotificationMarker,
  DescriptionContainer,
} from './style';

const Notification = ({top, notificationData, handleNotificationPress}) => {
  return (
    <NotificationContainer style={{top}}>
      <NotificationButton
        onPress={() => handleNotificationPress(notificationData)}>
        <NotificationInnerContainer>
          <DescriptionContainer>
            <NotificationTitle>{notificationData.title}</NotificationTitle>
            <NotificationTime>
              {formatTime(notificationData.fireTime)}
            </NotificationTime>
          </DescriptionContainer>
          <NotificationArrow
            source={require('../../../assets/images/down.png')}
          />
        </NotificationInnerContainer>
      </NotificationButton>
      <NotificationMarker />
    </NotificationContainer>
  );
};

export default Notification;
