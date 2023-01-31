import { FunctionComponent } from 'react';
import Link from 'next/link';
import Card from '@/components/card/Card';
import { ArrowLongIcon } from '@/components/icons';
import SmoothTransitionImage from '../image/SmoothTransitionImage';
import { DEFAULT_PLACEHOLDER } from '@/lib/image';

interface IssueCardProps {
  title: string;
  slug: string;
  author?: string;
  priority?: boolean;
  cover: {
    url: string;
    placeholder: string;
    caption: string;
    altTxt?: string;
  };
}

const IssueCard: FunctionComponent<IssueCardProps> = ({
  title,
  slug,
  author,
  cover,
  priority = false,
}: IssueCardProps) => {
  return (
    <Card
      as={Link}
      href={`/isu/${slug}`}
      className='flex flex-col transition duration-200 ease-in-out cursor-pointer group bg-white dark:bg-slate-600/30 dark:border-slate-800 dark:shadow-slate-800 dark:hover:sc h-[200px] md:h-[300px] rounded-2xl shadow-md hover:shadow-xl dark:shadow-none dark:hover:ring-blue-500'
    >
      <div className='relative flex flex-col w-full h-[400px]'>
        <SmoothTransitionImage
          src={cover.url}
          className='object-cover'
          loading={priority ? 'eager' : 'lazy'}
          fill={true}
          alt={cover.altTxt ?? title}
          priority={priority}
          placeholder={priority ? 'empty' : 'blur'}
          blurDataURL={cover.placeholder ?? DEFAULT_PLACEHOLDER}
        />
      </div>
      <div className='flex h-[200px] flex-col items-start justify-between p-4'>
        <h5 className='font-[600] text-[0.98em] tracking-tight line-clamp-2'>
          {title}
        </h5>
        <div className='flex flex-row items-center justify-between w-full text-gray-500 dark:text-gray-200'>
          <p className='text-[0.79em]'>
            <span>{author ?? 'BPHN'}</span>
          </p>
          <ArrowLongIcon className='transition-transform duration-100 ease-linear -translate-x-2 group-hover:translate-x-0 group-hover:text-blue-500' />
        </div>
      </div>
    </Card>
  );
};

export default IssueCard;
