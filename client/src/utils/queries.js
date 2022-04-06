import { gql } from "@apollo/client";

export const GET_COURSES = gql`
  query Courses {
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
