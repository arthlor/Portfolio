import { ProjectCardSkeleton } from './ProjectCardSkeleton';

export function ProjectsSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <ProjectCardSkeleton />
      <ProjectCardSkeleton />
      <ProjectCardSkeleton />
      <ProjectCardSkeleton />
    </div>
  );
} 