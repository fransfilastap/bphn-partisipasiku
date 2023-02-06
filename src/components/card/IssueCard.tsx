import { FunctionComponent } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Card from '@/components/card/Card';
import { ArrowLongIcon } from '@/components/icons';
import AdvanceImage from '../image/AdvanceImage';
import { DEFAULT_PLACEHOLDER } from '@/lib/image';

interface IssueCardProps {
  title: string;
  slug: string;
  topic?: string;
  priority?: boolean;
  cover: {
    url: string;
    publicId: string;
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
        href={`/diskusi/${slug}`}
        className='flex p-3 gap-2 flex-row md:flex-col items-center transition duration-200 ease-in-out cursor-pointer group bg-gray-200/30 dark:bg-gray-700/30 hover:bg-gray-100 dark:ring-gray-900 dark:hover:bg-slate-600/30  rounded-md shadow-none h-full'
      >
        <div className='relative overflow-hidden rounded-md w-[80px] h-[80px] md:w-full md:h-[150px]'>
          <AdvanceImage
            imageId={cover.publicId}
            className='object-cover rounded-md'
            loading={priority ? 'eager' : 'lazy'}
            fill={true}
            alt={cover.altTxt ?? title}
            priority={priority}
            sizes='100vw'
            blurDataURL={cover.placeholder ?? DEFAULT_PLACEHOLDER}
          />
        </div>
        <div className='flex flex-col h-full md:max-h-max flex-1 justify-between px-0 py-1 lg:p-4'>
          <h5 className='text-gray-800 dark:text-white font-[500] text-[1em] leading-[1.4] tracking-normal line-clamp-3'>
            {title}
          </h5>
          <p className='text-[0.79em] text-gray-500'>{topic}</p>
        </div>
      </Card>
    </motion.div>
  );
};

export default IssueCard;
