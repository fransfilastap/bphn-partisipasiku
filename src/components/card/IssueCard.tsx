import { FunctionComponent } from 'react';
import Link from 'next/link';
import Card from '@/components/card/Card';
import { ArrowLongIcon } from '@/components/icons';
import SmoothTransitionImage from '../image/SmoothTransitionImage';

interface IssueCardProps {
  cover: string;
  title: string;
  slug: string;
  author: string;
  priority: boolean;
}

const IssueCard: FunctionComponent<IssueCardProps> = ({
  cover,
  title,
  slug,
  author,
  priority = false,
}: IssueCardProps) => {
  return (
    <Card
      as={Link}
      href={slug}
      className='flex flex-col transition duration-200 ease-in-out cursor-pointer group bg-white dark:bg-slate-600/30 dark:border-slate-600 dark:shadow-slate-800 dark:hover:border-gray-200/80 hover:border-slate-400/50 h-[300px]'
    >
      <div className='relative flex flex-col  w-full min-h-[200px]'>
        <SmoothTransitionImage
          src={cover}
          className='object-cover object-center'
          loading={priority ? 'eager' : 'lazy'}
          fill
          alt={title}
          priority={priority}
        />
      </div>
      <div className='flex flex-col items-start justify-between flex-1 p-4'>
        <h5 className='font-[600] text-[0.98em] tracking-tight'>{title}</h5>
        <div className='flex flex-row items-center justify-between w-full text-gray-500 dark:text-gray-200'>
          <p className='text-[0.79em]'>
            Oleh <span>{author}</span>
          </p>
          <ArrowLongIcon className='transition-transform duration-100 ease-linear -translate-x-2 group-hover:translate-x-0 group-hover:text-blue-500' />
        </div>
      </div>
    </Card>
  );
};

export default IssueCard;
