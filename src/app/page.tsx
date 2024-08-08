import { getAllMarkdownContent } from "@/lib/markdown";
import { JSDOM } from "jsdom";

export default async function Home() {
  const allContentHtml = await getAllMarkdownContent();

  return (
    <main>
      {allContentHtml.map((content, index) => {
        const dom = new JSDOM(content);
        const doc = dom.window.document;
        const images = doc.querySelectorAll("img");

        if (images.length > 1) {
          for (let i = 1; i < images.length; i++) {
            images[i].remove();
          }
        }
        const modifiedContent = doc.body.innerHTML;

        return (
          <div
            key={index}
            dangerouslySetInnerHTML={{ __html: modifiedContent }}
          />
        );
      })}
    </main>
  );
}
