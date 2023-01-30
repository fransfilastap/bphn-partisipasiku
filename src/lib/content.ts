import fetcher from '@/lib/fetcher';
import { graphql } from '@/gql';
import { GetAboutQuery, GetIssuesQuery, GetTopicsQuery } from '@/gql/graphql';
import { Variables } from 'graphql-request';

interface Pagination {
  page?: number;
  offset?: number;
  limit?: number;
}

export const getAbout = async (): Promise<GetAboutQuery> => {
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

  return await fetcher(query);
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

export const getIssues = async (
  variables?: Variables
): Promise<GetIssuesQuery> => {
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
                  formats
                  alternativeText
                  placeholder
                }
              }
            }
          }
        }
      }
    }
  `);
  return await fetcher(query, variables);
};
