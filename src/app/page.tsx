import { getAllMarkdownContent } from '@/lib/markdown';

export default async function Home() {
  const allContentHtml = await getAllMarkdownContent();

  return (
    <main>
      {allContentHtml.map((content, index) => (
        <div key={index} dangerouslySetInnerHTML={{ __html: content }} />
      ))}
    </main>
  );
}