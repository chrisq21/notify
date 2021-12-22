import React from 'react';

import {
  TrackLine,
  TrackMarkerMedium,
  TrackMarkerLarge,
  TrackMarkerSmall,
} from './style';

const StatusMarker = ({trackPosition}) => (
  <TrackLine
    style={{
      transform: [{translateY: trackPosition}],
    }}>
    <TrackMarkerMedium />
    <TrackMarkerLarge />
    <TrackMarkerSmall />
  </TrackLine>
);

export default StatusMarker;
