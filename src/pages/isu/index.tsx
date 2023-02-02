import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { ChangeEvent, Fragment, useCallback, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import Seo from '@/components/seo/Seo';
import Container from '@/components/base/Container';
import { getIssues } from '@/lib/content';
import IssueCard from '@/components/card/IssueCard';
import { ContentIssue } from '@/types/model';
import Input from '@/components/base/Input';
import { SearchIcon } from '@/components/icons';
import debounce from 'lodash.debounce';

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
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, stiffness: 200, type: 'spring' }}
            className='text-5xl font-body font-bold'
          >
            Daftar Isu Hukum
          </motion.h5>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.12, stiffness: 200, type: 'spring' }}
            className='font-body text-xl tracking-tighter'
          >
            Pilih isu lalu sampaikan pendapat anda!
          </motion.p>
        </div>

        <div className="flex flex-col w-full my-8">
          <Input
            onChange={debounceQueryChange}
            placeholder="Search"
            leftIcon={<SearchIcon />}
          />
        </div>
        <div className='grid w-full grid-cols-1 gap-2 md:gap-8 md:grid-cols-4'>
          {filteredIssue.map((e: ContentIssue, i: number) => {
            return (
              <IssueCard
                author=''
                cover={{
                  placeholder: e.cover.placeholder,
                  url: e.cover.url,
                  caption: e.cover.caption,
                  altTxt: e.cover.alternativeText,
                }}
                slug={e.slug}
                title={e.title}
                key={e.slug}
              />
            );
          })}
        </div>
      </Container>
    </Fragment>
  );
}
