import { ActivityPoint } from '@portfolio/lib/model';
import activityBoxStyles from './ActivityBox.module.css';
// eslint-disable-next-line @nx/enforce-module-boundaries
import ReactMarkdown from 'react-markdown';
import React from 'react';

export function ActivityPointBox({ activityPoint }: { activityPoint: ActivityPoint }) {
  return (
    <div className={activityBoxStyles['box']}>
      <div className={activityBoxStyles['box-inside']}>
        <div className={activityBoxStyles['top']}>
          <div className={activityBoxStyles['title']}>{activityPoint.name}</div>
          <div className={activityBoxStyles['date']}>{activityPoint.dayjs.format('YYYY-MM-DD')}</div>
        </div>
        <div>
          <ReactMarkdown children={activityPoint.description ?? ''}></ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
