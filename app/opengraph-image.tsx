import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Anil Karaca | Data Journalist';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div style={{ fontSize: 80 }}>Anil Karaca</div>
        <div style={{ fontSize: 40, marginTop: 20 }}>Data Journalist</div>
      </div>
    ),
    {
      ...size,
    }
  );
} 