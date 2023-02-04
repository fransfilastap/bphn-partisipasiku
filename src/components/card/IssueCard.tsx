import { FunctionComponent } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Card from '@/components/card/Card';
import { ArrowLongIcon } from '@/components/icons';
import SmoothTransitionImage from '../image/SmoothTransitionImage';
import { DEFAULT_PLACEHOLDER } from '@/lib/image';

interface IssueCardProps {
  title: string;
  slug: string;
  topic?: string;
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
  topic,
  cover,
  priority = false,
}: IssueCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 1.02 }}
    >
      <Card
        as={Link}
        href={`/isu/${slug}`}
        className='flex p-3 flex-col transition duration-200 ease-in-out cursor-pointer group bg-none hover:bg-gray-100 dark:ring-gray-900 dark:hover:bg-slate-600/30  rounded-md shadow-none h-full'
      >
        <div className='relative lg:block hidden aspect-video'>
          <SmoothTransitionImage
            src={cover.url}
            className='object-cover rounded-md'
            loading={priority ? 'eager' : 'lazy'}
            fill={true}
            alt={cover.altTxt ?? title}
            priority={priority}
            sizes='100vw'
            blurDataURL={cover.placeholder ?? DEFAULT_PLACEHOLDER}
          />
        </div>
        <div className='flex flex-col justify-between px-0 py-3 lg:p-4'>
          <h5 className='font-heading font-[400] text-xl leading-7 tracking-tight line-clamp-3'>
            {title}
          </h5>
          <div className='flex flex-row items-center justify-between w-full text-gray-500 dark:text-gray-200'>
            <p className='text-[0.79em] text-gray-600'>
              <span>{topic}</span>
            </p>
            <ArrowLongIcon className='hidden w-8 h-8 transition-transform duration-100 ease-linear -translate-x-2 group-hover:translate-x-0 group-hover:text-blue-500' />
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default IssueCard;
