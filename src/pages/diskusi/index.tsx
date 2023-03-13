import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { ChangeEvent, Fragment, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import Seo from '@/components/seo/Seo';
import Container from '@/components/base/Container';
import { getIssues } from '@/lib/content';
import { ContentIssue } from '@/types/model';
import Input from '@/components/base/Input';
import { SearchIcon } from '@/components/icons';
import debounce from 'lodash.debounce';
import IssueGrid from '@/components/IssueGrid';
import ReactPaginate from 'react-paginate';
import { AppInfo } from '@/configs';

export const getStaticProps: GetStaticProps = async () => {
  const issues = await getIssues({
    pagination: { limit: -1, start: 0 },
    sort: ['legacyDate:desc', 'createdAt:desc'],
  });

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
    return issues.data.filter((issue: ContentIssue) =>
      issue.title.toLowerCase().includes(searchValue.toLowerCase())
    );
  }, [issues, searchValue]);

  const handleQueryChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const debounceQueryChange = debounce(handleQueryChange, 300);

  const [itemOffset, setItemOffset] = useState<number>(0);
  const itemsPerPage = 12;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = filteredIssue.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(filteredIssue.length / itemsPerPage);
  const pageChangeHandler = (selectedItem: { selected: number }) => {
    const newOffset: number =
      (selectedItem.selected * itemsPerPage) % filteredIssue.length;
    setItemOffset(newOffset);
  };

  return (
    <Fragment>
      <Seo
        pageTitle='Topik Isu Peraturan Perundang-undangan'
        description='Sampaikan pendapat anda'
        title='Daftar Isu Peraturan Perundang-undangan'
        type='article'
        image={`${AppInfo.url}/api/og?title=${encodeURI(
          'Ayo Berpartisipasi!'
        )}`}
      />
      <Container className='p-6 md:p-4'>
        <motion.h5
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className='my-10 text-2xl font-bold font-body dark:border-none max-w-max'
        >
          Daftar Isu.
        </motion.h5>
        <div className='flex flex-col w-full my-8'>
          <Input
            onChange={debounceQueryChange}
            placeholder='Search'
            leftIcon={<SearchIcon />}
          />
        </div>
        <IssueGrid issues={currentItems} />
        <ReactPaginate
          className='inline-flex w-full gap-3 my-5 items-center justify-center'
          pageLinkClassName='block px-3 py-1 rounded-md bg-gray-100 dark:bg-gray-900 text-black dark:text-white hover:bg-gray-300 transition-color duration-100 ease-in-out'
          activeLinkClassName='bg-blue-500 text-white'
          onPageChange={pageChangeHandler}
          pageRangeDisplayed={5}
          breakLabel='...'
          pageCount={pageCount}
        />
      </Container>
    </Fragment>
  );
}
