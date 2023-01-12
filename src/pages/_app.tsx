import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ReactElement } from 'react';
import ThemeProvider from '@/providers/ThemeProvider';

export default function App({ Component, pageProps }: AppProps): ReactElement {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
