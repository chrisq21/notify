import styled from '@emotion/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ContentContainer = styled.Pressable`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: 'rgba(0,0,0,0.8)';
`;

export const ContentInnerContainer = styled.View`
  background-color: 'rgba(60,50,64, 1)';
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  padding: 20px;
  padding-top: 50px;
  padding-bottom: 50px;
  width: 100%;
  height: 80%;
`;

export const Title = styled.Text`
  color: white;
  font-size: 20px;
`;

export const NotificationTime = styled.Text`
  color: rgb(152, 142, 150);
  font-size: 14px;
  margin: 5px 0;
`;

export const DescriptionImage = styled.Image`
  margin-top: 10px;
  margin-bottom: 10px;
  width: 100%;
`;

export const DescriptionText = styled.Text`
  color: white;
  font-size: 16px;
  margin: 10px 0;
`;
