import { client } from '@/lib/sanity';
import { SINGLE_PROJECT_QUERY, ALL_PROJECT_SLUGS_QUERY } from '@/lib/queries';
import Link from 'next/link';
import { Metadata } from 'next';
import { AnimatedDiv } from '@/app/components/animations/AnimatedDiv';
import Image from 'next/image';

type Project = {
  title: string;
  overview: string;
  mainImage: {
    asset: {
      url: string;
      metadata: {
        dimensions: {
          width: number;
          height: number;
        };
      };
    };
  };
  liveUrl: string;
  challenge: string;
  process: string;
  findings: string;
  tags: string[];
};

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project: Project = await client.fetch(SINGLE_PROJECT_QUERY, { slug: params.slug });
  return {
    title: `${project.title} | Anil Karaca`,
    description: project.overview,
  };
}

export async function generateStaticParams() {
  const slugs: { slug: string }[] = await client.fetch(ALL_PROJECT_SLUGS_QUERY);
  return slugs.map(({ slug }) => ({ slug }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project: Project = await client.fetch(SINGLE_PROJECT_QUERY, { slug: params.slug });
  return (
    <AnimatedDiv className="p-8">
      <article>
        <h1 className="text-4xl font-extrabold my-8 text-center">{project.title}</h1>
        <Image
          src={project.mainImage.asset.url}
          alt={project.title}
          width={project.mainImage.asset.metadata.dimensions.width}
          height={project.mainImage.asset.metadata.dimensions.height}
          className="w-full h-auto max-h-[500px] object-cover rounded-lg mb-8"
        />
        <div className="prose prose-lg max-w-none dark:prose-invert">
          <Link href={project.liveUrl} target="_blank" className="text-primary hover:underline">
            View Live Project →
          </Link>
          <h2 className="mt-8">The Challenge</h2>
          <p>{project.challenge}</p>
          <h2>Process & Methodology</h2>
          <p>{project.process}</p>
          <h2>Key Findings</h2>
          <p>{project.findings}</p>
          <h3>Technologies Used</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {project.tags.map((tag: string) => (
              <span
                key={tag}
                className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm not-prose"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    </AnimatedDiv>
  );
} 