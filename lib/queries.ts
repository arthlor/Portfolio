import { groq } from 'next-sanity';

// Replaced with a single, consistent query using orderRank
export const ALL_PROJECTS_QUERY = groq`*[_type == "project"] | order(orderRank) {
  _id,
  title,
  slug,
  overview,
  "imageUrl": mainImage.asset->url,
  tags
}`;

export const ALL_ARTICLES_QUERY = groq`*[_type == "article"] | order(publishedDate desc){ 
  _id, 
  title, 
  publication, 
  publicationUrl, 
  publishedDate 
}`;

export const ALL_STORIES_QUERY = groq`*[_type == "story"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  summary,
  "imageUrl": mainImage.asset->url,
  publishedAt
}`;

export const ALL_SKILLS_QUERY = groq`*[_type == "skill"]{ _id, name, category }`;

// Using .slug.current to get an array of strings
export const ALL_PROJECT_SLUGS_QUERY = groq`*[_type == "project" && defined(slug.current)][].slug.current`;

export const ALL_ARTICLE_SLUGS_QUERY = groq`*[_type == "article" && defined(slug.current)][].slug.current`;

export const ALL_STORY_SLUGS_QUERY = groq`*[_type == "story" && defined(slug.current)][].slug.current`;

export const ALL_TAGS_QUERY = groq`*[_type == "project"].tags[].value`;

export const SINGLE_PROJECT_QUERY = groq`*[_type == "project" && slug.current == $slug][0] {
  title,
  overview,
  mainImage {
    asset-> {
      url,
      metadata {
        dimensions
      }
    }
  },
  liveUrl,
  challenge,
  process,
  findings,
  tags
}`;

export const SINGLE_ARTICLE_QUERY = groq`*[_type == "article" && slug.current == $slug][0] {
  title,
  "slug": slug.current,
  mainImage {
    asset->{
      url,
      metadata {
        dimensions
      }
    }
  },
  publishedAt,
  "authorName": author->name,
  "authorImage": author->image.asset->url,
  body
}`;

export const SINGLE_STORY_QUERY = groq`*[_type == "story" && slug.current == $slug][0] {
  title,
  "slug": slug.current,
  mainImage {
    asset->{
      url,
      metadata {
        dimensions
      }
    }
  },
  heroSubtitle,
  publishedAt,
  body[]{
    ...,
    _type == "image" => {
      "asset": asset->{
        url,
        metadata {
          dimensions
        }
      }
    }
  }
}`; 