import { ComponentPropsWithRef, FunctionComponent, ReactElement } from 'react';
import useColorMode from '@/hooks/useColorMode';
import { ColorMode } from '@/types';
import useIsMounted from '@/hooks/useIsMounted';
import { MoonIcon, SunIcon, SystemIcon } from '@/components/icons';
import clsxtw from '@/lib/clsxtw';

const Icons: Record<ColorMode, ReactElement> = {
  light: <SunIcon className='w-5 h-5' />,
  dark: <MoonIcon className='w-5 h-5' />,
  system: <SystemIcon className='w-5 h-5' />,
};
type ColorModeSelectionProps = ComponentPropsWithRef<'select'>;

const ColorModeSwitcher: FunctionComponent<ColorModeSelectionProps> = (
  props: ColorModeSelectionProps
) => {
  const { className, ...rest } = props;
  const [colorMode, setColorMode] = useColorMode();
  useIsMounted();

  return (
    <div
      className={clsxtw(
        'relative flex-row items-center justify-between px-2 py-2 text-sm border border-gray-100 rounded md:flex group dark:border-gray-800',
        className
      )}
    >
      <span className='absolute inline-flex cursor-pointer pointer-events-auto'>
        {Icons[colorMode ?? 'system']}
      </span>
      <select
        className='w-full px-8 bg-transparent border-none outline-none appearance-none cursor-pointer ring-0 focus-visible:outline-none focus-within:outline-none outline-offset-0 focus:outline-none'
        value={colorMode ?? 'system'}
        onChange={(event) => {
          setColorMode(event.target.value as ColorMode);
        }}
        {...rest}
      >
        <option
          className='flex flex-row'
          value='system'
        >
          System
        </option>
        <option
          className='flex flex-row'
          value='light'
        >
          Light
        </option>
        <option
          className='flex flex-row'
          value='dark'
        >
          Dark
        </option>
      </select>
      <span className='absolute right-0 inline-flex text-gray-500 pointer-events-none'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-6 h-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9'
          />
        </svg>
      </span>
    </div>
  );
};

export default ColorModeSwitcher;
