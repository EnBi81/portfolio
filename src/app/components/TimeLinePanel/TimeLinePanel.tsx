import timelineStyles from './TimeLinePanel.module.css';
import { ActivityPoint, PortfolioColor } from '@portfolio/lib/model';
import { TimeLineColumn } from './TimeLineColumn';
import { useMemoTimeLineColumnsConverter } from './useMemoTimeLineColumnsConverter';
import { Dayjs } from 'dayjs';
import React from 'react';
import { TimeLineTrack, TimeLineTrackType } from './TimeLineTracks';

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
      <div
        className={timelineStyles['timeline-panel-grid']}
        style={{ gridTemplateColumns: `max-content auto repeat(${columns.length}, 60px)` }}
      >
        {yearRange(firstDate, lastDate).map((year) => (
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
      <div>{activityPoint.name}</div>
      {tracks.map((track) => (
        <TimeLineTrack type={track.type} />
      ))}
    </div>
  );
}

function YearDisplayRow({ year, lineCount, rowCount }: { year: string; lineCount: number; rowCount: number }) {
  return (
    <div className={timelineStyles['grid-row']}>
      <div style={{ gridRow: 'span ' + lineCount }}>{year}</div>
      <div style={{ gridColumnStart: 2, gridColumnEnd: rowCount, color: 'transparent', userSelect: 'none' }}>a</div>
    </div>
  );
}
