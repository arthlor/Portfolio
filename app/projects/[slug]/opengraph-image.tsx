import { ImageResponse } from 'next/og';
import { client } from '@/lib/sanity';
import { SINGLE_PROJECT_QUERY } from '@/lib/queries';

export const runtime = 'edge';

export const alt = 'Project';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

type Props = {
  params: {
    slug: string;
  };
};

export default async function Image({ params }: Props) {
  const project = await client.fetch(SINGLE_PROJECT_QUERY, {
    slug: params.slug,
  });

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 60,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px',
        }}
      >
        <div style={{ fontSize: 30, marginBottom: 40 }}>Anil Karaca | Project</div>
        <div style={{ textAlign: 'center' }}>{project.title}</div>
      </div>
    ),
    {
      ...size,
    }
  );
} 