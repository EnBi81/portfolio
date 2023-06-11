import dayjs, { Dayjs } from 'dayjs';

interface ActivityPoint {
  name: string;
  dayjs: Dayjs;
  url?: string | undefined;
  description?: string | undefined;
  tags?: string[] | undefined;
}

interface Activity {
  color: `#${string}`;
  start: ActivityPoint;
  mid?: ActivityPoint[] | undefined;
  end?: ActivityPoint | undefined;
}

interface PersonData {
  name: string;
  introduction: string;
  activities: Activity[];
}

const personData: PersonData = {
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
      start: { name: 'Starting Bachelor', dayjs: dayjs('2021.08.31') },
      end: { name: 'Expected End Bachelor', dayjs: dayjs('2025.01.31') },
    },
  ],
};

export function App() {
  return (
    <div className={'w-screen h-screen '}>
      <div className={'w-full h-full flex max-xl:flex-col'}>
        <div className={'xl:max-w-3xl'}>
          <div className={'font-bold text-8xl max-sm:text-6xl'}>
            {personData.name}
          </div>
          <br />
          <div>{personData.introduction}</div>
          <br />
          <br />
          <div className={'w-full flex'}>
            <div className={'w-1/2'}>Projects</div>
            <div className={'w-1/2'}>
              <div>Skills</div>
              <div>CSS</div>
            </div>
          </div>
        </div>
        <div>th r</div>
      </div>
    </div>
  );
}

export default App;
