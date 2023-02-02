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
  '\n    query GetAbout {\n      about {\n        data {\n          attributes {\n            title\n            Description\n            Seo {\n              metaTitle\n              metaDescription\n              shareImage {\n                data {\n                  attributes {\n                    placeholder\n                    url\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  ':
    types.GetAboutDocument,
  '\n      query getTopics(\n        $filter: TopicFiltersInput\n        $pagination: PaginationArg\n        $sort: [String]\n      ) {\n        topics(filters: $filter, pagination: $pagination, sort: $sort) {\n          data {\n            id\n            attributes {\n              description\n              name\n              slug\n              publishedAt\n            }\n          }\n        }\n      }\n    ':
    types.GetTopicsDocument,
  '\n    query GetIssues(\n      $filters: IssueFiltersInput\n      $pagination: PaginationArg\n      $sort: [String]\n    ) {\n      issues(filters: $filters, pagination: $pagination, sort: $sort) {\n        data {\n          id\n          attributes {\n            slug\n            title\n            background\n            seo {\n              metaTitle\n              metaDescription\n              shareImage {\n                data {\n                  attributes {\n                    url\n                  }\n                }\n              }\n            }\n            createdAt\n            topic {\n              data {\n                attributes {\n                  slug\n                  name\n                }\n              }\n            }\n            cover {\n              data {\n                attributes {\n                  url\n                  caption\n                  placeholder\n                  blurhash\n                  formats\n                  alternativeText\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  ':
    types.GetIssuesDocument,
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
  source: '\n    query GetAbout {\n      about {\n        data {\n          attributes {\n            title\n            Description\n            Seo {\n              metaTitle\n              metaDescription\n              shareImage {\n                data {\n                  attributes {\n                    placeholder\n                    url\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  '
): (typeof documents)['\n    query GetAbout {\n      about {\n        data {\n          attributes {\n            title\n            Description\n            Seo {\n              metaTitle\n              metaDescription\n              shareImage {\n                data {\n                  attributes {\n                    placeholder\n                    url\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  '];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n      query getTopics(\n        $filter: TopicFiltersInput\n        $pagination: PaginationArg\n        $sort: [String]\n      ) {\n        topics(filters: $filter, pagination: $pagination, sort: $sort) {\n          data {\n            id\n            attributes {\n              description\n              name\n              slug\n              publishedAt\n            }\n          }\n        }\n      }\n    '
): (typeof documents)['\n      query getTopics(\n        $filter: TopicFiltersInput\n        $pagination: PaginationArg\n        $sort: [String]\n      ) {\n        topics(filters: $filter, pagination: $pagination, sort: $sort) {\n          data {\n            id\n            attributes {\n              description\n              name\n              slug\n              publishedAt\n            }\n          }\n        }\n      }\n    '];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n    query GetIssues(\n      $filters: IssueFiltersInput\n      $pagination: PaginationArg\n      $sort: [String]\n    ) {\n      issues(filters: $filters, pagination: $pagination, sort: $sort) {\n        data {\n          id\n          attributes {\n            slug\n            title\n            background\n            seo {\n              metaTitle\n              metaDescription\n              shareImage {\n                data {\n                  attributes {\n                    url\n                  }\n                }\n              }\n            }\n            createdAt\n            topic {\n              data {\n                attributes {\n                  slug\n                  name\n                }\n              }\n            }\n            cover {\n              data {\n                attributes {\n                  url\n                  caption\n                  placeholder\n                  blurhash\n                  formats\n                  alternativeText\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  '
): (typeof documents)['\n    query GetIssues(\n      $filters: IssueFiltersInput\n      $pagination: PaginationArg\n      $sort: [String]\n    ) {\n      issues(filters: $filters, pagination: $pagination, sort: $sort) {\n        data {\n          id\n          attributes {\n            slug\n            title\n            background\n            seo {\n              metaTitle\n              metaDescription\n              shareImage {\n                data {\n                  attributes {\n                    url\n                  }\n                }\n              }\n            }\n            createdAt\n            topic {\n              data {\n                attributes {\n                  slug\n                  name\n                }\n              }\n            }\n            cover {\n              data {\n                attributes {\n                  url\n                  caption\n                  placeholder\n                  blurhash\n                  formats\n                  alternativeText\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  '];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
