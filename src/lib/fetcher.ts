import { GraphQLClient, RequestDocument, Variables } from 'graphql-request';
import { TypedDocumentNode } from '@graphql-typed-document-node/core';
import {
  STRAPI_API_TOKEN,
  STRAPI_GRAPHQL_API_ENDPOINT,
  STRAPI_REST_API_ENDPOINT,
} from '@/configs/env';

const gqlClient = new GraphQLClient(`${STRAPI_GRAPHQL_API_ENDPOINT}`, {
  headers: {
    Authorization: `Bearer ${STRAPI_API_TOKEN}`,
  },
});

const fetcher = <T>(
  query: TypedDocumentNode | RequestDocument,
  variables?: Variables
) => {
  return gqlClient.request(query, variables);
};

export default fetcher;

/**
 * SWR fetcher
 *
 * @param input
 * @param init
 * @return {Promise<JSON>}
 */

export async function restFetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> {
  const res = await fetch(input, {
    ...init,
    headers: {
      Authorization: `Bearer ${STRAPI_API_TOKEN}`,
      'Content-Type': 'application/json',
    },
  });
  return res.json();
}
