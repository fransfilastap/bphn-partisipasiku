import Link from 'next/link';
import { FunctionComponent } from 'react';
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
      href={`topik/${props.slug}`}
      className='flex flex-none snap-always snap-center flex-col dark:ring-slate-600 justify-center items-center p-4 transition duration-200 ease-in-out cursor-pointer bg-white/30 dark:bg-slate-800/30 rounded-xl h-[70px] shadow-none border-none ring-1 ring-gray-200 dark:hover:ring-slate-800 hover:ring-blue-400 my-2 mx-2'
    >
      <span className='text-sm tracking-normal text-slate-800 dark:text-gray-100 font-[500]'>
        {props.name}
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
