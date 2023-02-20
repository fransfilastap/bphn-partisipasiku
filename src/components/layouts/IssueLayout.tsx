import React, { FunctionComponent, useMemo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import Container from '@/components/base/Container';
import Seo from '@/components/seo/Seo';
import AdvanceImage from '@/components/image/AdvanceImage';
import {
  CalendarDays,
  ChatBubbleBottomIcon,
  ShareIcon,
} from '@/components/icons';
import Markdown from '@/components/markdown/Markdown';
import Link from 'next/link';
import useCopyToClipboard from '@/hooks/useCopyToClipboard';
import Disqus from '@/components/Disqus';
import BackButton from '@/components/base/BackButton';
import { AppInfo } from '@/configs';
import {
  FacebookIcon,
  FacebookShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from 'react-share';
import { useDiscussionUrl } from '@/hooks/useDiscussionUrl';

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
    cloudinaryImageId: string;
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
  const discussionUrl = useDiscussionUrl();

  return (
    <div className='relative flex flex-col '>
      <div className='absolute h-[40vh] bg-top inset-0 bg-gradient-to-b from-pink-200/30 dark:from-violet-500/20 to-transparent z-[-1]'></div>
      <Seo
        pageTitle={title}
        description={description}
        title={title}
        type='article'
        url={`diskusi/${slug}`}
        image={cover.url ?? `${AppInfo.url}/api/og?title=${encodeURI(title)}`}
      />
      <Container className='relative flex flex-col gap-6 md:gap-6 md:divide-gray-300'>
        <div className='flex flex-col w-full gap-5 mx-auto lg:w-2/3'>
          <div className='flex flex-col gap-4 py-5'>
            <BackButton />
            <div className='flex flex-col gap-2'>
              <h6 className='block p-2 bg-gray-500/30 text-black dark:text-white max-w-max font-[500] text-[0.7em] rounded-full'>
                {topic}
              </h6>
              <h5 className='text-[2em] lg:text-[2.5em] font-[600] leading-[1] tracking-tight'>
                {title}
              </h5>
              <p className='text-[1em] my-3 lg:text-[1.3em] font-[300] leading-[1] tracking-tight'>
                {description}
              </p>
            </div>
            <div className='flex flex-row'>
              <p className='inline-flex items-center justify-center gap-2'>
                <CalendarDays />
                <span className='text-[0.8em] dark:text-gray-400'>
                  {createdAt}
                </span>
              </p>
            </div>
          </div>
          <div className='flex flex-col w-full gap-6'>
            <figure className='relative overflow-hidden rounded-md aspect-video'>
              <AdvanceImage
                src={cover.cloudinaryImageId}
                alt={cover.alternateText ?? title}
                blurDataURL={cover.placeholder}
                width={500}
                height={400}
                priority={true}
                className='object-cover w-full rounded-md'
              />
              {cover.caption && <figcaption>{cover.caption}</figcaption>}
            </figure>
            <Markdown
              mdx={markdownContent}
              className='pb-10 border-b prose-md font-body border-b-gray-100 dark:border-b-gray-800'
            />
            <CommendAndShare
              url={discussionUrl}
              title={title}
              topic={topic}
            />
            <Disqus
              id='disqus'
              identifier={`diskusi/${slug}`}
              title={title}
              locale='id-ID'
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default IssueLayout;

const CommendAndShare = ({
  url,
  title,
  topic,
}: {
  url: string;
  title: string;
  topic: string;
}) => {
  return (
    <motion.div
      initial={{ translateY: 100, opacity: 0 }}
      animate={{
        translateY: 0,
        opacity: 1,
        transition: { delay: 0.8, type: 'spring', stiffness: 100 },
      }}
      className='sticky bottom-[40px] gap-2 mx-auto max-w-max px-3 py-5 rounded-md ring-1 ring-gray-200 dark:ring-gray-800 bg-white/80 dark:bg-black/60 backdrop-blur-sm flex flex-row items-center justify-between'
    >
      <Link
        href='#disqus'
        aria-label='Komentar'
      >
        <ChatBubbleBottomIcon />
      </Link>
      <ShareButton url={url} />
      <FacebookShareButton
        url={url}
        quote={title}
        className=''
      >
        <FacebookIcon
          size={32}
          round
        />
      </FacebookShareButton>
      <WhatsappShareButton
        url={url}
        title={title}
      >
        <WhatsappIcon
          size={32}
          round
        />
      </WhatsappShareButton>
      <TwitterShareButton
        title={title}
        url={url}
        hashtags={[topic]}
      >
        <TwitterIcon
          size={32}
          round
        />
      </TwitterShareButton>
      <TelegramShareButton
        title={title}
        url={url}
      >
        <TelegramIcon
          size={32}
          round
        />
      </TelegramShareButton>
    </motion.div>
  );
};

const ShareButton = ({ url }: { url: string }) => {
  const [shareUrl, copy] = useCopyToClipboard();
  return (
    <button
      onClick={() => copy(url)}
      className='appearance-none'
      aria-label='share link'
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
