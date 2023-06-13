import { Dayjs } from 'dayjs';
import { Skill } from './Skill';

export interface ActivityPoint {
  name: string;
  dayjs: Dayjs;
  description?: string | undefined;
  skills?: Skill[] | undefined;
}
