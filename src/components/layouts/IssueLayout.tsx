import { FunctionComponent, MouseEventHandler } from 'react';
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
import { DEFAULT_PLACEHOLDER } from '@/lib/image';
import Link from 'next/link';
import Cusdis from '@/components/Cusdis';
import Disqus from '@/components/Disqus';
import { AppInfo } from '@/configs';
import useCurrentUrl from '@/hooks/useCurrentUrl';
import * as console from 'console';
import useCopyToClipboard from '@/hooks/useCopyToClipboard';

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
        url={`isu/${slug}`}
      />
      <div className='flex flex-col'>
        <div className='flex flex-col gap-5 w-full'>
          <div className='flex flex-col py-5 gap-2'>
            <Link
              href='/isu'
              className='text-gray-400 inline-flex max-w-max items-center text-sm hover:text-gray-800 dark:hover:text-white transition-colors duration-200 ease-in-out'
            >
              <ArrowSmallLeftIcon className='w-5 h-4' />
              <span>Kembali</span>
            </Link>
            <div>
              <h6 className='text-blue-500 font-[600] font-heading text-md lg:text-2xl'>
                {topic}
              </h6>
              <h5 className='text-3xl  lg:text-4xl lg:text-[4em] font-[700] font-heading leading-tight lg:leading-[1]'>
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
              className='prose-md font-body w-full lg:w-1/2 mx-auto pb-10 border-b border-b-gray-100'
            />
            <CommendAndShare />
            <Disqus
              id="disqus"
              className='lg:w-1/2 mx-auto'
              identifier={`/isu/${slug}`}
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
      className="sticky bottom-[40px] gap-2 mx-auto max-w-max px-3 py-5 rounded-md ring-1 ring-slate-300 bg-white/30 dark:bg-black/30 backdrop-blur-2xl flex flex-row"
    >
      <Link
        href="#disqus"
        aria-labelledby="Komentar"
      >
        <ChatBubbleBottomIcon />
      </Link>
      <ShareButton />
    </motion.div>
  );
};

const ShareButton = () => {
  const url = useCurrentUrl();
  const [shareUrl, copy] = useCopyToClipboard();
  return (
    <button
      onClick={() => copy(url)}
      className="appearance-none"
    >
      <ShareIcon />
      <AnimatePresence>
        {shareUrl && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { delay: 1 } }}
            className="text-[0.7em] text-gray-600"
          >
            Copied
          </motion.p>
        )}
      </AnimatePresence>
    </button>
  );
};
