import { Suspense } from 'react';
import { AnimatedDiv } from '@/app/components/animations/AnimatedDiv';
import { ProjectsGrid } from '@/app/components/ProjectsGrid';
import { ProjectsSkeleton } from '@/app/components/loaders/ProjectsSkeleton';

export default async function HomePage() {
  return (
    <section className="p-8">
      <AnimatedDiv>
        <div className="text-center my-16">
          <h1 className="text-5xl font-extrabold tracking-tight">Anil Karaca</h1>
          <p className="mt-4 text-xl text-muted-foreground">
            Data Journalist specializing in data stories, AI, and social media.
          </p>
        </div>
      </AnimatedDiv>

      <AnimatedDiv delay={0.2}>
        <h2 className="text-3xl font-bold mb-8">Featured Work</h2>
        <Suspense fallback={<ProjectsSkeleton />}>
          <ProjectsGrid />
        </Suspense>
      </AnimatedDiv>
    </section>
  );
}
