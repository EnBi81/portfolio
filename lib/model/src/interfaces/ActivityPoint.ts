import { Dayjs } from 'dayjs';
import { Skill } from './Skill';

export interface ActivityPoint {
  name: string;
  dayjs: Dayjs;
  url?: string | undefined;
  description?: string | undefined;
  skills?: Skill[] | undefined;
}
