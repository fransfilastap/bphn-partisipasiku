import { ColorMode } from '@/types';
import { createContext, FunctionComponent, PropsWithChildren } from 'react';
import useColorMode from '@/hooks/useColorMode';

export interface IThemeContext {
  colorMode: ColorMode;
  // eslint-disable-next-line no-unused-vars
  setColorMode: (colorMode: ColorMode) => void;
}

const defaultTheme: IThemeContext = {
  colorMode: 'light',
  // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars, no-unused-vars
  setColorMode: (colorMode) => {},
};

const ThemeContext = createContext<IThemeContext>(defaultTheme);

const ThemeProvider: FunctionComponent<PropsWithChildren> = (props) => {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <ThemeContext.Provider
      value={{
        setColorMode,
        colorMode,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
