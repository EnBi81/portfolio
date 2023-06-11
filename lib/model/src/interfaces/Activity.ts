import { ActivityPoint } from './ActivityPoint';
import { PortfolioColor } from './PortfolioColor';

export interface Activity {
  color: PortfolioColor;
  start: ActivityPoint;
  mid?: ActivityPoint[] | undefined;
  end?: ActivityPoint | undefined;
}
