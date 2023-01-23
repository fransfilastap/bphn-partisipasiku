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
        <h5 className='border-l-4 border-l-violet-500 pl-2 text-black dark:text-white font-[600] text-xl my-2'>
          {sectionTitle}
        </h5>
        <Link
          href={actionLink}
          className='inline-flex items-center text-xs text-blue-500 md:text-sm group'
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
