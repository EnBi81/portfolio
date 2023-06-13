import timelineStyles from './TimeLineTracks.module.css';
import React from 'react';

export type TimeLineTrackType = 'continuous' | 'startPoint' | 'midPoint' | 'endPoint' | 'singlePoint' | 'empty';

export function TimeLineTrack({ type }: { type: TimeLineTrackType }) {
  return (
    <>
      <div className={'hidden sm:block'}>
        <TimeLineTrackInner type={type} />
      </div>
      <div className={'sm:hidden'}></div>
    </>
  );
}

function TimeLineTrackInner({ type }: { type: TimeLineTrackType }) {
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
