import timelineStyles from './TimeLinePanel.module.css';
import { ActivityPoint, PortfolioColor } from '@portfolio/lib/model';
import dayjs from 'dayjs';

export function TimeLinePanel() {
  return (
    <div className={timelineStyles['timeline-panel']}>
      <div className={timelineStyles['timeline-panel-grid']}>
        <GridRow
          activityPoint={{ name: 'hello', dayjs: dayjs() }}
          tracks={[{ color: '#f000', trackId: '1', type: 'singlePoint' }]}
        />
      </div>
    </div>
  );
}

type TimeLineTrackType =
  | 'continuous'
  | 'midPoint'
  | 'startPoint'
  | 'endPoint'
  | 'singlePoint'
  | 'empty';

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
