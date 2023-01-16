import { ComponentPropsWithRef, FunctionComponent, ReactElement } from 'react';
import clsxtw from '@/lib/clsxtw';
import Container from '@/components/base/Container';
import Logo from '@/components/base/Logo';
import Navigation from '@/components/base/Navigation';
import ColorModeSwitcher from '@/components/ColorModeSwitcher';
import NavLink, { NavLinkProps } from '@/components/base/NavLink';
import MenuToggle from './MenuToggle';
import { useToggle } from '@/hooks';
import { AnimatePresence, motion } from 'framer-motion';
import Portal from './Portal';
import { XCircleIcon } from '../icons';

type HeaderProps = ComponentPropsWithRef<'header'>;

export default function Header({
  className,
  ...rest
}: HeaderProps): ReactElement {
  const [isOpen, setIsOpen] = useToggle(false);
  const closeMenuHandler = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header
        className={clsxtw(
          'bg-white/80 backdrop-blur-sm dark:bg-black/50 z-[999] top-0 w-screen bg-none dark:bg-black  border-b-gray-100 dark:border-b-gray-800 sticky',
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
                <NavLink href='/tentang-kami'>Tentang Kami</NavLink>
              </li>
            </ul>
          </Navigation>
          <MenuToggle onClick={() => setIsOpen(!isOpen)} />
          <ColorModeSwitcher />
        </Container>
      </header>
      <AnimatePresence>
        <Portal id='menu-container-wrapper'>
          {isOpen && (
            <>
              <motion.div
                onClick={closeMenuHandler}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className='fixed inset-0 w-full h-[100vh] z-[999] bg-black/30 backdrop-blur-md'
              ></motion.div>
              <motion.div className='fixed z-[999999999] inset-0 flex flex-col items-center justify-start p-8'>
                <motion.div
                  initial={{ y: -100 }}
                  animate={{ y: 0 }}
                  exit={{ y: -100 }}
                  className='flex flex-col w-full p-4 bg-white divide-y-2 divide-gray-200 rounded-md shadow-md divide-solid'
                >
                  <div className='flex items-center justify-between'>
                    <h5 className='font-[600] text-black font-sans text-xl '>
                      Menu
                    </h5>
                    <button
                      aria-label='close menu'
                      className='appearance-none'
                      onClick={closeMenuHandler}
                    >
                      <XCircleIcon className='text-black' />
                    </button>
                  </div>
                  <ul className='flex flex-col gap-1 py-2'>
                    <MNavLink href='/'>Beranda</MNavLink>
                    <MNavLink href='/tentang-kami'>Tentang Kami</MNavLink>
                  </ul>
                </motion.div>
              </motion.div>
            </>
          )}
        </Portal>
      </AnimatePresence>
    </>
  );
}

const MNavLink: FunctionComponent<NavLinkProps> = ({ href, children }) => {
  return (
    <NavLink
      className='text-black text-md dark:text-gray-800'
      activeClassname='text-blue-500 dark:text-blue-500'
      href={href}
    >
      {children}
    </NavLink>
  );
};
