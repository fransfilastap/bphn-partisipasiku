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
      <Container className='flex flex-col w-full'>
        <div className='flex flex-col w-1/2 mx-auto divide-gray-300 min-h-[90vh] gap-5 mt-10'>
          <motion.h1 className='text-3xl lg:text-5xl font-[700] font-body leading-loose'>
            {about.title}
          </motion.h1>
          <Markdown mdx={about.markdown} />
        </div>
      </Container>
    </>
  );
}
