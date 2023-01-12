/* eslint-disable @next/next/no-img-element */
import { ReactElement } from 'react';
import Link from 'next/link';
import Container from '@/components/base/Container';
import Seo from '@/components/seo/Seo';
import RootLayout from '@/components/layouts/RootLayout';

export default function Home(): ReactElement {
  return (
    <RootLayout>
      <Seo />
      <Container className='flex flex-col items-center justify-center min-h-screen gap-2 overflow-hidden'>
        <div
          className="absolute min-h-screen z-[-1] inset-0 bg-grid-slate-800/10 bg-[bottom_1px_center] dark:bg-grid-slate-400/10 dark:bg-bottom dark:border-b dark:border-slate-100/5"
          style={{
            maskImage: 'linear-gradient(to bottom, transparent, black)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent, black)',
          }}
        ></div>
        <h5 className='text-xl font-bold text-center text-black md:text-4xl dark:text-white'>
          Next.js + Tailwind CSS + TypeScript Starter
        </h5>
        <p className='text-sm font-semibold text-center text-gray-800 dark:text-gray-400'>
          Included ESLint, Prettier, Lint-Staged and Commit Lint{' '}
        </p>
        <div className='flex flex-col items-center justify-center gap-1 mt-4 md:flex-row'>
          <Link
            aria-label='Deploy to Vercel'
            rel='noopener noreferrer'
            href='https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Ffransfilastap%2Fnextjs-ts-tailwindcss-starter'
          >
            <img
              src='https://vercel.com/button'
              alt='Vercel deploy button'
              width={92}
              height={32}
            />
          </Link>
          <Link
            aria-label='Deploy to Netlify'
            rel='noopener noreferrer'
            href='https://app.netlify.com/start/deploy?repository=https://github.com/fransfilastap/nextjs-ts-tailwindcss-starter'
          />
          <img
            src='https://www.netlify.com/img/deploy/button.svg'
            alt='Netlify deploy button'
            height='32px'
            width='146px'
          />
        </div>
        <Link
          className='inline-flex items-center gap-2 p-1 text-sm bg-gray-200 rounded hover:bg-gray-500 dark:hover:bg-slate-600 dark:bg-slate-500'
          aria-label='open github'
          href='https://github.com/fransfilastap/nextjs-ts-tailwindcss-starter'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 16 16'
            width='16'
            height='16'
          >
            <path d='M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z'></path>
          </svg>
          <span>Open Github</span>
        </Link>
      </Container>
    </RootLayout>
  );
}
