import { FunctionComponent, Suspense } from 'react';
import { motion } from 'framer-motion';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import Container from '@/components/base/Container';
import Seo from '@/components/seo/Seo';
import Link from 'next/link';
import MarkdownComponents from '@/components/markdown';
import SmoothTransitionImage from '@/components/image/SmoothTransitionImage';
import { ArrowSmallLeftIcon } from '@/components/icons';
import Markdown from '@/components/markdown/Markdown';
import dynamic from 'next/dynamic';
import Disqus from '@/components/Disqus';

type IssueProps = {
  title: string;
  description: string;
  slug: string;
  topic: string;
  cover: {
    url: string;
    placeholder: string;
    caption?: string;
    alternateText: string;
  };
  markdownContent: MDXRemoteSerializeResult;
};

const IssueLayout: FunctionComponent<IssueProps> = ({
  title,
  slug,
  description,
  topic,
  cover,
  markdownContent,
}) => {
  return (
    <Container className='relative flex flex-col md:gap-6 md:divide-gray-300 gap-6'>
      <Seo
        pageTitle={title}
        description={description}
        title={title}
        type='article'
        url={`isu/${slug}`}
      />
      <div className='md:flex-row flex flex-col'>
        <motion.aside className='w-full md:w-1/3'>
          <div className='md:sticky static top-[80px] flex flex-col gap-2 md:min-h-[200px] justify-between'>
            <div className='flex flex-col'>
              <Link
                href='/isu'
                className='text-gray-400 inline-flex items-center text-sm'
              >
                <ArrowSmallLeftIcon className='w-5 h-4' />
                <span>Kembali</span>
              </Link>
              <h5 className='leading-tight text-3xl lg:text-5xl font-sans font-[700]'>
                {title}
              </h5>
            </div>
            <a href='#disqus'>Beri Komentar</a>
          </div>
        </motion.aside>
        <div className='flex flex-col gap-5 w-full md:w-2/3'>
          <figure className='relative aspect-video'>
            <SmoothTransitionImage
              priority={false}
              src={cover.url}
              alt={cover.alternateText ?? title}
              blurDataURL={cover.placeholder}
              fill
              className='object-cover rounded-lg shadow'
            />
            {cover.caption && <figcaption>{cover.caption}</figcaption>}
          </figure>
          <Markdown mdx={markdownContent} />
        </div>
      </div>
      <Disqus
        id='disqus'
        className='w-full flex flex-col'
      />
    </Container>
  );
};

export default IssueLayout;
