import fs from 'fs';
import path from 'path';
import { remark } from 'remark';
import html from 'remark-html';

const contentDirectory = path.join( process.cwd(), 'src/content' );

export async function getAllMarkdownContent() {
  const fileNames = fs.readdirSync( contentDirectory );
  const markdownFileNames = fileNames.filter( fileName => path.extname( fileName ) === '.md' );


  const allContentHtml = await Promise.all(
    markdownFileNames.map( async ( fileName ) => {
      const fullPath = path.join( contentDirectory, fileName );
      const fileContents = fs.readFileSync( fullPath, 'utf8' ); // 인코딩을 'utf8'로 설정
      const processedContent = await remark().use( html ).process( fileContents );
      return processedContent.toString();
    } )
  );
  return allContentHtml;
}