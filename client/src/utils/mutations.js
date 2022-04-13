import { gql } from "@apollo/client";

// mutation for logged in user
export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        firstName
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation Mutation(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
        email
        firstName
        lastName
      }
    }
  }
`;

export const CREATE_COURSE = gql`
  mutation AddCourse(
    $courseTitle: String!
    $description: String!
    $creator: String!
  ) {
    addCourse(
      courseTitle: $courseTitle
      description: $description
      creator: $creator
    ) {
      _id
      courseTitle
      description
    }
  }
`;
export const ENROLL_IN_COURSE = gql`
  mutation EnrollInCourse($courseId: String!) {
    enrollInCourse(courseId: $courseId) {
      _id
      email
      firstName
    }
  }
`;

export const DROP_COURSE = gql`
  mutation DropCourse($courseId: String!) {
    dropCourse(courseId: $courseId) {
      enrolledCourses {
        courseTitle
        _id
      }
    }
  }
`;

export const DELETE_COURSE = gql`
  mutation Mutation($courseId: String!) {
    deleteCourse(courseId: $courseId) {
      courseTitle
      _id
      description
    }
  }
`;
