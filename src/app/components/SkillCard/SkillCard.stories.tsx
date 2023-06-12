import { SkillCard } from './SkillCard';

const SkillSet = {
  css: {
    name: 'CSS',
    backgroundColor: '#2965f1',
  },
  javascript: {
    name: 'JavaScript',
    backgroundColor: '#f0db4f',
  },
};

function SkillCardStory({
  name,
  backgroundColor,
}: {
  name: string;
  backgroundColor: string;
}) {
  return (
    <div className={'flex gap-4 flex-wrap'}>
      <SkillCard skill={SkillSet.css} />
      <SkillCard skill={SkillSet.javascript} />
      <SkillCard skill={{ name, backgroundColor }} />
    </div>
  );
}

const meta = {
  component: SkillCardStory,
  argTypes: {
    name: 'primary',
    backgroundColor: {
      control: { type: 'color' },
    },
  },
};

export default meta;

export const Primary = {
  args: {
    name: 'React.js',
    backgroundColor: '#66a1ff',
  },
};
