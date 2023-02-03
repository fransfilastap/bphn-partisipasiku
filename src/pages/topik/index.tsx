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
        pageTitle='Topik/Kategori Isu'
        description='Topik/Kategori Isu Peraturan Perundangan-undangan'
        title='Topik/Kategori Isu Peraturan Perundangan-undangan'
        type='article'
      />
      <Container className='p-6 md:p-4'>
        <div className='py-10 flex flex-col gap-2'>
          <motion.h5
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className='text-5xl font-body font-bold'
          >
            Topik/Kategori Isu
          </motion.h5>
          <motion.p
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className='font-body text-xl tracking-tighter'
          >
            Topik/Kategori Isu
          </motion.p>
        </div>
        <div className='flex overflow-x-auto flex-nowrap snap-x snap-mandatory lg:grid lg:grid-cols-4 lg:grid-rows-1 scrollbar-hide'>
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
