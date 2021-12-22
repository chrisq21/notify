import React from 'react';

import {
  TrackLine,
  TrackMarkerMedium,
  TrackMarkerLarge,
  TrackMarkerSmall,
} from './style';

const StatusMarker = ({trackPosition}) => {
  const opacityValue = Math.abs(
    Math.abs(1 - trackPosition / 1) - Math.floor(trackPosition),
  );
  console.log(opacityValue);
  return (
    <TrackLine
      style={{
        transform: [{translateY: trackPosition}],
      }}>
      <TrackMarkerMedium />
      <TrackMarkerLarge
        style={{
          opacity: opacityValue,
        }}
      />
      <TrackMarkerSmall />
    </TrackLine>
  );
};

export default StatusMarker;
