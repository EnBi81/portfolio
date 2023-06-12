import timelineStyles from './TimeLinePanel.module.css';
import { Activity, ActivityPoint, ActivityType, PortfolioColor } from '@portfolio/lib/model';
import { useMemo } from 'react';
import { TimeLineColumn } from './TimeLineColumn';
import { useMemoTimeLineColumnsConverter } from './useMemoTimeLineColumnsConverter';

export interface TimeLinePanelProps {
  columns: TimeLineColumn[];
}

export function TimeLinePanel({ columns }: TimeLinePanelProps) {
  const allActivityPoints = useMemoTimeLineColumnsConverter(columns);

  console.log('First: ' + allActivityPoints[0].activityPoint.dayjs.toString());
  console.log('Last: ' + allActivityPoints[allActivityPoints.length - 1].activityPoint.dayjs.toString());

  return (
    <div className={timelineStyles['timeline-panel']}>
      <div className={timelineStyles['timeline-panel-grid']}>
        {/*  activityPoint={{ name: 'hello', dayjs: dayjs() }}
          tracks={[{ color: '#f000', trackId: '1', type: 'singlePoint' }]}
        />*/}
      </div>
    </div>
  );
}

type TimeLineTrackType = 'continuous' | 'startPoint' | 'midPoint' | 'endPoint' | 'singlePoint' | 'empty';

interface TimeLineTrack {
  color: PortfolioColor;
  trackId: string;
  type: TimeLineTrackType;
}

interface GridRowProps {
  activityPoint: ActivityPoint;
  tracks: TimeLineTrack[];
}

function GridRow({ activityPoint, tracks }: GridRowProps) {
  return (
    <div className={timelineStyles['grid-row']}>
      <div>{activityPoint.name}</div>
      <SinglePointTrackType />
    </div>
  );
}

function SinglePointTrackType() {
  return <div className={timelineStyles['single-point-track']}></div>;
}
