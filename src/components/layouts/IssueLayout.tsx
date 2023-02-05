import React, { FunctionComponent, useMemo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import Container from '@/components/base/Container';
import Seo from '@/components/seo/Seo';
import SmoothTransitionImage from '@/components/image/SmoothTransitionImage';
import {
  ArrowSmallLeftIcon,
  CalendarDays,
  ChatBubbleBottomIcon,
  ShareIcon,
} from '@/components/icons';
import Markdown from '@/components/markdown/Markdown';
import Link from 'next/link';
import useCurrentUrl from '@/hooks/useCurrentUrl';
import useCopyToClipboard from '@/hooks/useCopyToClipboard';
import { useRouter } from 'next/router';
import Disqus from '@/components/Disqus';
import BackButton from '@/components/base/BackButton';
import { AppInfo } from '@/configs';

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
  createdAt: string;
};

const IssueLayout: FunctionComponent<IssueProps> = ({
  title,
  slug,
  description,
  topic,
  cover,
  markdownContent,
  createdAt,
}) => {
  return (
    <Container className='relative flex flex-col md:gap-6 md:divide-gray-300 gap-6'>
      <Seo
        pageTitle={title}
        description={description}
        title={title}
        type='article'
        url={`diskusi/${slug}`}
        image={`${AppInfo.url}/api/og?title=${title}&category=${topic}`}
      />
      <div className='flex flex-col '>
        <div className='flex flex-col gap-5 w-full lg:w-2/3 mx-auto'>
          <div className='flex flex-col py-5 gap-4'>
            <BackButton />
            <div className='flex flex-col gap-2'>
              <h6 className='block p-2 bg-blue-300 text-white max-w-max font-[600] font-heading text-xs rounded-full'>
                {topic}
              </h6>
              <h5 className='text-[2em] lg:text-[2.5em] font-[600] leading-[1]'>
                {title}
              </h5>
            </div>
            <div className='flex flex-row'>
              <p className='inline-flex gap-2 justify-center items-center'>
                <CalendarDays />
                <span className='text-sm dark:text-gray-400'>{createdAt}</span>
              </p>
            </div>
          </div>
          <div className='w-full flex flex-col gap-6'>
            <figure className='relative aspect-video'>
              <SmoothTransitionImage
                src={cover.url}
                fill={true}
                alt={cover.alternateText ?? title}
                blurDataURL={cover.placeholder}
                className='object-cover rounded-md'
              />
              {cover.caption && <figcaption>{cover.caption}</figcaption>}
            </figure>
            <Markdown
              mdx={markdownContent}
              className='prose-md font-body pb-10 border-b border-b-gray-100 dark:border-b-gray-800'
            />
            <CommendAndShare />
            <Disqus
              id='disqus'
              identifier={`/diskusi/${slug}`}
              title={title}
              locale='id-ID'
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default IssueLayout;

const CommendAndShare = () => {
  return (
    <motion.div
      initial={{ translateY: 100, opacity: 0 }}
      animate={{
        translateY: 0,
        opacity: 1,
        transition: { delay: 0.8, type: 'spring', stiffness: 100 },
      }}
      className='sticky bottom-[40px] gap-2 mx-auto max-w-max px-3 py-5 rounded-md ring-1 ring-gray-200 dark:ring-gray-800 bg-white/30 dark:bg-black/60 backdrop-blur-sm flex flex-row'
    >
      <Link
        href='#disqus'
        aria-labelledby='Komentar'
      >
        <ChatBubbleBottomIcon />
      </Link>
      <ShareButton />
    </motion.div>
  );
};

const ShareButton = () => {
  const url = useCurrentUrl();
  const { query } = useRouter();
  const urlWithParams = useMemo(() => {
    return url.replace('[slug]', `${query.slug}`);
  }, [url, query.slug]);

  const [shareUrl, copy] = useCopyToClipboard();
  return (
    <button
      onClick={() => copy(urlWithParams)}
      className='appearance-none'
    >
      <ShareIcon />
      <AnimatePresence>
        {shareUrl && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { delay: 1 } }}
            className='text-[0.7em] text-gray-600'
          >
            Copied
          </motion.p>
        )}
      </AnimatePresence>
    </button>
  );
};
