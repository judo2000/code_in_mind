const { gql } = require("apollo-server-express");
const typeDefs = gql`
  type User {
    _id: ID!
    email: String
    firstName: String
    lastName: String
    enrollments: [Course]
  }

  type Course {
    courseID: ID!
    courseTitle: String!
    description: String!
  }

  type Auth {
    token: String
    user: User
  }

  input courseInput {
    courseID: ID!
    courseTitle: String!
    description: String!
  }

  type Query {
    me: User
    courses: Course
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Auth
    enrollments(input: courseInput!): User
  }
`;
// export the typeDef
module.exports = typeDefs;
