interface ActivityPoint {
  name: string;
}

interface Activity {
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
  activities: [],
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
          <div>
            <div>Projects</div>
            <div>Skills</div>
          </div>
        </div>
        <div>th r</div>
      </div>
    </div>
  );
}

export default App;
