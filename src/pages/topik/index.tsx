import { GetStaticProps, InferGetStaticPropsType } from 'next';
import fetcher from '@/lib/fetcher';
import { GetTopicsDocument } from '@/gql/graphql';
import { Fragment } from 'react';
import Seo from '@/components/seo/Seo';
import Container from '@/components/base/Container';

export const getStaticProps: GetStaticProps = async () => {
  const topics = await fetcher(GetTopicsDocument);

  return {
    props: {
      topics,
    },
  };
};

export default function Home({
  issues,
  topics,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Fragment>
      <Seo />
      <Container className='p-6 md:p-4'></Container>
    </Fragment>
  );
}
