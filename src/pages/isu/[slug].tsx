import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { getIssue, getIssues } from '@/lib/content';
import IssueLayout from '@/components/layouts/IssueLayout';
import moment from 'moment/moment';
import { ContentIssue } from '@/types/model';
import { ParsedUrlQuery } from 'querystring';

type IssuePageProps = {
  issue: ContentIssue;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const issues = await getIssues();
  const paths = issues.map(({ slug, id }: ContentIssue, i) => ({
    params: { slug: slug },
  }));

  return {
    paths: paths,
    fallback: 'blocking',
  };
};
export const getStaticProps: GetStaticProps<IssuePageProps> = async ({
  params,
}) => {
  const issue = await getIssue(params?.slug);

  if (!issue) {
    return { notFound: true };
  }

  return {
    props: {
      issue: issue,
    },
    revalidate: 10,
  };
};

const IssuePage: NextPage<IssuePageProps> = ({ issue }) => {
  return (
    <IssueLayout
      title={issue.title}
      slug={issue.slug}
      cover={{
        placeholder: issue.cover.placeholder,
        url: issue.cover.url,
        alternateText: issue.cover.alternativeText,
        caption: issue.cover.caption,
      }}
      description={issue.meta.description}
      topic={issue.topic}
      markdownContent={issue.markdown}
      createdAt={moment(issue.createdAt).format('MMMM d, YYYY')}
    />
  );
};

export default IssuePage;
