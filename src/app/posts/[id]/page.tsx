import fs from "fs";
import path from "path";
import { remark } from "remark";
import html from "remark-html";

export function generateStaticParams() {
  const contentDirectory = path.join(process.cwd(), "src/content");
  const files = getAllMarkdownFiles(contentDirectory);

  return files.map((file: any) => ({
    id: path.basename(file, ".md"),
  }));
}

function getAllMarkdownFiles(dir: string): string[] {
  let results: string[] = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat && stat.isDirectory()) {
      results = results.concat(getAllMarkdownFiles(filePath));
    } else if (path.extname(file) === ".md") {
      results.push(filePath);
    }
  });

  return results;
}

async function getPostContent(id: string) {
  const contentDirectory = path.join(process.cwd(), "src/content");
  const files = getAllMarkdownFiles(contentDirectory);
  const filePath = files.find((file) => path.basename(file, ".md") === id);

  if (!filePath) {
    throw new Error(`File not found for id: ${id}`);
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const processedContent = await remark().use(html).process(fileContents);
  return processedContent.toString();
}

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const content = await getPostContent(id);

  return (
    <div
      dangerouslySetInnerHTML={{ __html: content }}
      className={"content_wrap"}
    />
  );
}
