import React, { forwardRef } from 'react';
import { ArrowSmallLeftIcon } from '@/components/icons';
import { useRouter } from 'next/navigation';

interface BackButtonProps {
  children?: string;
}

const BackButton = forwardRef(({ children = 'Kembali' }: BackButtonProps) => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className='appearance-none text-gray-400 inline-flex max-w-max items-center text-sm hover:text-gray-800 dark:hover:text-white transition-colors duration-200 ease-in-out'
    >
      <ArrowSmallLeftIcon className='w-5 h-4' />
      <span>{children}</span>
    </button>
  );
});

export default BackButton;
