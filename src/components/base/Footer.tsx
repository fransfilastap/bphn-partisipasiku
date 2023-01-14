import { ReactElement } from 'react';
import Link from 'next/link';
import Container from './Container';
import Logo from './Logo';

export default function Footer(): ReactElement {
  return (
    <footer className='font-sans text-gray-600 flex py-3 text-sm gap-1 flex-row items-center justify-center h-full border-t dark:border-t-gray-800 bg-[#fafafa] dark:bg-[#111]'>
      <Container className='flex flex-col items-start justify-start gap-1'>
        <Logo />
        <span className='text-[0.9em]'>
          Copyright &copy; {new Date().getFullYear()} BPHN.go.id. All rights
          reserved{' '}
        </span>
      </Container>
    </footer>
  );
}
