import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { ColorModeScript } from '@chakra-ui/react';

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <link rel="icon" type="image/x-icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;600;700;800&display=swap" rel="stylesheet" />
          <meta name="description" content="tRPC Next.js Prisma Chakra UI TypeScript Todo content" key="desc" />
          <meta property="og:title" content="tRPC Next.js Prisma Chakra UI TypeScript Todo" />
          <meta
            property="og:description"
            content="tRPC Next.js Prisma Chakra UI TypeScript Todo App"
          />
          <meta
            property="og:image"
            content="https://example.com/images/cool-page.jpg"
          />
        </Head>
        <body>
          {/* Make Color mode to persists when you refresh the page. */}
          <ColorModeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
