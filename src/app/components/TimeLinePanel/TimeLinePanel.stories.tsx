import { TimeLinePanel } from './TimeLinePanel';
import dayjs from 'dayjs';
import { SkillSet } from '@portfolio/lib/model';

function TimeLinePanelStory() {
  return (
    <TimeLinePanel
      columns={[
        {
          name: 'Education',
          data: [
            {
              color: `#aaaaaa`,
              type: 'continuous',
              activityPoints: [
                {
                  name: 'Starting Bachelor',
                  dayjs: dayjs('2021.08.31'),
                  skills: [SkillSet.css],
                },
                { name: 'Expected End Bachelor', dayjs: dayjs('2025.01.31') },
              ],
            },
          ],
        },
      ]}
    />
  );
}

const meta = {
  component: TimeLinePanelStory,
  argTypes: {},
};

export default meta;

export const Primary = {
  args: {},
};
