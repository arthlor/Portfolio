import { client } from '@/lib/sanity';
import { ALL_SKILLS_QUERY } from '@/lib/queries';
import { Metadata } from 'next';
import { Button } from '@/app/components/ui/button';
import Link from 'next/link';
import { AnimatedDiv } from '../components/animations/AnimatedDiv';
import { SkillsList } from './SkillsList';

export const metadata: Metadata = {
  title: 'About Me | Anil Karaca',
  description: 'Biography, skills, and resume for Anil Karaca.',
};

interface Skill { _id: string; name: string; category: string; }

async function getSkills() {
  const skills: Skill[] = await client.fetch(ALL_SKILLS_QUERY);
  const groupedSkills = skills.reduce((acc, skill) => {
    const category = skill.category || 'Other';
    if (!acc[category]) { acc[category] = []; }
    acc[category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);
  return groupedSkills;
}

export default async function AboutPage() {
  const groupedSkills = await getSkills();
  return (
    <div className="px-8 py-16 sm:py-24">
      <AnimatedDiv>
        <h1 className="text-4xl font-extrabold mb-8">About Me</h1>
        <div className="prose lg:prose-xl max-w-none dark:prose-invert">
          <p>
            I am a data journalist with a Master&apos;s in New Media, focusing on the intersection of
            AI, social media, and democracy. I transform complex datasets into compelling, accessible
            narratives that uncover hidden truths and empower the public discourse.
          </p>
          <p>
            This website serves as my digital CV, showcasing my projects, technical abilities, and
            thought leadership in the field.
          </p>
          <Button asChild className="my-4">
            <Link href="/Anil_Karaca_CV.pdf" download>
              Download CV
            </Link>
          </Button>
        </div>
      </AnimatedDiv>
      <AnimatedDiv delay={0.2}>
        <h2 className="mt-16 text-3xl font-bold">My Skills</h2>
        <SkillsList skills={groupedSkills} />
      </AnimatedDiv>
    </div>
  );
} 