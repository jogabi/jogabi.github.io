import fs from "fs";
import path from "path";

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

export default function Page({ params }: { params: { id: string } }) {
  // const { id } = params;

  return <div>test</div>;
}
