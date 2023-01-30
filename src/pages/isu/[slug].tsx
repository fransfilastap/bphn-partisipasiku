import { GetStaticProps, GetStaticPropsContext, NextPage } from 'next';
import { getIssues } from '@/lib/content';
import Container from '@/components/base/Container';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { GetIssuesQuery } from '@/gql/graphql';
import { parseMarkdown } from '@/lib/markdown';
import IssueLayout from '@/components/layouts/IssueLayout';

type IssuePageProps = {
  issue: GetIssuesQuery;
  markdown: MDXRemoteSerializeResult;
};

export const getStaticPaths = async () => {
  const issues = await getIssues();
  const paths = issues.issues?.data.map(({ attributes }, i) => ({
    params: { slug: attributes?.slug },
  }));

  return {
    paths: paths,
    fallback: 'blocking',
  };
};
export const getStaticProps: GetStaticProps = async (
  ctx: GetStaticPropsContext
) => {
  const { params, locale } = ctx;
  const issue = await getIssues({ filters: { slug: { eq: params?.slug } } });

  if (issue.issues?.data?.length! <= 0) {
    return { notFound: true };
  }

  const mdx = await parseMarkdown(
    issue.issues?.data[0].attributes?.background!
  );

  return {
    props: {
      issue,
      markdown: mdx,
    },
  };
};

const IssuePage: NextPage<IssuePageProps> = ({ issue, markdown }) => {
  return (
    <IssueLayout
      title={issue.issues?.data[0].attributes?.title!}
      slug={issue.issues?.data[0].attributes?.slug!}
      cover={{
        placeholder:
          issue.issues?.data[0].attributes?.cover?.data?.attributes
            ?.placeholder!,
        url: issue.issues?.data[0].attributes?.cover?.data?.attributes?.url!,
        alternateText:
          issue.issues?.data[0].attributes?.cover?.data?.attributes
            ?.alternativeText!,
      }}
      description={issue.issues?.data[0].attributes?.seo?.metaDescription!}
      topic={issue.issues?.data[0].attributes?.topic?.data?.attributes?.name!}
      markdownContent={markdown}
    />
  );
};

export default IssuePage;
