import { Html, Head, Main, NextScript } from 'next/document';
import { ReactElement } from 'react';
import Favicons from '@/components/seo/Favicons';

export default function Document(): ReactElement {
  return (
    <Html
      lang='en'
      className="scroll-smooth"
    >
      <Head>
        <Favicons />
        <script
          dangerouslySetInnerHTML={{
            __html: `
							try {
							if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
								document.documentElement.classList.add('dark')
							} else {
								document.documentElement.classList.remove('dark')
							}
							} catch (_) {}
						`,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
