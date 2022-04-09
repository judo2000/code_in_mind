const { gql } = require("apollo-server-express");
const typeDefs = gql`
  type User {
    _id: ID!
    email: String
    firstName: String
    lastName: String
    createdCourses: [Course]
    enrolledCourseIds: [ID]
    enrolledCourses: [Course]
  }

  type Course {
    _id: ID
    courseTitle: String!
    description: String!
    creator: User
  }

  type Auth {
    token: String
    user: User
  }

  type Query {
    me: User
    user(_id: String!): User
    users: [User!]!
    courses: [Course!]!
    course(_id: String!): Course
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Auth
    enrollInCourse(courseId: String!): User
    addCourse(
      courseTitle: String!
      description: String!
      creator: String!
    ): Course
  }
`;
// export the typeDef
module.exports = typeDefs;
