import { motion } from 'framer-motion';
import Container from '@/components/base/Container';
import Seo from '@/components/seo/Seo';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { parseMarkdown } from '@/lib/markdown';
import { getAbout } from '@/lib/content';
import Markdown from '@/components/markdown/Markdown';

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
    <>
      <Seo
        pageTitle={about.seo.title}
        description={about.seo.description}
        siteName='Partisipasiku'
        title={about.title}
        url='/tentang-kami'
        type='article'
      />
      <Container className='flex flex-col items-center justify-start '>
        <div className='flex flex-col lg:flex-row w-full divide-gray-300 min-h-[90vh] md:gap-0 gap-5 py-10'>
          <aside className='flex flex-col w-full lg:w-1/3'>
            <div className='flex flex-col'>
              <motion.h1 className='text-3xl lg:text-5xl font-[700] font-body leading-loose'>
                {about.title}
              </motion.h1>
              <h5 className='text-lg font-heading font-[400] text-gray-700 dark:text-gray-300 '>
                Tentang Partisipasiku
              </h5>
            </div>
          </aside>
          <Markdown
            mdx={about.markdown}
            className='w-full lg:w-2/3 '
          />
        </div>
      </Container>
    </>
  );
}
