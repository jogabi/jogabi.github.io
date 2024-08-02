import fs from 'fs';
import path from 'path';
import { remark } from 'remark';
import html from 'remark-html';

const contentDirectory = path.join( process.cwd(), 'src/content' );


function getMarkdownFiles( dir: string ): string[] {
  let results: string[] = [];
  const list = fs.readdirSync( dir );

  list.forEach( ( file ) => {
    const filePath = path.join( dir, file );
    const stat = fs.statSync( filePath );

    if ( stat && stat.isDirectory() ) {
      results = results.concat( getMarkdownFiles( filePath ) );
    } else if ( path.extname( file ) === '.md' ) {
      results.push( filePath );
    }
  } );

  return results;
}



function sortMarkdownFiles( files: string[] ): string[] {
  return files.sort( ( a, b ) => {
    const aName = path.basename( a, '.md' );
    const bName = path.basename( b, '.md' );
    return bName.localeCompare( aName );
  } );
}

export async function getAllMarkdownContent() {
  const markdownFiles = getMarkdownFiles( contentDirectory );
  const sortedMarkdownFiles = sortMarkdownFiles( markdownFiles );

  const allContentHtml = await Promise.all(
    sortedMarkdownFiles.map( async ( filePath ) => {
      const fileContents = fs.readFileSync( filePath, 'utf8' );
      const processedContent = await remark().use( html ).process( fileContents );
      /*
      제목만 추출하기
            const match = fileContents.match( /^# (.+)$/m );
            console.log( 'sfsdfssfs', match ? match[1] : 'Untitled' )
       */


      return processedContent.toString();
    } )
  );

  return allContentHtml;
}
