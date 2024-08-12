import fs from "fs";
import path from "path";

export function generateStaticParams() {
  // return files.map((file: any) => ({
  //   id: path.basename(file, ".md"),
  // }));

  return [{ id: "2024-07-02-06" }];
}

export default function Page({ params }: { params: { id: string } }) {
  // const { id } = params;

  return <div>test</div>;
}
