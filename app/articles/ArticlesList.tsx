'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

interface Article {
  _id: string;
  title: string;
  publication: string;
  publicationUrl: string;
  publishedDate: string;
}

interface ArticlesListProps {
  articles: Article[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export function ArticlesList({ articles }: ArticlesListProps) {
  return (
    <motion.div
      className="space-y-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {articles.map(article => (
        <motion.div key={article._id} variants={itemVariants}>
          <Link
            href={article.publicationUrl}
            target="_blank"
            className="block p-4 border rounded-lg hover:bg-accent"
          >
            <h2 className="text-xl font-bold text-primary">{article.title}</h2>
            <p className="text-muted-foreground">
              Published in <strong>{article.publication}</strong> on{' '}
              {new Date(article.publishedDate).toLocaleDateString()}
            </p>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
} 