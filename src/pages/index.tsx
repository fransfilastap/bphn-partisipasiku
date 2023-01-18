/* eslint-disable @next/next/no-img-element */
import { FunctionComponent, ReactElement, useEffect, useState } from 'react';
import Container from '@/components/base/Container';
import Seo from '@/components/seo/Seo';
import RootLayout from '@/components/layouts/RootLayout';
import Input from '@/components/base/Input';
import { ChevronDownIcon, SearchIcon } from '@/components/icons';
import IssueCard from '@/components/card/IssueCard';
import IssueCardLoading from '@/components/card/IssueCardLoading';
import useMediaQuery from '@/hooks/useMediaQuery';
import clsxtw from '@/lib/clsxtw';
import { useToggle } from '@/hooks';
import styles from './index.module.css';
import useSWR from 'swr';
import Checkbox from '@/components/base/Checkbox';
import fetcher from '@/lib/fetcher';
import { AllCategoryQueryQuery, GetIssueDocumentQuery } from '@/gql/graphql';
import { AllCategoryDocument, GetIssueDocument } from '@/types';

export default function Home(): ReactElement {
  const {
    data: categories,
    isLoading: categoryIsLoading,
    error: categoryError,
  } = useSWR<AllCategoryQueryQuery>(AllCategoryDocument, fetcher);
  const {
    data: issues,
    isLoading: issueIsloading,
    error: issueError,
  } = useSWR<GetIssueDocumentQuery>(GetIssueDocument, fetcher);

  return (
    <RootLayout>
      <Seo />
      <Masthead />
      <Container className='p-6 md:p-4'>
        <ContentGrid
          issues={issues!}
          categories={categories!}
        />
      </Container>
    </RootLayout>
  );
}

const Masthead = () => {
  return (
    <section
      className={clsxtw(
        'relative h-[70vh] md:h-[50vh] inset-0 dark:bg-bottom bg-top bg-no-repeat bg-slate-50 dark:bg-black border-b-slate-500/[0.2] border-b',
        styles.beams
      )}
    >
      <div
        className='absolute inset-0 bg-grid-slate-900/[0.04] bg-[bottom_1px_center] dark:bg-grid-slate-600/30 dark:bg-bottom dark:border-b dark:border-slate-100/5 z-[-1]'
        style={{
          maskImage: 'linear-gradient(to bottom, transparent, black)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black)',
        }}
      ></div>
      <div className='flex flex-col items-center justify-center h-full p-4 gap-y-3'>
        <h5 className='w-full p-4 text-5xl font-bold tracking-tight text-center text-black dark:text-white lg:text-7xl'>
          Kolaborasi Membangun Hukum.
        </h5>
        <p className='text-lg text-center text-gray-500 md:text-2xl font-[400]'>
          Sampaikan pendapatmu terhadap isu-isu terkait peraturan
          perundang-undangan di Indonesia, di sini!
        </p>
      </div>
    </section>
  );
};

const ContentGrid = ({
  issues,
  categories,
}: {
  issues: GetIssueDocumentQuery;
  categories: AllCategoryQueryQuery;
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <section className='flex flex-col md:gap-20 lg:flex-row'>
      <IssueFilter categories={categories} />
      <div className='grid w-full grid-cols-1 gap-2 md:gap-8 md:grid-cols-3 lg:w-3/4'>
        {isLoading &&
          [1, 2, 3, 4, 5, 6, 7, 8, 11, 9].map((e) => (
            <IssueCardLoading key={e} />
          ))}
        {!isLoading &&
          issues.issues?.data.map((e, i) => (
            <IssueCard
              author=""
              cover={e.attributes?.Cover?.data?.attributes?.url!}
              slug={e.attributes?.slug!}
              title={e.attributes?.Title!}
              key={e.attributes?.slug}
              priority={i < 3}
            />
          ))}
      </div>
    </section>
  );
};

type IssueFilterProps = {
  categories: AllCategoryQueryQuery;
};
const IssueFilter: FunctionComponent<IssueFilterProps> = ({
  categories,
}): ReactElement => {
  const isMediumSizedScreen = useMediaQuery('(min-width: 768px)');
  const [isOpen, setIsOpen] = useToggle(!isMediumSizedScreen); // <-- todo

  return (
    <aside className='flex flex-col justify-start w-full gap-2 lg:w-1/4'>
      <h5 className='font-[600] text-[0.9em] dark:text-white hidden md:block'>
        Filter
      </h5>
      <Input
        placeholder='Search...'
        leftIcon={<SearchIcon />}
      />
      <div className='flex flex-col gap-2 mb-4'>
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
          {categories &&
            categories?.categories?.data.map((e: any) => (
              <Checkbox
                key={e?.attributes.slug}
                label={e?.attributes.name}
                value={e?.id}
              />
            ))}
        </div>
      </div>
    </aside>
  );
};
