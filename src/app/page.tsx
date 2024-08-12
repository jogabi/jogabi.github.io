import { getAllMarkdownContent, getAllMarkdownFiles } from "@/lib/markdown";
import { JSDOM } from "jsdom";
import Link from "next/link";

export default async function Home() {
  const allContentHtml = await getAllMarkdownContent();
  const allFiles = await getAllMarkdownFiles();

  return (
    <ul className="main_content">
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
        if (h1) {
          const p = doc.createElement("p");
          p.innerHTML = h1.innerHTML;
          p.className = "content_title";
          modifiedContent += p.outerHTML;
        }
        if (images[0]) {
          const wrapper = doc.createElement("div");
          wrapper.className = "image_wrapper";
          wrapper.appendChild(images[0].cloneNode(true));
          modifiedContent += wrapper.outerHTML;
        }
        const fileName =
          allFiles[index].match(/\d{4}-\d{2}-\d{2}-\d+/)?.[0] || "";

        return (
          <li key={index}>
            <Link href={`/posts/${fileName}`}>
              <div dangerouslySetInnerHTML={{ __html: modifiedContent }} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
