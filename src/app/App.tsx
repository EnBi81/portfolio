import { personData } from '@portfolio/lib/model';
import { TimeLinePanel } from './components/TimeLinePanel/TimeLinePanel';

export function App() {
  return (
    <div className={'w-screen h-screen '}>
      <div className={'w-full h-full flex max-xl:flex-col'}>
        <div className={'xl:max-w-3xl'}>
          <div className={'font-bold text-8xl max-sm:text-6xl'}>{personData.name}</div>
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
        <TimeLinePanel columns={[{ name: 'Education', data: personData.activities }]} />
      </div>
    </div>
  );
}

export default App;
