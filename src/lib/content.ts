import fetcher from '@/lib/fetcher';
import { graphql } from '@/gql';
import { GetAboutQuery, GetIssuesQuery, GetTopicsQuery } from '@/gql/graphql';
import { Variables } from 'graphql-request';
import {
  ContentIssue,
  ContentIssues,
  ContentMeta,
  ContentTopic,
} from '@/types/model';
import { parseMarkdown } from '@/lib/markdown';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { DEFAULT_PLACEHOLDER } from '@/lib/strapi-image';

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
                    provider_metadata
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

export const getTopics = async (
  variables?: Variables
): Promise<ContentTopic[]> => {
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
              attacments {
                data {
                  attributes {
                    url
                    caption
                    placeholder
                    blurhash
                    formats
                    alternativeText
                    provider_metadata
                  }
                }
              }
              description
              background
              name
              slug
              createdAt
              publishedAt
            }
          }
        }
      }
    `
  );

  const topics: GetTopicsQuery = await fetcher(query, variables);
  const collection = topics.topics?.data!;

  return Promise.all(
    collection!.map(async (e, i): Promise<ContentTopic> => {
      const markdown = await parseMarkdown(e.attributes?.background!);
      return {
        slug: e.attributes?.slug,
        createdAt: e.attributes?.createdAt,
        description: e.attributes?.description!,
        background: markdown,
        name: e.attributes?.name,
        publishedAt: e.attributes?.publishedAt,
        attachment: {
          url: e.attributes?.attacments.data?.attributes?.url,
          cloudinaryPublicId:
            e.attributes?.attacments.data?.attributes?.provider_metadata
              .public_id,
          coverUrl: e.attributes?.attacments.data?.attributes?.url,
          placeholder: e.attributes?.attacments.data?.attributes?.placeholder,
          caption: e.attributes?.attacments.data?.attributes?.caption,
          alternativeText:
            e.attributes?.attacments.data?.attributes?.alternativeText,
        },
      } as ContentTopic;
    })
  ).then((value) => value);
};

export const getIssue = async (slug: string | string[] | undefined) => {
  const issues: ContentIssues = await getIssues({
    filters: { slug: { eq: slug } },
  });
  return issues.data[0];
};

export const getIssuePerPage = async (page = 1): Promise<ContentIssues> => {
  const issues: ContentIssues = await getIssues({
    pagination: { page: page },
  });
  return issues;
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
            legacyDate
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
                  provider_metadata
                }
              }
            }
          }
        }
        meta {
          pagination {
            page
            pageCount
            pageSize
            total
          }
        }
      }
    }
  `);

  const issues: GetIssuesQuery = await fetcher(query, variables ?? {});
  const collection = issues.issues?.data;

  const data: ContentIssue[] = await Promise.all(
    collection!.map(async (issue, index): Promise<ContentIssue> => {
      const markdown = await parseMarkdown(issue.attributes?.background!);

      return {
        id: issue.id,
        title: issue.attributes?.title,
        description: issue.attributes?.seo?.metaDescription! ?? '',
        meta: {
          title: issue.attributes?.seo?.metaTitle! ?? issue.attributes?.title,
          description: issue.attributes?.seo?.metaDescription! ?? '',
        },
        cover: {
          url: issue.attributes?.cover?.data?.attributes?.url,
          coverUrl: issue.attributes?.cover?.data?.attributes?.url,
          alternativeText:
            issue.attributes?.cover?.data?.attributes?.alternativeText!,
          caption: issue.attributes?.cover?.data?.attributes?.caption!,
          placeholder:
            issue.attributes?.cover.data?.attributes?.placeholder ??
            DEFAULT_PLACEHOLDER,
          cloudinaryPublicId:
            issue.attributes?.cover.data?.attributes?.provider_metadata
              .public_id,
        },
        slug: issue.attributes?.slug!,
        markdown: markdown,
        topic: issue.attributes?.topic?.data?.attributes?.name,
        createdAt: issue.attributes?.legacyDate ?? issue.attributes?.createdAt,
      } as ContentIssue;
    })
  ).then((value) => value);

  return {
    data: data,
    pagination: {
      page: issues.issues?.meta.pagination.page,
      pageCount: issues.issues?.meta.pagination.pageCount,
      total: issues.issues?.meta.pagination.total,
      pageSize: issues.issues?.meta.pagination.pageSize,
    },
  } as ContentIssues;
};
