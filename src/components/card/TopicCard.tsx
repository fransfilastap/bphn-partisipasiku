import Link from 'next/link';
import { FunctionComponent } from 'react';
import { ArrowLongRightIcon } from '../icons';
import Card from './Card';

interface TopicCardProps {
  id: string;
  slug: string;
  name: string;
}

const TopicCard: FunctionComponent<TopicCardProps> = (props) => {
  return (
    <Card
      as={Link}
      href={`kategori/${props.slug}`}
      className='group flex flex-col flex-none snap-always snap-center justify-center items-center p-3 lg:p-10 gap-1 transition duration-200 ease-in-out cursor-pointer bg-white dark:bg-gray-700/30 rounded-lg h-[60px] shadow-sm dark:shadow-none border-none ring-1 ring-gray-200 dark:ring-gray-800 dark:hover:ring-gray-600 hover:ring-black my-2 mx-2'
    >
      <span className='text-[0.9rem] tracking-tight text-gray-700 dark:text-gray-100 font-[600] translate-y-[10px] group-hover:translate-y-0 transition-all duration-100 ease-linear'>
        {props.name}
      </span>
      <span className='flex flex-row gap-1 justify-between items-center group-hover:opacity-100 group-hover:translate-y-0 transition-all delay-75 duration-100 ease-linear text-[0.66em] opacity-0 translate-y-[10px] '>
        Selengkapnya <ArrowLongRightIcon className='w-3 h-3' />{' '}
      </span>
    </Card>
  );
};

export const TopicCardLoading = () => {
  return (
    <div className='transition duration-200 bg-gray-500  animate-pulse ring-1 ring-gray-200 shadow-md ease-in-out bg-white/30 dark:bg-slate-600 rounded-xl  dark:shadow-slate-800 w-[100px] h-[50px] p-3'></div>
  );
};

export default TopicCard;
