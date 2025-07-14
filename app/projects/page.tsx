import { client } from '@/lib/sanity';
import { ALL_PROJECTS_QUERY, ALL_TAGS_QUERY } from '@/lib/queries';
import { Metadata } from 'next';
import { AnimatedDiv } from '@/app/components/animations/AnimatedDiv';
import { FilteredProjects } from './FilteredProjects';

export const metadata: Metadata = {
  title: 'Work Portfolio | Anil Karaca',
  description: 'A collection of data journalism projects by Anil Karaca.',
};

interface Project {
  _id: string;
  title: string;
  overview: string;
  imageUrl: string;
  slug: { current: string };
  tags: string[];
}

async function getProjects() {
  const projects: Project[] = await client.fetch(ALL_PROJECTS_QUERY);
  return projects;
}

async function getTags() {
  const tags: string[] = await client.fetch(ALL_TAGS_QUERY);
  // Get unique tags
  return [...new Set(tags.filter(Boolean))];
}

export default async function ProjectsPage() {
  const projects = await getProjects();
  const tags = await getTags();

  return (
    <section className="px-8 py-16 sm:py-24">
      <AnimatedDiv>
        <h1 className="text-4xl font-extrabold mb-8">All Work</h1>
      </AnimatedDiv>
      <AnimatedDiv delay={0.2}>
        <FilteredProjects projects={projects} tags={tags} />
      </AnimatedDiv>
    </section>
  );
} 