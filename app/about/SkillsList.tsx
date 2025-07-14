'use client';

import { motion } from 'framer-motion';

interface Skill {
  _id: string;
  name: string;
}

interface GroupedSkills {
  [category: string]: Skill[];
}

interface SkillsListProps {
  skills: GroupedSkills;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export function SkillsList({ skills }: SkillsListProps) {
  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible">
      {Object.entries(skills).map(([category, skillItems]) => (
        <motion.div key={category} className="mt-4" variants={itemVariants}>
          <h3 className="font-bold text-xl not-italic text-foreground">{category}</h3>
          <ul className="list-disc list-inside columns-2">
            {skillItems.map(skill => (
              <li key={skill._id}>{skill.name}</li>
            ))}
          </ul>
        </motion.div>
      ))}
    </motion.div>
  );
} 