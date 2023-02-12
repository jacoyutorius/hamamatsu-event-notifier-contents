/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getContents = /* GraphQL */ `
  query GetContents($id: ID!) {
    getContents(id: $id) {
      id
      author
      text
      createdAt
      updatedAt
    }
  }
`;
export const listContents = /* GraphQL */ `
  query ListContents(
    $filter: ModelContentsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        author
        text
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
