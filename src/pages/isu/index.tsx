import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { Fragment } from 'react';
import { motion } from 'framer-motion';
import Seo from '@/components/seo/Seo';
import Container from '@/components/base/Container';
import { getIssues } from '@/lib/content';
import IssueCard from '@/components/card/IssueCard';
import { ContentIssue } from '@/types/model';

export const getStaticProps: GetStaticProps = async () => {
  const issues = await getIssues();
  return {
    props: {
      issues,
    },
  };
};
export default function IssuePage({
  issues,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Fragment>
      <Seo
        pageTitle='Daftar Isu'
        description='Daftar Isu Peraturan Perundangan-undangan'
        title='Daftar Isu Peraturan Perundang-undangan'
        type='article'
      />
      <Container className='p-6 md:p-4'>
        <div className="py-10 flex flex-col gap-2">
          <motion.h5
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, stiffness: 200, type: 'spring' }}
            className="text-5xl font-body font-bold"
          >
            Kumpulan Isu Hukum
          </motion.h5>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.12, stiffness: 200, type: 'spring' }}
            className="font-body text-xl tracking-tighter"
          >
            Pilih isu, lalu sampaikan pendapatmu.
          </motion.p>
        </div>
        <div className='grid w-full grid-cols-1 gap-2 md:gap-8 md:grid-cols-4'>
          {issues.map((e: ContentIssue, i: number) => {
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
