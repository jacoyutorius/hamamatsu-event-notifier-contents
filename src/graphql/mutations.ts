/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createContents = /* GraphQL */ `
  mutation CreateContents(
    $input: CreateContentsInput!
    $condition: ModelContentsConditionInput
  ) {
    createContents(input: $input, condition: $condition) {
      id
      author
      text
      createdAt
      updatedAt
    }
  }
`;
export const updateContents = /* GraphQL */ `
  mutation UpdateContents(
    $input: UpdateContentsInput!
    $condition: ModelContentsConditionInput
  ) {
    updateContents(input: $input, condition: $condition) {
      id
      author
      text
      createdAt
      updatedAt
    }
  }
`;
export const deleteContents = /* GraphQL */ `
  mutation DeleteContents(
    $input: DeleteContentsInput!
    $condition: ModelContentsConditionInput
  ) {
    deleteContents(input: $input, condition: $condition) {
      id
      author
      text
      createdAt
      updatedAt
    }
  }
`;
