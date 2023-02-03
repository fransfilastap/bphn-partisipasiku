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
        pageTitle='Daftar Isu'
        description='Daftar Isu Peraturan Perundangan-undangan'
        title='Daftar Isu Peraturan Perundang-undangan'
        type='article'
      />
      <Container className='p-6 md:p-4'>
        <div className='py-10 flex flex-col gap-2'>
          <motion.h5
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className='text-5xl font-body font-bold'
          >
            Daftar Isu Hukum
          </motion.h5>
          <motion.p
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className='font-body text-xl tracking-tighter'
          >
            Pilih isu lalu sampaikan pendapat anda!
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
