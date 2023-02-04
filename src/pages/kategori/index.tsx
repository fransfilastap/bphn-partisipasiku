import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { ChangeEvent, Fragment, useCallback, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import Seo from '@/components/seo/Seo';
import Container from '@/components/base/Container';
import { getTopics } from '@/lib/content';
import { ContentTopic } from '@/types/model';
import TopicCard from '@/components/card/TopicCard';

export const getStaticProps: GetStaticProps = async () => {
  const topics = await getTopics({ sort: 'createdAt:asc' });
  return {
    props: {
      topics,
    },
    revalidate: 10,
  };
};
export default function TopicPage({
  topics,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Fragment>
      <Seo
        pageTitle='Kategori Topik'
        description='Kategori Topik Isu Peraturan Perundangan-undangan'
        title='Kategori Topik isu Peraturan Perundangan-undangan'
        type='article'
      />
      <Container className='p-6 md:p-4 min-h-[80vh] w-full lg:w-2/3'>
        <motion.h5
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className='text-2xl font-body my-10 font-bold border-b-4 border-b-blue-500 max-w-max'
        >
          Kategori Topik
        </motion.h5>
        <div className='grid grid-cols-2 lg:grid-cols-4'>
          {topics.map((e: ContentTopic) => (
            <TopicCard
              key={e.slug}
              id={e.id}
              name={e.name}
              slug={e.slug}
            />
          ))}
        </div>
      </Container>
    </Fragment>
  );
}