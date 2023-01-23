import { GraphQLClient, RequestDocument, Variables } from 'graphql-request';
import { TypedDocumentNode } from '@graphql-typed-document-node/core';
import { STRAPI_API_TOKEN, STRAPI_GRAPHQL_API_ENDPOINT } from '@/configs/env';

const gqlClient = new GraphQLClient(`${STRAPI_GRAPHQL_API_ENDPOINT}`, {
  headers: {
    authorization: `Bearer ${STRAPI_API_TOKEN}`,
  },
});

const fetcher = (
  query: TypedDocumentNode | RequestDocument,
  variables?: Variables
) => {
  return gqlClient.request(query, variables);
};

export default fetcher;
