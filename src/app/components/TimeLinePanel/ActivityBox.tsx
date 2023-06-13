import { ActivityPoint, PortfolioColor } from '@portfolio/lib/model';
import activityBoxStyles from './ActivityBox.module.css';
import React, { CSSProperties } from 'react';

export function ActivityPointBox({ activityPoint, color }: { activityPoint: ActivityPoint; color: PortfolioColor }) {
  return (
    <div className={activityBoxStyles['box']} style={{ '--activity-box-bg-color': color } as CSSProperties}>
      <div className={activityBoxStyles['box-inside']}>
        <div className={activityBoxStyles['top']}>
          <div className={activityBoxStyles['title']}>{activityPoint.name}</div>
          <div>
            <span className={activityBoxStyles['date']}>{activityPoint.dayjs.format('YYYY.MM.DD')}</span>
            {activityPoint.location && <span> | {activityPoint.location}</span>}
          </div>
        </div>
        <div>
          <div>{activityPoint.description}</div>
        </div>
      </div>
    </div>
  );
}
