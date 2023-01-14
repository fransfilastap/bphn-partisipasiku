import { useState, useEffect } from 'react';
import useWindowSize from './useWindowSize';
import { theme } from '../../tailwind.config';
import useMediaQuery from './useMediaQuery';

const breakpoints = theme?.screens;

type BreakpointKey = keyof typeof breakpoints;

function useBreakpoint<K extends BreakpointKey>(breakpointKey: K): boolean {
  const [isMatches, setIsMatches] = useState<boolean>(false);
  const { width } = useWindowSize();
  const matches = useMediaQuery(`min-width: ${breakpoints?.[breakpointKey]}`);

  useEffect(() => {
    setIsMatches(matches);
  }, [width, matches]);

  return isMatches;
}

export default useBreakpoint;
