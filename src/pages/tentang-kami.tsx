import Container from '@/components/base/Container';
import Seo from '@/components/seo/Seo';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { parseMarkdown } from '@/lib/markdown';
import { getAbout } from '@/lib/content';
import Markdown from '@/components/markdown/Markdown';

export const getStaticProps: GetStaticProps = async () => {
  const about = await getAbout();
  const parsedMarkdown = await parseMarkdown(
    about.about?.data?.attributes?.Description!
  );

  return {
    props: {
      about,
      parsedMarkdown,
    },
  };
};

export default function AboutPage({
  about,
  parsedMarkdown,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Seo
        pageTitle={about.about?.data?.attributes?.title ?? 'Tentang Kami'}
        description={about.about?.data?.attributes?.Seo?.metaDescription}
        siteName='Partisipasiku'
        title={about.about?.data?.attributes?.Seo?.metaTitle}
        url='/tentang-kami'
        type='article'
      />
      <Container className='flex flex-col items-center justify-start '>
        <div className='flex flex-col md:flex-row w-full divide-gray-300 min-h-[90vh] md:gap-0 gap-5'>
          <aside className='flex flex-col w-full md:w-[300px] md:border-r md:border-gray-300'>
            <h5 className='text-3xl font-[600] tracking-wider'>
              {about.about?.data?.attributes?.title ?? 'Tentang Kami'}
            </h5>
            <p className='text-gray-800 dark:text-gray-300'>
              Tentang Partisipasiku
            </p>
          </aside>
          <section className='flex flex-col w-full md:w-2/3'>
            <Markdown mdx={parsedMarkdown} />
          </section>
        </div>
      </Container>
    </>
  );
}
