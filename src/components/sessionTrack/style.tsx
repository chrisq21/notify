import {Animated} from 'react-native';
import styled from '@emotion/native';

export const Container = styled.View`
  flex: 1;
  height: 500px;
`;

export const TrackLine = styled(Animated.View)`
  height: 2px;
  background-color: #4a4157;
  z-index: 2;
`;

export const TrackMarkerSmall = styled.View`
  position: absolute;
  top: -5px;
  right: -5px;
  width: 10px;
  height: 10px;
  background-color: white;
  border-radius: 1000px;
`;

export const TrackMarkerMedium = styled.View`
  position: absolute;
  top: -13px;
  right: -13px;
  width: 26px;
  height: 26px;
  background-color: rgb(150, 60, 187);
  border-radius: 1000px;
`;

export const TrackMarkerLarge = styled.View`
  position: absolute;
  top: -17px;
  right: -17px;
  width: 34px;
  height: 34px;
  background-color: rgba(123, 49, 153, 0.4);
  border-radius: 1000px;
`;

export const VerticalTrackContainer = styled.View`
  position: absolute;
  right: -3px;
  top: 0;
  height: 100%;
  width: 6px;
  background-color: #4a4157;
  border-radius: 10px;
`;
