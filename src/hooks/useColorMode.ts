import { useEffect } from 'react';
import { ColorMode } from '@/types';
import { useIsomorphicLayoutEffect, useIsMounted } from '@/hooks';
import { useGlobalState } from '@/store';

const updateColorMode = (): void => {
  if (
    (localStorage.theme as ColorMode) === 'dark' ||
    (!('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.classList.add('dark', 'changing-theme');
  } else {
    document.documentElement.classList.remove('dark', 'changing-theme');
  }

  window.setTimeout(() => {
    document.documentElement.classList.remove('changing-theme');
  });
};

const useColorMode = (): [
  colorMode: ColorMode,
  // eslint-disable-next-line no-unused-vars
  setColorMode: (colorMode: ColorMode) => void
] => {
  const { colorMode: globalColorMode, setColorMode } = useGlobalState();
  const isMounted = useIsMounted();

  useIsomorphicLayoutEffect(() => {
    const colorMode = localStorage.theme as ColorMode;
    if (colorMode === 'light' || colorMode === 'dark') {
      setColorMode(colorMode);
    } else {
      setColorMode('system');
    }
  }, []);

  useIsomorphicLayoutEffect(() => {
    if (globalColorMode === 'system') {
      localStorage.removeItem('theme');
    } else if (globalColorMode === 'light' || globalColorMode === 'dark') {
      localStorage.theme = globalColorMode;
    }

    if (isMounted()) {
      updateColorMode();
    }
  }, [globalColorMode]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    if (mediaQuery?.addEventListener !== null) {
      mediaQuery.addEventListener('change', updateColorMode);
    } else {
      // fallback for older browser
      mediaQuery.addListener(updateColorMode);
    }

    const onStorageChangeHandler = (): void => {
      updateColorMode();
      const theme = localStorage.theme as ColorMode;
      if (theme === 'light' || theme === 'dark') {
        setColorMode(theme);
      } else {
        setColorMode('system');
      }
    };

    window.addEventListener('storage', onStorageChangeHandler);

    return () => {
      if (mediaQuery?.removeEventListener !== null) {
        mediaQuery.removeEventListener('change', updateColorMode);
      } else {
        mediaQuery.removeListener(updateColorMode);
      }

      window.removeEventListener('storage', onStorageChangeHandler);
    };
  }, [setColorMode]);

  return [globalColorMode ?? 'system', setColorMode];
};

export default useColorMode;
