import dayjs from 'dayjs';
import { PortfolioPersonData } from '../interfaces/PortfolioPersonData';
import { SkillSet } from './SkillSetGlobal';

export const personData: PortfolioPersonData = {
  name: 'Gergő Nádor',
  introduction:
    'an inspired guy bla bla bla lorem ipsum dolorez akupunktura csacsa\n' +
    'an inspired guy bla bla bla lorem ipsum dolorez akupunktura csacsa\n' +
    'an inspired guy bla bla bla lorem ipsum dolorez akupunktura csacsa\n' +
    'an inspired guy bla bla bla lorem ipsum dolorez akupunktura csacsa\n' +
    'an inspired guy bla bla bla lorem ipsum dolorez akupunktura csacsa\n' +
    'an inspired guy bla bla bla lorem ipsum dolorez akupunktura csacsa',
  activities: [
    {
      color: `#aaaaaa`,
      type: 'continuous',
      activityPoints: [
        {
          name: 'Starting Bachelor',
          dayjs: dayjs('2021.08.31'),
          skills: [SkillSet.css],
          description: '**B** ',
        },
        { name: 'Expected End Bachelor', dayjs: dayjs('2025.01.31') },
      ],
    },
  ],
};
