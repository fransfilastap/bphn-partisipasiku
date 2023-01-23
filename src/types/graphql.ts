import { graphql } from '@/gql';

export const Topic = graphql(/*GraphQL*/ `
  fragment Topic on TopicEntityResponse {
    data {
      id
      attributes {
        name
        slug
        description
        publishedAt
      }
    }
  }
`);

export const Issue = graphql(/*GraphQL*/ `
  fragment Issue on IssueEntityResponse {
    data {
      id
      attributes {
        title
        slug
        background
        cover {
          data {
            id
            attributes {
              url
              hash
              height
              width
              caption
              name
              ext
              alternativeText
            }
          }
        }
        topic {
          data {
            attributes {
              name
            }
          }
        }
      }
    }
  }
`);

export const GetIssue = graphql(/*GraphQL*/ `
  query getIssue($filter: IssueFiltersInput) {
    issues(filters: $filter) {
      data {
        id
        attributes {
          title
          slug
          background
          cover {
            data {
              id
              attributes {
                url
                hash
                height
                width
                caption
                name
                ext
                alternativeText
                placeholder
                formats
              }
            }
          }
          topic {
            data {
              attributes {
                name
              }
            }
          }
        }
      }
    }
  }
`);

export const AllTopic = graphql(/*GraphQL*/ `
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
`);
