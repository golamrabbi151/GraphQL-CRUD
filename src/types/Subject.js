const { gql } = require('apollo-server');

module.exports = gql`

  type Subject {
    id: ID!
    name: String!
  }

  input CreateSubjectInput {
    name: String!
  }

  input UpdateSubjectInput {
    name: String!
  }

  input DeleteSubjectInput {
    id: ID!
  }

  type DeleteSubject{
    id: ID!
  }

  extend type Query {
    subjects: [Subject]
  }

  extend type Mutation {
    createSubject(input: CreateSubjectInput!): Subject!
    updateSubject(id: ID!, input: UpdateSubjectInput!): Subject!
    deleteSubject(id: ID!): DeleteSubject!
  }
`;
