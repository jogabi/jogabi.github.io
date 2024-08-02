import fs from 'fs';
import path from 'path';
import { remark } from 'remark';
import html from 'remark-html';

const contentDirectory = path.join( process.cwd(), 'src/content' );

export async function getMarkdownContent( fileName: string ) {
  const fullPath = path.join( contentDirectory, `${fileName}.md` );
  const fileContents = fs.readFileSync( fullPath, 'utf8' );

  const processedContent = await remark().use( html ).process( fileContents );
  const contentHtml = processedContent.toString();

  return contentHtml;
}