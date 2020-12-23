import React, {useEffect, useRef, useState} from 'react';
import {View, Text, Animated, Easing, Modal} from 'react-native';
import styled from '@emotion/native';
import {formatTime} from '../../lib/helpers/formatTime';
const Container = styled.View`
  flex: 1;
`;

const NotificationContainer = styled.TouchableHighlight`
  position: absolute;
  width: 100%;
  padding: 10px 18px;
  background: rgba(67, 59, 70, 0.8);

  shadow-color: black;
  shadow-offset: 0px 0px;
  shadow-opacity: 0.6;
  shadow-radius: 5px;

  border-radius: 8px;
`;

const NotificationTitle = styled.Text`
  color: white;
  font-weight: bold;
`;

const NotificationTime = styled.Text`
  color: rgb(152, 142, 150);
  font-weight: bold;
`;

const TrackLine = styled(Animated.View)`
  height: 2px;
  background: #4a4157;
  z-index: 2;
`;

const ModalCenteredView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const ModalContentView = styled.TouchableHighlight`
  background-color: white;
  border: 1px solid black;
  border-radius: 10px;
  padding: 30px;
`;

const Track = ({elapsedTime, endTime, notifications, isSessionActive}) => {
  const [containerHeight, setContainerHeight] = useState(0);
  const [notificationModalData, setNotificationModalData] = useState(null);
  const trackPosition = (containerHeight * elapsedTime) / endTime;

  const handleNotificationPress = (notification) => {
    console.log('notification: ', notification);
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
      <TrackLine
        style={{
          transform: [{translateY: trackPosition}],
        }}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={!!notificationModalData}>
        <ModalCenteredView>
          <ModalContentView onPress={closeModal}>
            <Text>{notificationModalData?.description}</Text>
          </ModalContentView>
        </ModalCenteredView>
      </Modal>
      {notifications &&
        notifications.map((notification) => {
          const top = `${Math.floor((notification.fireTime / endTime) * 100)}%`;
          return (
            <NotificationContainer
              style={{top}}
              key={notification.fireTime}
              onPress={() => handleNotificationPress(notification)}>
              <View>
                <NotificationTitle>{notification.title}</NotificationTitle>
                <NotificationTime>
                  {formatTime(notification.fireTime)}
                </NotificationTime>
              </View>
            </NotificationContainer>
          );
        })}
    </Container>
  );
};

export default Track;
