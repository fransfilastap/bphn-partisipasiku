import fetcher from '@/lib/fetcher';
import { graphql } from '@/gql';
import { GetAboutQuery, GetIssuesQuery, GetTopicsQuery } from '@/gql/graphql';
import { Variables } from 'graphql-request';
import { ContentIssue, ContentMeta } from '@/types/model';
import { parseMarkdown } from '@/lib/markdown';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { DEFAULT_PLACEHOLDER } from '@/lib/image';

interface Pagination {
  page?: number;
  offset?: number;
  limit?: number;
}

export const getAbout = async (): Promise<{
  title: string;
  markdown: MDXRemoteSerializeResult;
  seo: ContentMeta;
}> => {
  const query = graphql(/*GraphQL*/ `
    query GetAbout {
      about {
        data {
          attributes {
            title
            Description
            Seo {
              metaTitle
              metaDescription
              shareImage {
                data {
                  attributes {
                    placeholder
                    url
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  const aboutGql: GetAboutQuery = await fetcher(query);
  const markdown = await parseMarkdown(
    aboutGql.about?.data?.attributes?.Description!
  );
  return {
    title: aboutGql.about?.data?.attributes?.title!,
    markdown: markdown,
    seo: {
      title: aboutGql.about?.data?.attributes?.Seo?.metaTitle!,
      description: aboutGql.about?.data?.attributes?.Seo?.metaDescription!,
    },
  };
};

export const getTopics = async ({
  limit = 4,
}: Pagination): Promise<GetTopicsQuery> => {
  const query = graphql(
    /*GraphQL*/
    `
      query getTopics(
        $filter: TopicFiltersInput
        $pagination: PaginationArg
        $sort: [String]
      ) {
        topics(filters: $filter, pagination: $pagination, sort: $sort) {
          data {
            id
            attributes {
              description
              name
              slug
              publishedAt
            }
          }
        }
      }
    `
  );
  return await fetcher(query, { pagination: { limit } });
};

export const getIssue = async (slug: string | string[] | undefined) => {
  const issues: ContentIssue[] = await getIssues({
    filters: { slug: { eq: slug } },
  });
  return issues[0];
};

export const getIssues = async (variables?: Variables) => {
  const query = graphql(/*GraphQL*/ `
    query GetIssues(
      $filters: IssueFiltersInput
      $pagination: PaginationArg
      $sort: [String]
    ) {
      issues(filters: $filters, pagination: $pagination, sort: $sort) {
        data {
          id
          attributes {
            slug
            title
            background
            seo {
              metaTitle
              metaDescription
              shareImage {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
            createdAt
            topic {
              data {
                attributes {
                  slug
                  name
                }
              }
            }
            cover {
              data {
                attributes {
                  url
                  caption
                  placeholder
                  blurhash
                  formats
                  alternativeText
                }
              }
            }
          }
        }
      }
    }
  `);

  const issues: GetIssuesQuery = await fetcher(query, variables ?? {});
  const collection = issues.issues?.data;

  return await Promise.all(
    collection!.map(async (issue, index): Promise<ContentIssue> => {
      const markdown = await parseMarkdown(issue.attributes?.background!);

      return {
        id: issue.id,
        title: issue.attributes?.title,
        meta: {
          title: issue.attributes?.seo?.metaTitle! ?? issue.attributes?.title,
          description: issue.attributes?.seo?.metaDescription! ?? '',
        },
        cover: {
          url: issue.attributes?.cover?.data?.attributes?.url,
          coverUrl:
            issue.attributes?.cover?.data?.attributes?.formats.large.url,
          alternativeText:
            issue.attributes?.cover?.data?.attributes?.alternativeText!,
          caption: issue.attributes?.cover?.data?.attributes?.caption!,
          placeholder:
            issue.attributes?.cover.data?.attributes?.placeholder ??
            DEFAULT_PLACEHOLDER,
        },
        slug: issue.attributes?.slug!,
        markdown: markdown,
        topic: issue.attributes?.topic?.data?.attributes?.name,
        createdAt: issue.attributes?.createdAt,
      } as ContentIssue;
    })
  ).then((value) => value);
};
