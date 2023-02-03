import { ComponentPropsWithoutRef, forwardRef, ReactElement, Ref } from 'react';
import Container from './Container';
import Logo from './Logo';
import ColorModeSwitcher from '@/components/ColorModeSwitcher';
import Link, { LinkProps } from 'next/link';
import { ClassValue } from 'clsx';
import clsxtw from '@/lib/clsxtw';

export default function Footer(): ReactElement {
  return (
    <footer className='font-sans text-gray-600 flex py-3 text-sm gap-1 flex-row items-center justify-center border-t dark:border-t-gray-800 bg-[#fafafa] dark:bg-[#111]'>
      <Container className='flex flex-col items-start justify-between gap-20'>
        <div className='grid grid-rows-1 lg:grid-rows-none gap-10 lg:grid-cols-3 py-5'>
          <div className='w-full flex flex-col gap-2 justify-start items-start'>
            <Logo />
            <p>Dikelola oleh Badan Pembinaan Hukum Nasional</p>
          </div>
          <div className='flex flex-col items-start gap-3 lg:mt-0 mt-10'>
            <h5 className='text-black dark:text-white font-body text-sm font-[500] dark:font-[300]'>
              Tautan Terkait
            </h5>
            <ul className='list-none flex flex-col gap-1'>
              <li>
                <FooterLink href='https://bphn.go.id'>
                  Badan Pembinaan Hukum Nasional
                </FooterLink>
              </li>
              <li>
                <FooterLink href='https://kemenkumham.go.id'>
                  Kementerian Hukum dan HAM R.I
                </FooterLink>
              </li>
              <li>
                <FooterLink href='https://e-partisipasi.peraturan.go.id/'>
                  e-Partisipasi Publik Ditjen PP
                </FooterLink>
              </li>
              <li>
                <FooterLink href='https://jdihn.go.id'>JDIHN</FooterLink>
              </li>
            </ul>
          </div>
        </div>
        <div className='flex flex-col-reverse lg:flex-row w-full justify-between items-center gap-2'>
          <p className='text-[0.9em]'>
            Copyright &copy; {new Date().getFullYear()} BPHN.go.id. All rights
            reserved{' '}
          </p>
          <ColorModeSwitcher />
        </div>
      </Container>
    </footer>
  );
}

type ShareItemLinkProps = LinkProps & {
  children: string;
};

const FooterLink = forwardRef(
  (
    { href, children, ...props }: ShareItemLinkProps,
    ref: Ref<HTMLAnchorElement>
  ) => (
    <Link
      ref={ref}
      href={href}
      className='text-gray-500 text-[0.99em] font-[400] hover:text-black dark:hover:text-gray-300'
    >
      {children}
    </Link>
  )
);
