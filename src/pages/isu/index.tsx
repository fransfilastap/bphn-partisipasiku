import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { Fragment } from 'react';
import Seo from '@/components/seo/Seo';
import Container from '@/components/base/Container';
import { getIssues } from '@/lib/content';
import IssueCard from '@/components/card/IssueCard';
import { IssueEntity, IssueEntityResponse } from '@/gql/graphql';

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
        <div className='grid w-full grid-cols-1 gap-2 md:gap-8 md:grid-cols-4'>
          {issues.issues?.data.map((e: IssueEntity, i: number) => (
            <IssueCard
              author=''
              cover={{
                placeholder:
                  e.attributes?.cover?.data?.attributes?.placeholder!,
                url: e.attributes?.cover?.data?.attributes?.url!,
                caption: e.attributes?.cover?.data?.attributes?.caption!,
              }}
              priority={i <= 4}
              slug={e.attributes?.slug!}
              title={e.attributes?.title!}
              key={e.attributes?.slug}
            />
          ))}
        </div>
      </Container>
    </Fragment>
  );
}
