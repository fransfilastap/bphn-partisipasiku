import {
  ComponentPropsWithoutRef,
  forwardRef,
  ReactElement,
  ReactNode,
  Ref,
} from 'react';
import Container from './Container';
import Logo from './Logo';
import ColorModeSwitcher from '@/components/ColorModeSwitcher';
import Link, { LinkProps } from 'next/link';
import { ClassValue } from 'clsx';
import clsxtw from '@/lib/clsxtw';

export default function Footer(): ReactElement {
  return (
    <footer className='font-sans flex py-3 text-sm gap-1 flex-row items-center justify-center border-t dark:border-t-gray-800 bg-[#fafafa] dark:bg-[#111] mt-20'>
      <Container className='flex flex-col items-start justify-between gap-20'>
        <div className='grid items-start justify-center w-full grid-cols-1 grid-rows-2 gap-5 py-5 lg:gap-10 lg:grid-cols-3 lg:grid-rows-1'>
          <div className='flex flex-col items-start justify-start w-full gap-2 max-h-max text-gray-600 dark:text-gray-400 font-[300]'>
            <Logo />
            <p>Dikelola oleh Badan Pembinaan Hukum Nasional</p>
            <p>Jl. Mayjend Sutoyo, Cililitan, Jakarta Timur</p>
            <p>Telp : +62-21 8091908 (hunting)</p>
            <p>Faks : +62-21 8011753</p>
            <p>Faks : +62-21 8011753</p>
          </div>
          <div className='flex flex-col items-start gap-3'>
            <p className='text-black dark:text-white font-body text-sm font-[500] dark:font-[300]'>
              Tautan Terkait
            </p>
            <ul className='flex flex-col gap-1 list-none'>
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
          <div className='flex flex-col items-start gap-3'>
            <p className='text-black dark:text-white font-body text-sm font-[500] dark:font-[300]'>
              Media Sosial
            </p>
            <ul className='flex flex-col gap-1 list-none'>
              <li>
                <SocialLink url='https://www.instagram.com/bphn_kemenkumham/'>
                  Instagram
                </SocialLink>
              </li>
              <li>
                <SocialLink url='https://twitter.com/bphn_kumham'>
                  Twitter
                </SocialLink>
              </li>
              <li>
                <SocialLink url='https://www.youtube.com/user/bphntv'>
                  Youtube
                </SocialLink>
              </li>
              <li>
                <SocialLink url='https://www.tiktok.com/@bphn_kemenkumham?lang=id-ID'>
                  TikTok
                </SocialLink>
              </li>
              <li>
                <SocialLink url='https://www.facebook.com/bphnkemenkumhamRI'>
                  Facebook
                </SocialLink>
              </li>
              <li>
                <SocialLink url='https://open.spotify.com/show/3gPOGhyHpurIeylgQgs2Da?si=331a9b0cc69741d7&nd=1'>
                  Spotify
                </SocialLink>
              </li>
            </ul>
          </div>
        </div>
        <div className='flex flex-col-reverse items-center justify-between w-full gap-2 lg:flex-row'>
          <p className='flex flex-col text-[0.9em] text-center lg:text-left'>
            Copyright &copy; {new Date().getFullYear()} BPHN.go.id. All rights
            reserved{' '}
            <span className="text-gray-600">
              Developed and Maintained by Sub Bagian Rumah Tangga
            </span>
          </p>

          <ColorModeSwitcher />
        </div>
      </Container>
    </footer>
  );
}

type ShareItemLinkProps = LinkProps & {
  children: ReactNode;
};

const FooterLink = forwardRef(
  (
    { href, children, ...props }: ShareItemLinkProps,
    ref: Ref<HTMLAnchorElement>
  ) => (
    <Link
      ref={ref}
      href={href}
      target='_blank'
      className='group text-gray-600 dark:text-gray-400 text-[0.99em] font-[300] hover:text-black dark:hover:text-gray-300'
    >
      {children}
    </Link>
  )
);

const SocialLink = ({ url, children }: { url: string; children: string }) => (
  <FooterLink href={url}>
    <span className='flex flex-row items-center justify-between gap-1'>
      {children}
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className='w-3 h-3 transition-all duration-75 ease-linear -translate-x-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25'
        />
      </svg>
    </span>
  </FooterLink>
);
