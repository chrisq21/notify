import React from 'react';
import {Modal} from 'react-native';
import {formatTime} from '../../../utils/formatTime';
import {
  Container,
  ContentContainer,
  ContentInnerContainer,
  DescriptionText,
  Title,
  NotificationTime,
  DescriptionImage,
} from './style';

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
              source={require('../../../assets/images/joker.png')}
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
