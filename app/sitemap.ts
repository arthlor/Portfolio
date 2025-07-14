import { MetadataRoute } from 'next';
import { client } from '@/lib/sanity';
import { ALL_PROJECT_SLUGS_QUERY } from '@/lib/queries';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://anilkaraca.com';

  const projectSlugs: { slug: string }[] = await client.fetch(ALL_PROJECT_SLUGS_QUERY);
  const projectUrls = projectSlugs.map(({ slug }) => ({
    url: `${baseUrl}/projects/${slug}`,
    lastModified: new Date(),
  }));

  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/projects`, lastModified: new Date() },
    { url: `${baseUrl}/articles`, lastModified: new Date() },
    { url: `${baseUrl}/about`, lastModified: new Date() },
    ...projectUrls,
  ];
} 