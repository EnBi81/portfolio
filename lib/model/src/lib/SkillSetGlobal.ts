import { Skill } from '../interfaces/Skill';

interface SkillSetInterface {
  css: Skill;
  javascript: Skill;
}

export const SkillSet: SkillSetInterface = {
  css: {
    name: 'CSS',
    backgroundColor: '#264de4',
  },
  javascript: {
    name: 'JavaScript',
    backgroundColor: '#f0db4f',
  },
};
