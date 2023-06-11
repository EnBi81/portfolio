import { Skill } from '../interfaces/Skill';
import CssImage from '../assets/css-big.svg';

interface SkillSetInterface {
  css: Skill;
}

export const SkillSet: SkillSetInterface = {
  css: {
    name: 'CSS',
    image: CssImage,
    color: `#111111`,
  },
};
