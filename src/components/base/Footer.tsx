import { FunctionComponent, PropsWithChildren, ReactElement } from 'react';
import Container from './Container';
import Logo from './Logo';
import ColorModeSwitcher from '@/components/ColorModeSwitcher';
import Link, { LinkProps } from 'next/link';
import { ClassValue } from 'clsx';
import clsxtw from '@/lib/clsxtw';

export default function Footer(): ReactElement {
  return (
    <footer className='font-sans text-gray-600 flex py-3 text-sm gap-1 flex-row items-center justify-center border-t dark:border-t-gray-800 bg-[#fafafa] dark:bg-[#111]'>
      <Container className='flex flex-col items-start justify-start'>
        <div
          className="grid grid-rows-1 lg:grid-rows-none lg:grid-cols-3 py-5"
        >
          <div
            className="w-full flex flex-col gap-2 justify-start items-start"
          >
            <Logo />
            <p>Dikelola oleh Badan Pembinaan Hukum Nasional</p>
          </div>
          <div className="flex flex-col items-start gap-3 lg:mt-0 mt-10">
            <h5
              className="text-black dark:text-white font-body text-sm font-[500] dark:font-[300]"
            >
              Tautan Terkait
            </h5>
            <ul className="list-none flex flex-col gap-1">
              <li>
                <Link
                  href="https://bphn.go.id"
                  className="text-zinc-500 text-[0.99em] font-[400]"
                >
                  Badan Pembinaan Hukum Nasional
                </Link>
              </li>
              <li>Kementerian Hukum dan HAM R.I</li>
              <li>
                E-Partisipasi Direktorat Jenderal Peraturan Perundang-undangan
              </li>
              <li>JDIHN</li>
            </ul>
          </div>
        </div>
        <div
          className="flex flex-col-reverse lg:flex-row w-full justify-between items-center gap-2"
        >
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

const FooterLink: FunctionComponent<
  PropsWithChildren<LinkProps> & { className?: string | ClassValue[] }
> = ({ children, className, ...props }) => {
  return (
    <Link
      className={clsxtw(className)}
      {...props}
    >
      {children}
    </Link>
  );
};
