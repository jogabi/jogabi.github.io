import { getAllMarkdownContent } from "@/lib/markdown";
import { JSDOM } from "jsdom";

export default async function Home() {
  const allContentHtml = await getAllMarkdownContent();

  return (
    <ul>
      {allContentHtml.map((content, index) => {
        const dom = new JSDOM(content);
        const doc = dom.window.document;
        const h1 = doc.querySelector("h1");
        const images = doc.querySelectorAll("img");

        if (images.length > 1) {
          for (let i = 1; i < images.length; i++) {
            images[i].remove();
          }
        }

        let modifiedContent = "";
        if (h1) modifiedContent += h1.outerHTML;
        if (images[0]) modifiedContent += images[0].outerHTML;

        return (
          <li
            key={index}
            dangerouslySetInnerHTML={{ __html: modifiedContent }}
          />
        );
      })}
    </ul>
  );
}
