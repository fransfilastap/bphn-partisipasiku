import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { getIssuePerPage, getIssues } from '@/lib/content';
import IssueLayout from '@/components/layouts/IssueLayout';
import moment from 'moment/moment';
import { ContentIssue, ContentIssues } from '@/types/model';
import Seo from '@/components/seo/Seo';
import Container from '@/components/base/Container';
import { motion } from 'framer-motion';
import Input from '@/components/base/Input';
import { SearchIcon } from '@/components/icons';
import IssueGrid from '@/components/IssueGrid';
import { ChangeEvent, Fragment, useMemo, useState } from 'react';
import debounce from 'lodash.debounce';
import Link from 'next/link';
import { SIZE_PER_PAGE } from '@/configs';

type IssuePageProps = {
  issues: ContentIssues;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const issues = await getIssues({ paginate: { limit: -1 } });
  const paths = [];

  for (let i = 0; i < issues.pagination.pageCount; i++) {
    paths.push({
      params: { page: i.toString() },
    });
  }

  return {
    paths,
    fallback: 'blocking',
  };
};
export const getStaticProps: GetStaticProps<IssuePageProps> = async ({
  params,
}) => {
  if (typeof params?.page === 'undefined') return { notFound: true };
  if (Array.isArray(params?.page)) return { notFound: true };

  const perPage = SIZE_PER_PAGE;
  const start = parseInt(params?.page);
  const page = start + perPage;
  const issues = await getIssues({ pagination: { limit: -1 } });

  if (!issues) {
    return { notFound: true };
  }

  return {
    props: {
      issues: issues,
    },
    revalidate: 10,
  };
};

const IssuePage: NextPage<IssuePageProps> = ({ issues }) => {
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
          className='my-10 text-2xl font-bold font-body dark:border-none max-w-max'
        >
          Daftar Diskusi.
        </motion.h5>
        <IssueGrid issues={filteredIssue} />
        <nav>
          <ul className="inline-flex gap-2">
            <li>
              <Link href="/1">1</Link>
            </li>
            <li>
              <Link href="/2">2</Link>
            </li>
            <li>
              <Link href="/3">3</Link>
            </li>
          </ul>
        </nav>
      </Container>
    </Fragment>
  );
};

export default IssuePage;
