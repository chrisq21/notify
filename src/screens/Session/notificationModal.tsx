import React from 'react';
import {Modal, Image} from 'react-native';
import styled from '@emotion/native';
import {formatTime} from '../../lib/helpers/formatTime';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const ContentContainer = styled.Pressable`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: 'rgba(0,0,0,0.8)';
`;

const ContentInnerContainer = styled.View`
  background-color: 'rgba(60,50,64, 1)';
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  padding: 20px;
  padding-top: 50px;
  padding-bottom: 50px;
  width: 100%;
  height: 80%;
`;

const Title = styled.Text`
  color: white;
  font-size: 20px;
`;

const NotificationTime = styled.Text`
  color: rgb(152, 142, 150);
  font-size: 14px;
  margin: 5px 0;
`;

const DescriptionImage = styled.Image`
  margin-top: 10px;
  margin-bottom: 10px;
  width: 100%;
`;

const DescriptionText = styled.Text`
  color: white;
  font-size: 16px;
  margin: 10px 0;
`;

const NotificationModal = ({notificationModalData, closeModal}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={!!notificationModalData}>
      <Container>
        <ContentContainer onPress={closeModal}>
          <ContentInnerContainer>
            <Title>{notificationModalData?.title}</Title>
            <NotificationTime>
              {formatTime(notificationModalData?.fireTime)}
            </NotificationTime>
            <DescriptionText>
              {notificationModalData?.description}
            </DescriptionText>
            <DescriptionImage
              source={require('../../assets/images/joker.png')}
            />
            <DescriptionText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation Lorem ipsum dolor
            </DescriptionText>
            <DescriptionText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation Lorem ipsum dolor
            </DescriptionText>
          </ContentInnerContainer>
        </ContentContainer>
      </Container>
    </Modal>
  );
};

export default NotificationModal;
