import { TimeLineColumn } from './TimeLineColumn';
import { useMemo } from 'react';
import { Activity, ActivityPoint, ActivityType } from '@portfolio/lib/model';

export interface ConvertedColumnType {
  columnIndex: number;
  activityPoint: ActivityPoint;
  activityParent: Activity;
  type: ActivityType;
  activityPointType: 'first' | 'mid' | 'last';
}

interface YearDictionary {
  [year: string]: ConvertedColumnType[];
}

/**
 * Hook that merges all the ActivityPoints into one array, from an array of TimeLineColumn
 * @param columns
 */
export function useMemoTimeLineColumnsConverter(columns: TimeLineColumn[]) {
  const allActivityPoints = useMemo(
    () =>
      columns
        // discard the name of the column
        .map((col) => col.data)
        // collect all the activity into one list
        .reduce<{ columnIndex: number; activity: Activity }[]>(
          (arr, currentValue, currentIndex) => [
            ...arr,
            ...currentValue.map((activity) => ({
              columnIndex: currentIndex,
              activity: activity,
            })),
          ],
          []
        )
        // collect all the activity points into one list
        .reduce<ConvertedColumnType[]>(
          (arr, currentValue) => [
            ...arr,
            ...currentValue.activity.activityPoints.map((activityPoint) => {
              const activityPointIndex = currentValue.activity.activityPoints.indexOf(activityPoint);
              return {
                columnIndex: currentValue.columnIndex,
                activityPoint: activityPoint,
                activityParent: currentValue.activity,
                type: currentValue.activity.type,
                activityPointType:
                  activityPointIndex === currentValue.activity.activityPoints.length - 1
                    ? 'last'
                    : activityPointIndex === 0
                    ? 'first'
                    : 'mid',
              };
            }),
          ],
          []
        )
        .sort((a, b) => b.activityPoint.dayjs.unix() - a.activityPoint.dayjs.unix()),
    [columns]
  );

  const groupedByDate: YearDictionary = allActivityPoints.reduce((grouped, currentValue) => {
    const year = currentValue.activityPoint.dayjs.year() + '';

    if (grouped[year] === undefined) {
      grouped[year] = [];
    }

    grouped[year].push(currentValue);

    return grouped;
  }, {});

  return {
    allActivityPoints,
    groupedByDate,
  };
}
