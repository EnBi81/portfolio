import { Skill } from '@portfolio/lib/model';
import skillCardStyles from './SkillCard.module.css';

interface SkillCardProps {
  skill: Skill;
}

export function SkillCard({ skill }: SkillCardProps) {
  return (
    <div className={skillCardStyles['container']} tabIndex={0}>
      <div className={skillCardStyles['container-inner']}>
        <div
          className={skillCardStyles['container-bg']}
          style={{ backgroundColor: skill.backgroundColor }}
        />
        <div>
          <div className={'font-bold text-lg'}>{skill.name}</div>
        </div>
      </div>
    </div>
  );
}
