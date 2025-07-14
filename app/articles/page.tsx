import { client } from '@/lib/sanity';
import { ALL_ARTICLES_QUERY } from '@/lib/queries';
import { Metadata } from 'next';
import { ArticlesList } from './ArticlesList';
import { AnimatedDiv } from '../components/animations/AnimatedDiv';

export const metadata: Metadata = {
  title: 'Published Articles | Anil Karaca',
  description: 'A list of published articles on data journalism, AI, and social media.',
};

interface Article {
  _id: string;
  title: string;
  publication: string;
  publicationUrl: string;
  publishedDate: string;
}

async function getArticles() {
  const articles: Article[] = await client.fetch(ALL_ARTICLES_QUERY);
  return articles;
}

export default async function ArticlesPage() {
  const articles = await getArticles();
  return (
    <section className="p-8">
      <AnimatedDiv>
        <h1 className="text-4xl font-extrabold tracking-tight mb-8">Articles</h1>
      </AnimatedDiv>
      <ArticlesList articles={articles} />
    </section>
  );
} 