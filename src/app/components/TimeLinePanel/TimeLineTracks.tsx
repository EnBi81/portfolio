import timelineStyles from './TimeLinePanel.module.css';
import React from 'react';

export type TimeLineTrackType = 'continuous' | 'startPoint' | 'midPoint' | 'endPoint' | 'singlePoint' | 'empty';

export function TimeLineTrack({ type }: { type: TimeLineTrackType }) {
  switch (type) {
    case 'singlePoint':
      return <SinglePointTrackType />;
    case 'empty':
      return <EmptyTrack />;

    default:
      return <div></div>;
  }
}

function SinglePointTrackType() {
  return <div className={timelineStyles['single-point-track']}></div>;
}

function EmptyTrack() {
  return <div></div>;
}
