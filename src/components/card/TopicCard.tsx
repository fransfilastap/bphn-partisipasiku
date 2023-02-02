import Link from 'next/link';
import { FunctionComponent } from 'react';
import Card from './Card';
import { ArrowLongRightIcon } from '@/components/icons';

interface TopicCardProps {
  id: string;
  slug: string;
  name: string;
}

const TopicCard: FunctionComponent<TopicCardProps> = (props) => {
  return (
    <Card
      as={Link}
      href={`topik/${props.slug}`}
      className='group flex flex-row flex-none snap-always snap-center justify-between shadow items-center p-4 gap-6 transition duration-200 ease-in-out cursor-pointer bg-white/30 dark:bg-slate-800/30 rounded-2xl h-[70px] shadow-none border-none ring-1 ring-gray-200 dark:ring-slate-900 dark:hover:ring-slate-600 hover:ring-black my-2 mx-2'
    >
      <span className='text-[0.9rem] md:text-[1rem] font-heading tracking-normal text-gray-700 dark:text-gray-100 font-[500]'>
        {props.name}
      </span>
      <span className='p-2 rounded-full border border-gray-300 transition-transform duration-100 ease-linear group-hover:-rotate-45 group-hover:bg-gray-100  dark:group-hover:bg-slate-600 group-hover:scale-[1.2]'>
        <ArrowLongRightIcon className='h-3 w-3' />
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
