const { gql } = require('apollo-server');

module.exports = gql`

  type Student {
    id: ID!
    name: String!
    email: String!
    phone: String!
    dob: String!
    subject: [String]
  }

  input CreateStudentInput {
    name: String!
    email: String!
    phone: String!
    dob: String!
    subject: [String]
  }

  input UpdateStudentInput {
    name: String
    email: String
    phone: String
    dob: String
    subject: [String]
  }

  input DeleteStudentInput {
    id: ID!
  }

  type DeletePayload{
    id: ID!
  }

   type Query {
    students: [Student]
  }

  type Mutation {
    createStudent(input: CreateStudentInput!): Student!
    updateStudent(id: ID!, input: UpdateStudentInput!): Student!
    deleteStudent(id: ID!): DeletePayload!
  }
  
`;
