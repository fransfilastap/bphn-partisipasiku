import { GraphQLClient, RequestDocument } from 'graphql-request';
import { TypedDocumentNode } from '@graphql-typed-document-node/core';
import { STRAPI_API_TOKEN, STRAPI_GRAPHQL_API_ENDPOINT } from '@/configs/env';

const gqlClient = new GraphQLClient(`${STRAPI_GRAPHQL_API_ENDPOINT}`, {
  headers: {
    authorization: `Bearer ${STRAPI_API_TOKEN}`,
  },
});

const fetcher = (query: TypedDocumentNode | RequestDocument) => {
  return gqlClient.request(query);
};

export default fetcher;
