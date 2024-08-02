import { getMarkdownContent } from '@/lib/markdown';

export default async function Home() {
  const contentHtml = await getMarkdownContent('example');

  return (
    <main>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </main>
  );
}