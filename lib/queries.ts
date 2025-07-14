import { groq } from 'next-sanity';

export const ALL_PROJECTS_QUERY = groq`*[_type == "project"] | order(_createdAt desc) { _id, title, slug, overview, "imageUrl": mainImage.asset->url, tags }`;
export const SINGLE_PROJECT_QUERY = groq`*[_type == "project" && slug.current == $slug][0]{ _id, title, overview, mainImage { asset->{url, metadata { dimensions }}}, liveUrl, challenge, process, findings, tags }`;
export const ALL_PROJECT_SLUGS_QUERY = groq`*[_type == "project"]{ "slug": slug.current }`;
export const ALL_ARTICLES_QUERY = groq`*[_type == "article"] | order(publishedDate desc){ _id, title, publication, publicationUrl, publishedDate }`;
export const ALL_SKILLS_QUERY = groq`*[_type == "skill"]{ _id, name, category }`;
export const ALL_TAGS_QUERY = groq`*[_type == "project"].tags[].value`; 