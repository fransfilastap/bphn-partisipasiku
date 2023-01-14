import { ReactElement } from 'react';
import Card from '@/components/card/Card';

const IssueCardLoading = (): ReactElement => {
  return (
    <Card className='animate-pulse flex flex-col transition duration-200 ease-in-out cursor-pointer group bg-white/30 dark:bg-slate-600/30 dark:border-slate-600 dark:shadow-slate-800 dark:hover:border-gray-200/80 backdrop-blur-sm hover:border-slate-400/50 max-h-[380px]'>
      <div className='hidden relative md:flex flex-grow-0 w-full h-[calc(22vh+1rem)] overflow-hidden bg-slate-400'></div>
      <div className='flex flex-col items-start justify-between flex-1 p-4'>
        <div className='h-2 rounded bg-slate-200'></div>
        <div className='flex flex-row items-center justify-between w-full gap-3'>
          <div className='w-full h-2 rounded bg-slate-200'></div>
          <div className='w-full h-2 rounded bg-slate-200'></div>
        </div>
      </div>
    </Card>
  );
};

export default IssueCardLoading;
