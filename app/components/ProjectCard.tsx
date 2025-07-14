import Link from 'next/link';
import Image from 'next/image';

interface Props {
  slug: string;
  imageUrl: string;
  title: string;
  overview: string;
}
export default function ProjectCard({ slug, imageUrl, title, overview }: Props) {
  return (
    <Link
      href={`/projects/${slug}`}
      className="block group border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 bg-card"
    >
      <div className="relative w-full h-48">
        <Image
          src={imageUrl || 'https://placehold.co/600x400'}
          alt={`Thumbnail for ${title}`}
          className="object-cover"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold mt-2 text-card-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground mt-1 line-clamp-2">{overview}</p>
      </div>
    </Link>
  );
} 