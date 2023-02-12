/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateContentsInput = {
  id?: string | null,
  author: string,
  text: string,
};

export type ModelContentsConditionInput = {
  author?: ModelStringInput | null,
  text?: ModelStringInput | null,
  and?: Array< ModelContentsConditionInput | null > | null,
  or?: Array< ModelContentsConditionInput | null > | null,
  not?: ModelContentsConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Contents = {
  __typename: "Contents",
  id: string,
  author: string,
  text: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateContentsInput = {
  id: string,
  author?: string | null,
  text?: string | null,
};

export type DeleteContentsInput = {
  id: string,
};

export type ModelContentsFilterInput = {
  id?: ModelIDInput | null,
  author?: ModelStringInput | null,
  text?: ModelStringInput | null,
  and?: Array< ModelContentsFilterInput | null > | null,
  or?: Array< ModelContentsFilterInput | null > | null,
  not?: ModelContentsFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelContentsConnection = {
  __typename: "ModelContentsConnection",
  items:  Array<Contents | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionContentsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  author?: ModelSubscriptionStringInput | null,
  text?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionContentsFilterInput | null > | null,
  or?: Array< ModelSubscriptionContentsFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type CreateContentsMutationVariables = {
  input: CreateContentsInput,
  condition?: ModelContentsConditionInput | null,
};

export type CreateContentsMutation = {
  createContents?:  {
    __typename: "Contents",
    id: string,
    author: string,
    text: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateContentsMutationVariables = {
  input: UpdateContentsInput,
  condition?: ModelContentsConditionInput | null,
};

export type UpdateContentsMutation = {
  updateContents?:  {
    __typename: "Contents",
    id: string,
    author: string,
    text: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteContentsMutationVariables = {
  input: DeleteContentsInput,
  condition?: ModelContentsConditionInput | null,
};

export type DeleteContentsMutation = {
  deleteContents?:  {
    __typename: "Contents",
    id: string,
    author: string,
    text: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetContentsQueryVariables = {
  id: string,
};

export type GetContentsQuery = {
  getContents?:  {
    __typename: "Contents",
    id: string,
    author: string,
    text: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListContentsQueryVariables = {
  filter?: ModelContentsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListContentsQuery = {
  listContents?:  {
    __typename: "ModelContentsConnection",
    items:  Array< {
      __typename: "Contents",
      id: string,
      author: string,
      text: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateContentsSubscriptionVariables = {
  filter?: ModelSubscriptionContentsFilterInput | null,
};

export type OnCreateContentsSubscription = {
  onCreateContents?:  {
    __typename: "Contents",
    id: string,
    author: string,
    text: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateContentsSubscriptionVariables = {
  filter?: ModelSubscriptionContentsFilterInput | null,
};

export type OnUpdateContentsSubscription = {
  onUpdateContents?:  {
    __typename: "Contents",
    id: string,
    author: string,
    text: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteContentsSubscriptionVariables = {
  filter?: ModelSubscriptionContentsFilterInput | null,
};

export type OnDeleteContentsSubscription = {
  onDeleteContents?:  {
    __typename: "Contents",
    id: string,
    author: string,
    text: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
