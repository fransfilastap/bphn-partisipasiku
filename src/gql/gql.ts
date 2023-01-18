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
  '\n    query allCategoryQuery{\n        categories{\n            data {\n                id,\n                attributes {\n                    slug,\n                    name,\n                    description\n                }\n            }\n        }\n    }\n':
    types.AllCategoryQueryDocument,
  '\n    query getIssueDocument($filter:IssueFiltersInput){\n        issues(filters: $filter){\n            data {\n                id,\n                attributes {\n                    slug,\n                    Title,\n                    Cover {\n                        data {\n                            attributes {\n                                url,\n                                hash,\n                                caption,\n                                width,\n                                height\n                            }\n                        }\n                    },\n                    Background,\n                    Seo {\n                        shareImage {\n                            data {\n                                attributes {\n                                    url\n                                }\n                            }\n                        },\n                        metaTitle,\n                        metaDescription\n                    },\n\n                }\n            }\n        }\n    }\n':
    types.GetIssueDocumentDocument,
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
  source: '\n    query allCategoryQuery{\n        categories{\n            data {\n                id,\n                attributes {\n                    slug,\n                    name,\n                    description\n                }\n            }\n        }\n    }\n'
): (typeof documents)['\n    query allCategoryQuery{\n        categories{\n            data {\n                id,\n                attributes {\n                    slug,\n                    name,\n                    description\n                }\n            }\n        }\n    }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n    query getIssueDocument($filter:IssueFiltersInput){\n        issues(filters: $filter){\n            data {\n                id,\n                attributes {\n                    slug,\n                    Title,\n                    Cover {\n                        data {\n                            attributes {\n                                url,\n                                hash,\n                                caption,\n                                width,\n                                height\n                            }\n                        }\n                    },\n                    Background,\n                    Seo {\n                        shareImage {\n                            data {\n                                attributes {\n                                    url\n                                }\n                            }\n                        },\n                        metaTitle,\n                        metaDescription\n                    },\n\n                }\n            }\n        }\n    }\n'
): (typeof documents)['\n    query getIssueDocument($filter:IssueFiltersInput){\n        issues(filters: $filter){\n            data {\n                id,\n                attributes {\n                    slug,\n                    Title,\n                    Cover {\n                        data {\n                            attributes {\n                                url,\n                                hash,\n                                caption,\n                                width,\n                                height\n                            }\n                        }\n                    },\n                    Background,\n                    Seo {\n                        shareImage {\n                            data {\n                                attributes {\n                                    url\n                                }\n                            }\n                        },\n                        metaTitle,\n                        metaDescription\n                    },\n\n                }\n            }\n        }\n    }\n'];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
