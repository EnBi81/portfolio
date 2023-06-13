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
          name: 'Software Engineering Bachelor',
          dayjs: dayjs('2021.08.31'),
          location: 'VIA University College, Horsens',
          skills: [SkillSet.css],
          description: (
            <span>
              Starting <b>Software Engineering</b> studies at{' '}
              <b>
                <a href={'https://via.dk'}>VIA University College, Horsens</a>
              </b>
            </span>
          ),
        },
        {
          name: 'Expected End Bachelor',
          dayjs: dayjs('2025.01.31'),
        },
      ],
    },
  ],
};
