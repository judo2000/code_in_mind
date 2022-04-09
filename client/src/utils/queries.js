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

export const GET_COURSE = gql`
  query Course($_id: String!) {
    course(_id: $_id) {
      _id
      courseTitle
      description
      creator {
        _id
        email
        firstName
        lastName
        createdCourses {
          _id
          courseTitle
          description
        }
      }
    }
  }
`;

export const GET_ME = gql`
  {
    me {
      email
      firstName
      lastName
      createdCourses {
        _id
        courseTitle
        description
      }
      enrolledCourseIds
      enrolledCourses {
        _id
        courseTitle
        description
      }
    }
  }
`;
