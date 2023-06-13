import { personData, SkillSet } from '@portfolio/lib/model';
import { TimeLinePanel } from './components/TimeLinePanel/TimeLinePanel';
import { SkillCard } from './components/SkillCard/SkillCard';

export function App() {
  return (
    <div className={'w-screen h-screen'}>
      <div className={'w-full h-full flex max-xl:flex-col'}>
        <div className={'w-full p-3'}>
          <div className={'font-bold text-8xl max-sm:text-6xl'}>{personData.name}</div>
          <br />
          <div>{personData.introduction}</div>
          <br />
          <br />
          <div className={'w-full md:flex'}>
            <div className={'md:w-1/2'}>Projects</div>
            <div>
              <div className={'mb-3'}>Skills</div>
              <div className={'md:w-1/2 flex gap-4'}>
                {Object.values(SkillSet).map((skill) => (
                  <SkillCard skill={skill} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className={'h-full xl:w-[110rem]'}>
          <TimeLinePanel columns={[{ name: 'Education', data: personData.activities }]} />
        </div>
      </div>
    </div>
  );
}

export default App;
