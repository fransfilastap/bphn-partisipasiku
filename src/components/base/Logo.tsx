import { ReactElement } from 'react';

export default function Logo(): ReactElement {
  return (
    <div className='flex flex-row items-center justify-around md:gap-3'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className='w-6 h-6 text-violet-500'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z'
        />
      </svg>
      <span className='font-bold text-black dark:text-white'>
        Nex<span className='text-blue-600'>TS</span>
        <span className='text-violet-500'>tw</span>arter
      </span>
    </div>
  );
}
