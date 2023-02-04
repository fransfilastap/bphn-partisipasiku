import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { ChangeEvent, Fragment, useCallback, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import Seo from '@/components/seo/Seo';
import Container from '@/components/base/Container';
import { getIssues } from '@/lib/content';
import { ContentIssue } from '@/types/model';
import Input from '@/components/base/Input';
import { SearchIcon } from '@/components/icons';
import debounce from 'lodash.debounce';
import IssueGrid from '@/components/IssueGrid';
import { AppInfo } from '@/configs';

export const getStaticProps: GetStaticProps = async () => {
  const issues = await getIssues();
  return {
    props: {
      issues,
    },
    revalidate: 10,
  };
};
export default function IssuePage({
  issues,
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
        pageTitle='Topik Isu Peraturan Perundang-undangan'
        description='Sampaikan pendapat anda'
        title='Topik Isu Peraturan Perundang-undangan'
        type='article'
      />
      <Container className='p-6 md:p-4'>
        <motion.h5
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className='text-2xl font-body my-10 font-bold border-b-4 border-b-blue-500 max-w-max'
        >
          Daftar Diskusi.
        </motion.h5>
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
