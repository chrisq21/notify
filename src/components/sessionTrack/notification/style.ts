import styled from '@emotion/native';

export const NotificationContainer = styled.View`
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const NotificationButton = styled.TouchableHighlight`
  width: 84%;
  padding: 10px 18px;
  background: rgba(67, 59, 70, 0.8);
  shadow-color: black;
  shadow-offset: 0px 0px;
  shadow-opacity: 0.6;
  shadow-radius: 5px;
  border-radius: 8px;
`;

export const NotificationInnerContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const NotificationMarker = styled.View`
  width: 14px;
  height: 14px;
  background: #c0bec4;
  border-radius: 100px;
  margin-right: -7px;
`;

export const DescriptionContainer = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const NotificationTitle = styled.Text`
  color: white;
  margin-bottom: 5px;
`;

export const NotificationTime = styled.Text`
  color: rgb(152, 142, 150);
`;

export const NotificationArrow = styled.Image`
  width: 32px;
  height: 32px;
`;
