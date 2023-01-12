import { ComponentPropsWithRef, ReactElement } from 'react';
import clsxtw from '@/lib/clsxtw';
import Container from '@/components/base/Container';
import useScroll from '@/hooks/useScroll';
import Logo from '@/components/base/Logo';
import Navigation from '@/components/base/Navigation';
import ColorModeSwitcher from '@/components/ColorModeSwitcher';
import NavLink from './NavLink';

type HeaderProps = ComponentPropsWithRef<'header'>;

export default function Header({
  className,
  ...rest
}: HeaderProps): ReactElement {
  const isScrolled = useScroll(100);

  return (
    <header
      className={clsxtw(
        'transition-all duration-200 ease-in z-50 backdrop-blur-lg w-screen bg-white dark:bg-black  border-b-gray-100 dark:border-b-gray-800',
        {
          'bg-white/50  dark:bg-black/50 sticky translate-y-0 z-5 top-0 border-b':
            isScrolled,
        },
        className
      )}
      {...rest}
    >
      <Container className='flex flex-row items-center justify-between'>
        <Logo />
        <Navigation className='flex flex-row items-center justify-between md:gap-2'>
          <ul>
            <li>
              <NavLink href="/">Home</NavLink>
            </li>
          </ul>
          <ColorModeSwitcher />
        </Navigation>
      </Container>
    </header>
  );
}
