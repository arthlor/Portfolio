'use client';

import { useState, useMemo } from 'react';
import ProjectCard from '@/app/components/ProjectCard';
import { Button } from '@/app/components/ui/button';

interface Project {
  _id: string;
  title: string;
  overview: string;
  imageUrl: string;
  slug: { current: string };
  tags: string[];
}

interface FilteredProjectsProps {
  projects: Project[];
  tags: string[];
}

export function FilteredProjects({ projects, tags }: FilteredProjectsProps) {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filteredProjects = useMemo(() => {
    if (!selectedTag) {
      return projects;
    }
    return projects.filter(project => project.tags.includes(selectedTag));
  }, [projects, selectedTag]);

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-8">
        <Button
          variant={!selectedTag ? 'default' : 'secondary'}
          onClick={() => setSelectedTag(null)}
        >
          All
        </Button>
        {tags.map(tag => (
          <Button
            key={tag}
            variant={selectedTag === tag ? 'default' : 'secondary'}
            onClick={() => setSelectedTag(tag)}
          >
            {tag}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map(project => (
          <ProjectCard
            key={project._id}
            title={project.title}
            overview={project.overview}
            imageUrl={project.imageUrl}
            slug={project.slug.current}
          />
        ))}
      </div>
    </div>
  );
} 