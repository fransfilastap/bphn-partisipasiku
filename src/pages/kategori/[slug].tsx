import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { ChangeEvent, Fragment, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import Seo from '@/components/seo/Seo';
import Container from '@/components/base/Container';
import { getIssues, getTopics } from '@/lib/content';
import { ContentIssue, ContentTopic } from '@/types/model';
import Input from '@/components/base/Input';
import { SearchIcon } from '@/components/icons';
import debounce from 'lodash.debounce';
import IssueGrid from '@/components/IssueGrid';
import { AppInfo } from '@/configs';

export const getStaticPaths: GetStaticPaths = async () => {
  const topics = await getTopics({ sort: 'createdAt:asc' });

  const paths = topics.map(({ slug }: ContentTopic, i) => ({
    params: { slug: slug },
  }));

  return {
    paths: paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const topics = await getTopics({ filter: { slug: { eq: params?.slug } } });

  if (topics.length <= 0) {
    return {
      notFound: true,
    };
  }

  const issues = await getIssues({
    filters: { topic: { slug: { eq: params?.slug } } },
  });

  return {
    props: {
      issues,
      topic: topics[0],
    },
    revalidate: 10,
  };
};
export default function IssueByTopicPage({
  issues,
  topic,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [searchValue, setSearchValue] = useState<string>('');
  const filteredIssue = useMemo((): ContentIssue[] => {
    return issues.filter((issue: ContentIssue) =>
      issue.title.toLowerCase().includes(searchValue.toLowerCase())
    );
  }, [issues, searchValue]);

  const handleQueryChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const debounceQueryChange = debounce(handleQueryChange, 300);

  return (
    <Fragment>
      <Seo
        pageTitle={topic.name}
        description={topic.description}
        title={topic.name}
        type='article'
      />
      <Container className='p-6 md:p-4'>
        <div className='flex flex-col mt-10 gap-2'>
          <motion.h5
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className='text-2xl lg:text-4xl font-bold tracking-normal'
          >
            {topic.name}
          </motion.h5>
          <motion.p
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className='font-body text-md tracking-tighter text-gray-600'
          >
            {topic.description}
          </motion.p>
        </div>

        <div className='flex flex-col w-full my-8'>
          <Input
            onChange={debounceQueryChange}
            placeholder='Search'
            leftIcon={<SearchIcon />}
          />
        </div>
        <IssueGrid issues={filteredIssue} />
      </Container>
    </Fragment>
  );
}
