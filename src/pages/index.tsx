import { Fragment } from 'react';
import Container from '@/components/base/Container';
import Seo from '@/components/seo/Seo';
import IssueCard from '@/components/card/IssueCard';
import clsxtw from '@/lib/clsxtw';
import styles from './index.module.css';
import { GetIssuesQuery, GetTopicsQuery } from '@/gql/graphql';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import TopicCard from '@/components/card/TopicCard';
import Section from '@/components/section';
import { getIssues, getTopics } from '@/lib/content';

export const getStaticProps: GetStaticProps = async () => {
  const issues = await getIssues();
  const topics = await getTopics({ limit: 4 });

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
        <p className='font-mono text-lg text-center text-gray-500 md:text-2xl font-[400]'>
          Sampaikan pendapatmu tentang isu peraturan perundang-undangan di
          Indonesia di sini!
        </p>
      </div>
    </section>
  );
};

const HighlightedTopics = ({ topics }: { topics: GetTopicsQuery }) => {
  return (
    <Section
      sectionTitle='Topik Terpopuler'
      className='py-2 overflow-hidden'
      actionLink='/topik'
      actionLabel='Lihat Semua'
    >
      <div className='flex overflow-x-auto flex-nowrap snap-x snap-mandatory lg:grid lg:grid-cols-4 lg:grid-rows-1 scrollbar-hide'>
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

const HighlightedIssues = ({ issues }: { issues: GetIssuesQuery }) => {
  return (
    <Section
      sectionTitle='Isu Pilihan'
      className='py-2 overflow-hidden'
      actionLink='/isu'
      actionLabel='Lihat Semua'
    >
      <div className='grid w-full grid-cols-1 gap-2 md:gap-8 md:grid-cols-4'>
        {issues.issues?.data.map((e, i) => (
          <IssueCard
            cover={{
              placeholder: e.attributes?.cover?.data?.attributes?.placeholder!,
              url: e.attributes?.cover?.data?.attributes?.url!,
              caption: e.attributes?.cover?.data?.attributes?.caption!,
            }}
            priority={i <= 4}
            slug={e.attributes?.slug!}
            title={e.attributes?.title!}
            key={e.attributes?.slug}
          />
        ))}
      </div>
    </Section>
  );
};
