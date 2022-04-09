import { gql } from "@apollo/client";

export const GET_COURSES = gql`
  {
    courses {
      _id
      courseTitle
      description
      creator {
        _id
        firstName
        lastName
        email
      }
    }
  }
`;

export const GET_ME = gql`
  {
    me {
      _id
      email
      firstName
      lastName
    }
  }
`;
