const { gql } = require("apollo-server-express");
const typeDefs = gql`
  type User {
    _id: ID!
    email: String
    firstName: String
    lastName: String
  }

  type Course {
    _id: ID
    courseTitle: String!
    description: String!
    creator: String!
  }

  type Auth {
    token: String
    user: User
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
    addCourse(
      courseTitle: String!
      description: String!
      creator: String!
    ): Course
  }
`;
// export the typeDef
module.exports = typeDefs;
