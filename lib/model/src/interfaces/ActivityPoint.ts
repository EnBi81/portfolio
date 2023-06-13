import { Dayjs } from 'dayjs';
import { Skill } from './Skill';
import { ReactNode } from 'react';

export interface ActivityPoint {
  name: string;
  dayjs: Dayjs;
  location?: string | undefined;
  description?: ReactNode | string | undefined;
  skills?: Skill[] | undefined;
}
