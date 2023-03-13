import Link from 'next/link';
import { FunctionComponent } from 'react';
import { ArrowLongRightIcon } from '../icons';
import Card from './Card';
import AdvanceImage from '@/components/image/AdvanceImage';
import { DEFAULT_PLACEHOLDER } from '@/lib/strapi-image';

interface TopicCardProps {
  id: string;
  slug: string;
  name: string;
  cover: {
    url: string;
    publicId: string;
    placeholder: string;
    caption: string;
    altTxt?: string;
  };
}

const TopicCard: FunctionComponent<TopicCardProps> = (props) => {
  return (
    <Card
      as={Link}
      href={`kategori/${props.slug}`}
      className='group relative flex flex-col flex-none snap-always snap-center justify-center items-center gap-1 transition duration-200 ease-in-out cursor-pointer bg-white dark:bg-gray-700/30 rounded-lg h-[200px] shadow-sm dark:shadow-none border-none ring-1 ring-gray-200 dark:ring-gray-800 dark:hover:ring-gray-600 hover:ring-black my-2 mx-2'
    >
      <div className='top-0 left-0 z-0 absolute md:block overflow-hidden rounded-md w-full h-full brightness-75'>
        <AdvanceImage
          src={`${props.cover.publicId}`}
          className='object-cover w-full h-full'
          loading="lazy"
          alt="Example"
          priority={true}
          width={100}
          height={80}
          blurDataURL={props.cover.placeholder ?? DEFAULT_PLACEHOLDER}
        />
      </div>
      <div className="z-1 relative flex flex-col text-white">
        <span className='text-lg tracking-tight  font-[600] translate-y-[10px] group-hover:translate-y-0 transition-all duration-100 ease-linear'>
          {props.name}
        </span>
        <span className='flex flex-row gap-1 justify-between items-center group-hover:opacity-100 group-hover:translate-y-0 transition-all delay-75 duration-100 ease-linear text-[0.66em] opacity-0 translate-y-[10px] '>
          Selengkapnya <ArrowLongRightIcon className='w-3 h-3' />{' '}
        </span>
      </div>
    </Card>
  );
};

export const TopicCardLoading = () => {
  return (
    <div className='transition duration-200 bg-gray-500  animate-pulse ring-1 ring-gray-200 shadow-md ease-in-out bg-white/30 dark:bg-slate-600 rounded-xl  dark:shadow-slate-800 w-[100px] h-[50px] p-3'></div>
  );
};

export default TopicCard;
