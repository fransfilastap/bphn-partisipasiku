/* eslint-disable @next/next/no-img-element */
import { FunctionComponent, ReactElement, useEffect, useState } from 'react';
import Container from '@/components/base/Container';
import Seo from '@/components/seo/Seo';
import RootLayout from '@/components/layouts/RootLayout';
import Input from '@/components/base/Input';
import { ChevronDownIcon, SearchIcon } from '@/components/icons';
import IssueCard from '@/components/card/IssueCard';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { mockFetchIssues } from '@/server/mocks/issue';
import { Issue, IssueCategory } from '@/types';
import IssueCardLoading from '@/components/card/IssueCardLoading';
import IssuePile from '@/components/issue/IssuePile';
import mockFetchIssueCategories from '@/server/mocks/category';
import useMediaQuery from '@/hooks/useMediaQuery';
import clsxtw from '@/lib/clsxtw';
import { useToggle } from '@/hooks';

export default function Home({
  issues,
  categories,
}: InferGetStaticPropsType<typeof getStaticProps>): ReactElement {
  return (
    <RootLayout>
      <Seo />
      <Container>
        {/* <div
          className="absolute z-[-1] inset-0 bg-grid-slate-800/[0.08] bg-[bottom_1px_center] dark:bg-grid-slate-400/10 dark:bg-bottom dark:border-b dark:border-slate-100/5"
          style={{
            maskImage: 'linear-gradient(to bottom, transparent, black)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent, black)',
          }}
        ></div> */}
        <Masthead />
        <ContentGrid
          issues={issues}
          categories={categories}
        />
      </Container>
    </RootLayout>
  );
}

const Masthead = () => {
  return (
    <section className='min-h-[40vh] flex flex-col items-center justify-center gap-y-3'>
      <h5 className='w-full lg:w-[70vw]:p-4 text-5xl font-bold text-center tracking-tight text-black dark:text-white lg:text-7xl'>
        Kolaborasi Membangun Hukum.
      </h5>
      <p className='text-lg text-center text-gray-500 md:text-2xl font-[400]'>
        Sampaikan pendapatmu terhadap isu-isu terkait peraturan
        perundang-undangan di Indonesia, di sini!
      </p>
    </section>
  );
};

const ContentGrid = ({
  issues,
  categories,
}: {
  issues: Issue[];
  categories: IssueCategory[];
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <section className='z-0 flex flex-col gap-10 md:gap-20 lg:flex-row'>
      <IssueFilter categories={categories} />
      <div className='grid w-full grid-cols-1 gap-2 md:gap-8 md:grid-cols-3 lg:w-3/4'>
        {isLoading &&
          [1, 2, 3, 4, 5, 6, 7, 8, 8, 9].map((e) => (
            <IssueCardLoading key={e} />
          ))}
        {!isLoading &&
          issues.map((e, i) => (
            <IssueCard
              author={e.author}
              cover={e.cover}
              slug={e.slug}
              title={e.title}
              key={i}
            />
          ))}
      </div>
    </section>
  );
};

type IssueFilterProps = {
  categories: IssueCategory[];
};
const IssueFilter: FunctionComponent<IssueFilterProps> = ({
  categories,
}): ReactElement => {
  const isMediumSizedScreen = useMediaQuery('(min-width: 768px)');
  const [isOpen, setIsOpen] = useToggle(!isMediumSizedScreen);

  return (
    <aside className='flex flex-col justify-start w-full gap-2 lg:w-1/4'>
      <h5 className='font-[600] text-[0.9em] dark:text-white'>Filter</h5>
      <Input
        placeholder='Search...'
        leftIcon={<SearchIcon />}
      />
      <div className='flex flex-col gap-2'>
        <button
          aria-label='filter button'
          onClick={() => setIsOpen(!isOpen)}
          className='flex flex-row items-center justify-between w-full gap-2 p-2 border-t border-b appearance-none lg:hidden border-b-gray-100 border-t-gray-100 dark:border-b-gray-700 dark:border-t-gray-700'
        >
          <span className='font-[600] text-[0.9em] dark:text-white'>
            Filter By:
          </span>
          <ChevronDownIcon
            className={clsxtw(
              'transition duration-100 ease-linear -rotate-90',
              { 'rotate-0': !isOpen }
            )}
          />
        </button>
        <div className={clsxtw('flex flex-col gap-1', { hidden: !isOpen })}>
          {categories.map((e) => (
            <IssuePile
              key={e.slug}
              value={e.slug}
            >
              {e.title}
            </IssuePile>
          ))}
        </div>
      </div>
    </aside>
  );
};

export const getStaticProps: GetStaticProps = () => {
  const issues = mockFetchIssues();
  const categories = mockFetchIssueCategories();
  return {
    props: {
      issues,
      categories,
    },
  };
};
