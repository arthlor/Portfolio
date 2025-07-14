import { client } from '@/lib/sanity';
import { ALL_PROJECTS_QUERY } from '@/lib/queries';
import ProjectCard from '@/app/components/ProjectCard';

interface Project {
  _id: string;
  title: string;
  overview: string;
  imageUrl: string;
  slug: { current: string };
}

async function getProjects() {
  const projects: Project[] = await client.fetch(ALL_PROJECTS_QUERY);
  return projects;
}

export async function ProjectsGrid() {
  const projects = await getProjects();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map(project => (
        <ProjectCard
          key={project._id}
          title={project.title}
          overview={project.overview}
          imageUrl={project.imageUrl}
          slug={project.slug.current}
        />
      ))}
    </div>
  );
} 