import { motion } from 'framer-motion';
import Container from '@/components/base/Container';
import Seo from '@/components/seo/Seo';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { parseMarkdown } from '@/lib/markdown';
import { getAbout } from '@/lib/content';
import Markdown from '@/components/markdown/Markdown';
import React from 'react';

export const getStaticProps: GetStaticProps = async () => {
  const about = await getAbout();
  return {
    props: {
      about,
    },
    revalidate: 10,
  };
};

export default function AboutPage({
  about,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className="relative">
      {/* bg-grid-slate-900/[0.06] bg-[top_1px_center] dark:bg-grid-gray-700/[0.6] */}
      <div
        className='absolute h-[40vh] bg-top inset-0 bg-gradient-to-b from-pink-200/30 dark:from-violet-500/20 to-transparent z-[-1]'
        style={{
          maskImage: 'linear-gradient(to top, transparent, rgba(0,0,0,0.8))',
          WebkitMaskImage:
            'linear-gradient(to top, transparent, rgba(0,0,0,0.8))',
        }}
      ></div>
      <Seo
        pageTitle={about.seo.title}
        description={about.seo.description}
        siteName='Partisipasiku'
        title={about.title}
        url='/tentang-kami'
        type='article'
      />
      <Container className='flex flex-col w-full lg:w-2/3'>
        <div className='flex flex-col mx-auto divide-gray-300 min-h-[90vh] gap-5 mt-10'>
          <motion.h1 className='text-3xl font-[700] font-body leading-loose'>
            {about.title}
          </motion.h1>
          <Markdown mdx={about.markdown} />
        </div>
      </Container>
    </div>
  );
}
