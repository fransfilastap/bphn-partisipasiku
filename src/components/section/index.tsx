import clsxtw from '@/lib/clsxtw';
import Link from 'next/link';
import { ComponentPropsWithoutRef, FunctionComponent } from 'react';
import { ArrowLongRightIcon } from '../icons';

type SectionProps = ComponentPropsWithoutRef<'section'> & {
  sectionTitle: string;
  actionLabel: string;
  actionLink: string;
};

const Section: FunctionComponent<SectionProps> = ({
  sectionTitle,
  className,
  children,
  actionLabel,
  actionLink,
  ...props
}) => {
  return (
    <section className={clsxtw('flex flex-col gap-2')}>
      <div className='flex flex-row items-center justify-between'>
        <h5 className='font-heading border-b-4 border-b-blue-500 dark:border-0 pb-2 text-black dark:text-white font-[600] text-xl lg:text-2xl my-2'>
          {sectionTitle}
        </h5>
        <Link
          href={actionLink}
          className='inline-flex gap-2 border border-gray-100 dark:border-slate-800 bg-gray-50 dark:bg-gray-900 p-2 max-w-max rounded items-center text-xs text-slate-900 dark:text-white md:text-sm group'
        >
          <span>{actionLabel}</span>{' '}
          <ArrowLongRightIcon className='w-5 h-5 transition-transform duration-150 ease-linear group-hover:translate-x-2' />
        </Link>
      </div>
      {children}
    </section>
  );
};

export default Section;
