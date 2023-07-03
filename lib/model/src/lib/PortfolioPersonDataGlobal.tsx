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
      name: 'VIA',
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
    {
      name: 'KLG',
      color: '#ccaaaa',
      type: 'continuous',
      activityPoints: [
        {
          name: 'Higher school Education',
          dayjs: dayjs('2015.05.01'),
        },
        {
          name: 'A Competition',
          dayjs: dayjs('2018.05.10'),
        },
        {
          name: 'End of Higher school Education',
          dayjs: dayjs('2021.05.01'),
        },
      ],
    },
  ],
};
