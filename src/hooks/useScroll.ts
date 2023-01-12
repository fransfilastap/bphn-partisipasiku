import { useState } from 'react';
import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect';

const useScroll = (threshold = 0): boolean => {
  const [scrolled, setScrolled] = useState<boolean>(false);

  useIsomorphicLayoutEffect(() => {
    const onScroll = (): void => {
      setScrolled(window.scrollY > threshold);
    };
    onScroll();
    document.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      document.removeEventListener('scroll', onScroll);
    };
  }, [threshold]);

  return scrolled;
};

export default useScroll;
