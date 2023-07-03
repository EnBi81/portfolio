import { ActivityPoint } from './ActivityPoint';
import { PortfolioColor } from './PortfolioColor';

export type ActivityType = 'oneTime' | 'continuous';

export interface Activity {
  name: string;
  color: PortfolioColor;
  type: ActivityType;
  activityPoints: ActivityPoint[];
}
