import { ComponentPropsWithRef, ReactElement } from 'react';
import clsxtw from '@/lib/clsxtw';
import Container from '@/components/base/Container';
import useScroll from '@/hooks/useScroll';
import Logo from '@/components/base/Logo';
import Navigation from '@/components/base/Navigation';
import ColorModeSwitcher from '@/components/ColorModeSwitcher';
import NavLink from '@/components/base/NavLink';
import MenuToggle from './MenuToggle';

type HeaderProps = ComponentPropsWithRef<'header'>;

export default function Header({
  className,
  ...rest
}: HeaderProps): ReactElement {
  const isScrolled = useScroll(100);

  return (
    <header
      className={clsxtw(
        'transition-all duration-200 ease-in backdrop-blur-sm w-screen bg-white dark:bg-black  border-b-gray-100 dark:border-b-gray-800',
        {
          'bg-white/80  dark:bg-black/50 sticky translate-y-0 z-[9999999999] top-0 border-b':
            isScrolled,
        },
        className
      )}
      {...rest}
    >
      <Container className='flex flex-row items-center justify-between'>
        <Logo />
        <Navigation className='flex-row items-center justify-between hidden md:flex md:gap-2'>
          <ul className='inline-flex gap-4'>
            <li>
              <NavLink href='/'>Beranda</NavLink>
            </li>
            <li>
              <NavLink href='/isu-terkini'>Isu Terkini</NavLink>
            </li>
            <li>
              <NavLink href='/tata-cara'>Tata Cara</NavLink>
            </li>
            <li>
              <NavLink href='/tentang-kami'>Tentang Kami</NavLink>
            </li>
          </ul>
        </Navigation>
        <MenuToggle />
        <ColorModeSwitcher />
      </Container>
    </header>
  );
}
