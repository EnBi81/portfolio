import timelineStyles from './TimeLinePanel.module.css';
import { ActivityPoint, PortfolioColor } from '@portfolio/lib/model';
import { TimeLineColumn } from './TimeLineColumn';
import { useMemoTimeLineColumnsConverter } from './useMemoTimeLineColumnsConverter';
import { Dayjs } from 'dayjs';
import React from 'react';

export interface TimeLinePanelProps {
  columns: TimeLineColumn[];
}

function yearRange(from: Dayjs, to: Dayjs) {
  const arr: string[] = [];

  while (from.isBefore(to)) {
    arr.push(from.year().toString());
    from = from.add(1, 'year');
  }
  arr.push(from.year().toString());

  return arr;
}

export function TimeLinePanel({ columns }: TimeLinePanelProps) {
  const { allActivityPoints, groupedByDate } = useMemoTimeLineColumnsConverter(columns);

  console.log(groupedByDate);
  const firstDate = allActivityPoints[0].activityPoint.dayjs;
  const lastDate = allActivityPoints[allActivityPoints.length - 1].activityPoint.dayjs;

  return (
    <div className={timelineStyles['timeline-panel']}>
      <div className={timelineStyles['timeline-panel-grid']}>
        {yearRange(firstDate, lastDate).map((year) => (
          <>
            <YearDisplayRow year={year} lineCount={1} />
            {groupedByDate[year]?.map((activityPoint) => (
              <GridRow activityPoint={activityPoint.activityPoint} tracks={[]} />
            ))}
          </>
        ))}
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

function YearDisplayRow({ year, lineCount }: { year: string; lineCount: number }) {
  return (
    <div className={timelineStyles['grid-row']}>
      <div
        className={timelineStyles['year-line-height-box']}
        style={{ '--year-line-height': lineCount } as React.CSSProperties}
      >
        {year}
      </div>
      <div className={timelineStyles['grid-full-row']}></div>
    </div>
  );
}
