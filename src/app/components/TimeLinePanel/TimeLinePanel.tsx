import timelineStyles from './TimeLinePanel.module.css';
import { ActivityPoint, PortfolioColor } from '@portfolio/lib/model';
import { TimeLineColumn } from './TimeLineColumn';
import { useMemoTimeLineColumnsConverter } from './useMemoTimeLineColumnsConverter';
import { Dayjs } from 'dayjs';
import React, { CSSProperties } from 'react';
import { TimeLineTrack, TimeLineTrackType } from './TimeLineTracks/TimeLineTracks';
import { ActivityPointBox } from './ActivityBox/ActivityBox';

export interface TimeLinePanelProps {
  columns: TimeLineColumn[];
}

function yearRangeDesc(from: Dayjs, to: Dayjs) {
  const arr: string[] = [];

  while (from.isAfter(to)) {
    arr.push(from.year().toString());
    from = from.subtract(1, 'year');
  }
  arr.push(from.year().toString());

  return arr;
}

export function TimeLinePanel({ columns }: TimeLinePanelProps) {
  const { allActivityPoints, groupedByDate } = useMemoTimeLineColumnsConverter(columns);

  const firstDate = allActivityPoints[0].activityPoint.dayjs;
  const lastDate = allActivityPoints[allActivityPoints.length - 1].activityPoint.dayjs;

  return (
    <div className={timelineStyles['timeline-panel']}>
      <div
        className={timelineStyles['timeline-panel-grid']}
        style={{ '--time-panel-columns': columns.length } as CSSProperties}
      >
        {yearRangeDesc(firstDate, lastDate).map((year) => (
          <>
            <YearDisplayRow year={year} lineCount={groupedByDate[year]?.length + 1} rowCount={3 + columns.length} />
            {groupedByDate[year]?.map((activityPoint) => (
              <GridRow
                activityPoint={activityPoint.activityPoint}
                tracks={[{ type: 'singlePoint', color: '#ff0000' }]}
              />
            ))}
          </>
        ))}
      </div>
    </div>
  );
}

interface TimeLineTrackData {
  color: PortfolioColor;
  type: TimeLineTrackType;
}

interface GridRowProps {
  activityPoint: ActivityPoint;
  tracks: TimeLineTrackData[];
}

function GridRow({ activityPoint, tracks }: GridRowProps) {
  return (
    <div className={timelineStyles['grid-row']}>
      <ActivityPointBox activityPoint={activityPoint} color={'#ffffff'} />
      {tracks.map((track) => (
        <TimeLineTrack type={track.type} />
      ))}
    </div>
  );
}

function YearDisplayRow({ year, lineCount, rowCount }: { year: string; lineCount: number; rowCount: number }) {
  return (
    <div className={timelineStyles['grid-row']}>
      <div style={{ gridRow: 'span ' + lineCount }} className={timelineStyles['year-text']}>
        {year}
      </div>
      <div style={{ gridColumnStart: 2, gridColumnEnd: rowCount }} className={timelineStyles['year-line-holder']}>
        a
      </div>
    </div>
  );
}
