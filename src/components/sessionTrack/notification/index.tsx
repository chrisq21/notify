import React from 'react';
import styled from '@emotion/native';
import {formatTime} from '../../../utils/formatTime';

const NotificationContainer = styled.View`
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const NotificationButton = styled.TouchableHighlight`
  width: 95%;
  padding: 10px 18px;
  background: rgba(67, 59, 70, 0.8);
  shadow-color: black;
  shadow-offset: 0px 0px;
  shadow-opacity: 0.6;
  shadow-radius: 5px;
  border-radius: 8px;
`;

const NotificationInnerContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const NotificationMarker = styled.View`
  width: 14px;
  height: 14px;
  background: #c0bec4;
  border-radius: 100px;
  margin-right: -7px;
`;

const DescriptionContainer = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const NotificationTitle = styled.Text`
  color: white;
  margin-bottom: 5px;
`;

const NotificationTime = styled.Text`
  color: rgb(152, 142, 150);
`;

const NotificationArrow = styled.Image`
  width: 32px;
  height: 32px;
`;

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
