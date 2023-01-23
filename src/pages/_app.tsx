import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ReactElement, useEffect } from 'react';
import ThemeProvider from '@/providers/ThemeProvider';
import RootLayout from '@/components/layouts/RootLayout';
import { useRouter } from 'next/router';
import { useGlobalState } from '@/store';

export default function App({ Component, pageProps }: AppProps): ReactElement {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => useGlobalState.getState().toggleMenu(false);

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

  return (
    <ThemeProvider>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </ThemeProvider>
  );
}
