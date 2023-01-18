import { graphql } from '@/gql';

export const AllCategoryDocument = graphql(/*GraphQL*/ `
  query allCategoryQuery {
    categories {
      data {
        id
        attributes {
          slug
          name
          description
        }
      }
    }
  }
`);

export const GetIssueDocument = graphql(/*GraphQL*/ `
  query getIssueDocument($filter: IssueFiltersInput) {
    issues(filters: $filter) {
      data {
        id
        attributes {
          slug
          Title
          Cover {
            data {
              attributes {
                url
                hash
                caption
                width
                height
              }
            }
          }
          Background
          Seo {
            shareImage {
              data {
                attributes {
                  url
                }
              }
            }
            metaTitle
            metaDescription
          }
        }
      }
    }
  }
`);
