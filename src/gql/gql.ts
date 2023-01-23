/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
  '\n    fragment Topic on TopicEntityResponse{\n        data {\n            id,\n            attributes {\n                name,\n                slug,\n                description,\n                publishedAt,\n            }\n        }\n        \n    }\n':
    types.TopicFragmentDoc,
  '\n    fragment Issue on IssueEntityResponse{\n       data {\n           id,\n           attributes {\n               title,\n               slug,\n               background,\n               cover {\n                   data {\n                       id,\n                       attributes {\n                           url,\n                           hash,\n                           height,\n                           width,\n                           caption,\n                           name,\n                           ext,\n                           alternativeText\n                       }\n                   }\n               }\n               topic {\n                   data {\n                       attributes {\n                           name\n                       }\n                   }\n               },\n               \n               \n           }\n       }\n    }\n':
    types.IssueFragmentDoc,
  '\n    query getIssue($filter: IssueFiltersInput) {\n        issues(filters: $filter){\n            data {\n                id,\n                attributes {\n                    title,\n                    slug,\n                    background,\n                    cover {\n                        data {\n                            id,\n                            attributes {\n                                url,\n                                hash,\n                                height,\n                                width,\n                                caption,\n                                name,\n                                ext,\n                                alternativeText,\n                                placeholder,\n                                formats\n                            }\n                        }\n                    }\n                    topic {\n                        data {\n                            attributes {\n                                name\n                            }\n                        }\n                    },\n\n\n                }\n            }\n        }\n    }\n':
    types.GetIssueDocument,
  '\n    query getTopics($filter: TopicFiltersInput, $pagination:PaginationArg,$sort:[String]){\n        topics(filters: $filter,pagination: $pagination,sort: $sort){\n            data {\n                id,\n                attributes {\n                    description,\n                    name,\n                    slug,\n                    publishedAt\n                }\n            }\n        }\n    }\n':
    types.GetTopicsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n    fragment Topic on TopicEntityResponse{\n        data {\n            id,\n            attributes {\n                name,\n                slug,\n                description,\n                publishedAt,\n            }\n        }\n        \n    }\n'
): (typeof documents)['\n    fragment Topic on TopicEntityResponse{\n        data {\n            id,\n            attributes {\n                name,\n                slug,\n                description,\n                publishedAt,\n            }\n        }\n        \n    }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n    fragment Issue on IssueEntityResponse{\n       data {\n           id,\n           attributes {\n               title,\n               slug,\n               background,\n               cover {\n                   data {\n                       id,\n                       attributes {\n                           url,\n                           hash,\n                           height,\n                           width,\n                           caption,\n                           name,\n                           ext,\n                           alternativeText\n                       }\n                   }\n               }\n               topic {\n                   data {\n                       attributes {\n                           name\n                       }\n                   }\n               },\n               \n               \n           }\n       }\n    }\n'
): (typeof documents)['\n    fragment Issue on IssueEntityResponse{\n       data {\n           id,\n           attributes {\n               title,\n               slug,\n               background,\n               cover {\n                   data {\n                       id,\n                       attributes {\n                           url,\n                           hash,\n                           height,\n                           width,\n                           caption,\n                           name,\n                           ext,\n                           alternativeText\n                       }\n                   }\n               }\n               topic {\n                   data {\n                       attributes {\n                           name\n                       }\n                   }\n               },\n               \n               \n           }\n       }\n    }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n    query getIssue($filter: IssueFiltersInput) {\n        issues(filters: $filter){\n            data {\n                id,\n                attributes {\n                    title,\n                    slug,\n                    background,\n                    cover {\n                        data {\n                            id,\n                            attributes {\n                                url,\n                                hash,\n                                height,\n                                width,\n                                caption,\n                                name,\n                                ext,\n                                alternativeText,\n                                placeholder,\n                                formats\n                            }\n                        }\n                    }\n                    topic {\n                        data {\n                            attributes {\n                                name\n                            }\n                        }\n                    },\n\n\n                }\n            }\n        }\n    }\n'
): (typeof documents)['\n    query getIssue($filter: IssueFiltersInput) {\n        issues(filters: $filter){\n            data {\n                id,\n                attributes {\n                    title,\n                    slug,\n                    background,\n                    cover {\n                        data {\n                            id,\n                            attributes {\n                                url,\n                                hash,\n                                height,\n                                width,\n                                caption,\n                                name,\n                                ext,\n                                alternativeText,\n                                placeholder,\n                                formats\n                            }\n                        }\n                    }\n                    topic {\n                        data {\n                            attributes {\n                                name\n                            }\n                        }\n                    },\n\n\n                }\n            }\n        }\n    }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n    query getTopics($filter: TopicFiltersInput, $pagination:PaginationArg,$sort:[String]){\n        topics(filters: $filter,pagination: $pagination,sort: $sort){\n            data {\n                id,\n                attributes {\n                    description,\n                    name,\n                    slug,\n                    publishedAt\n                }\n            }\n        }\n    }\n'
): (typeof documents)['\n    query getTopics($filter: TopicFiltersInput, $pagination:PaginationArg,$sort:[String]){\n        topics(filters: $filter,pagination: $pagination,sort: $sort){\n            data {\n                id,\n                attributes {\n                    description,\n                    name,\n                    slug,\n                    publishedAt\n                }\n            }\n        }\n    }\n'];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
