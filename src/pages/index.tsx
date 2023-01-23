import { Fragment, ReactElement, useEffect, useState } from 'react';
import Container from '@/components/base/Container';
import Seo from '@/components/seo/Seo';
import Input from '@/components/base/Input';
import { ChevronDownIcon, SearchIcon } from '@/components/icons';
import IssueCard from '@/components/card/IssueCard';
import IssueCardLoading from '@/components/card/IssueCardLoading';
import useMediaQuery from '@/hooks/useMediaQuery';
import clsxtw from '@/lib/clsxtw';
import { useToggle } from '@/hooks';
import styles from './index.module.css';
import useSWR, { SWRConfig } from 'swr';
import fetcher from '@/lib/fetcher';
import {
  GetIssueDocument,
  GetIssueQuery,
  GetTopicsDocument,
  GetTopicsQuery,
  PaginationArg,
  TopicFiltersInput,
} from '@/gql/graphql';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import TopicCard, { TopicCardLoading } from '@/components/card/TopicCard';
import Section from '@/components/section';
import gql from 'graphql-tag';

export const getStaticProps: GetStaticProps = async () => {
  const issues = await fetcher(GetIssueDocument);
  const topics = await fetcher(GetTopicsDocument, { pagination: { limit: 4 } });

  return {
    props: {
      issues,
      topics,
    },
  };
};

export default function Home({
  issues,
  topics,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Fragment>
      <Seo />
      <Masthead />
      <Container className='p-6 md:p-4'>
        <HighlightedTopics topics={topics} />
        <HighlightedIssues issues={issues} />
      </Container>
    </Fragment>
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

const HighlightedTopics = ({ topics }: { topics: GetTopicsQuery }) => {
  return (
    <Section
      sectionTitle='Topic Terpopuler'
      className='py-2 overflow-hidden'
      actionLink='/topics'
      actionLabel='Lihat Semua'
    >
      <div className='flex overflow-x-auto flex-nowrap snap-x snap-mandatory lg:grid lg:grid-cols-4 lg:grid-rows-1'>
        {topics.topics?.data.map((e, _) => (
          <TopicCard
            key={e.attributes?.slug}
            id={e.id!}
            name={e.attributes?.name!}
            slug={e.attributes?.slug!}
          />
        ))}
      </div>
    </Section>
  );
};

const HighlightedIssues = ({ issues }: { issues: GetIssueQuery }) => {
  return (
    <Section
      sectionTitle='Highlight'
      className='py-2 overflow-hidden'
      actionLink='/topics'
      actionLabel='Lihat Semua'
    >
      <div className='grid w-full grid-cols-1 gap-2 md:gap-8 md:grid-cols-4'>
        {issues?.issues?.data.map((e, i) => (
          <IssueCard
            author=''
            cover={{
              placeholder: e.attributes?.cover?.data?.attributes?.placeholder!,
              url: e.attributes?.cover?.data?.attributes?.url!,
              caption: e.attributes?.cover?.data?.attributes?.caption!,
            }}
            slug={e.attributes?.slug!}
            title={e.attributes?.title!}
            key={e.attributes?.slug}
          />
        ))}
      </div>
    </Section>
  );
};
