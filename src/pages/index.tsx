import { Fragment, useEffect, useState } from 'react';
import Container from '@/components/base/Container';
import Seo from '@/components/seo/Seo';
import clsxtw from '@/lib/clsxtw';
import styles from './index.module.css';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import TopicCard from '@/components/card/TopicCard';
import Section from '@/components/section';
import { getIssues, getTopics } from '@/lib/content';
import { ContentIssue, ContentTopic } from '@/types/model';
import IssueGrid from '@/components/IssueGrid';
import { AppInfo } from '@/configs';
import useTimeout from '@/hooks/useTimeout';

export const getStaticProps: GetStaticProps = async () => {
  const issues = await getIssues({
    pagination: { limit: 10 },
    sort: ['createdAt:desc'],
  });
  const topics = await getTopics({
    pagination: { limit: 6 },
    sort: ['createdAt:desc'],
  });

  return {
    props: {
      issues,
      topics,
    },
    revalidate: 10,
  };
};

export default function Home({
  issues,
  topics,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Fragment>
      <Seo
        image={`${AppInfo.url}/og.jpg`}
        description={AppInfo.siteDescription}
      />
      <Masthead />
      <Container className='p-6 flex flex-col gap-10 md:p-4'>
        <HighlightedTopics topics={topics} />
        <HighlightedIssues issues={issues} />
      </Container>
    </Fragment>
  );
}

const Masthead = () => {
  const [visible, setVisible] = useState<boolean>(false);

  useTimeout(() => setVisible(true), 300);

  return (
    <section
      className={clsxtw(
        'relative h-[60vh] inset-0 dark:bg-bottom bg-top bg-no-repeat bg-slate-50 dark:bg-black border-b-slate-500/[0.2] border-b',
        styles.beams
      )}
    >
      <div
        className='absolute inset-0 bg-grid-slate-900/[0.04] dark:hidden bg-[bottom_1px_center] dark:bg-grid-slate-600/30 dark:bg-bottom dark:border-b dark:border-slate-100/5 z-[-1]'
        style={{
          maskImage: 'linear-gradient(to bottom, transparent, black)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black)',
        }}
      ></div>
      <div className='flex flex-col items-center justify-center h-full p-4 gap-y-3'>
        <h5 className='font-heading w-full p-4 text-4xl font-bold tracking-normal text-center text-black dark:text-white lg:text-7xl'>
          Kolaborasi Membangun Hukum.
        </h5>
        <p className='font-heading text-md text-center text-gray-500 dark:text-gray-100/80 md:text-2xl font-[400]'>
          Yuk! Sampaikan pendapatmu terkait isu peraturan perundang-undangan di
          Indonesia 🇮🇩
        </p>
      </div>
    </section>
  );
};

const HighlightedTopics = ({ topics }: { topics: ContentTopic[] }) => {
  return (
    <Section
      sectionTitle='Pilih Kategori'
      className='py-2 overflow-hidden'
      actionLink='/kategori'
      actionLabel='Lihat Semua'
    >
      <div className='grid grid-cols-2  gap-1 lg:flex lg:flex-row lg:gap-2'>
        {topics.map((e, _) => (
          <TopicCard
            key={e.slug}
            id={e.id}
            name={e.name}
            slug={e.slug}
          />
        ))}
      </div>
    </Section>
  );
};

const HighlightedIssues = ({ issues }: { issues: ContentIssue[] }) => {
  return (
    <Section
      sectionTitle='Topik Terbaru.'
      className='py-2 overflow-hidden'
      actionLink='/diskusi'
      actionLabel='Lihat Semua'
    >
      <IssueGrid issues={issues} />
    </Section>
  );
};
