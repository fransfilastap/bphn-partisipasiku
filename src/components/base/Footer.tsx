import { ReactElement } from 'react';
import Link from 'next/link';

export default function Footer(): ReactElement {
  return (
    <footer className='font-sans text-gray-600 flex py-3 text-sm gap-1 flex-row items-center justify-center h-full border-t dark:border-t-gray-800 bg-[#fafafa] dark:bg-[#111]'>
      <span>&copy; {new Date().getFullYear()} By </span>
      <Link href='https://fransfp.dev'> Frans Filasta Pratama</Link>
    </footer>
  );
}
