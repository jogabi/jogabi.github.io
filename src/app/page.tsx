import { getMarkdownContent } from '@/lib/markdown';

export default function Home({ contentHtml }: { contentHtml: string }) {
  return (
    <main>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </main>
  );
}

export async function getStaticProps() {
  const contentHtml = await getMarkdownContent('example');
  return {
    props: {
      contentHtml,
    },
  };
}