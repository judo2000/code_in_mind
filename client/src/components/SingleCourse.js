import jwt from "jwt-decode";
import Auth from "../utils/auth";
import { useQuery } from "@apollo/client";
import { useMutation } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_COURSE } from "../utils/queries";
import { ENROLL_IN_COURSE } from "../utils/mutations";
import Spinner from "./Progress";

const SingleCourse = () => {
  const token = Auth.loggedIn() ? Auth.getToken() : null;

  const user = jwt(token);
  console.log(user, 14)
  const [enrollMutation] = useMutation(ENROLL_IN_COURSE);
  const { id } = useParams();
  console.log(id, 17);
  const { loading, data } = useQuery(GET_COURSE, {
    variables: { _id: id },
  });
  const course = data?.course || {};

  return loading ? (
    <Spinner />
  ) : (
    <div>
      <br />
      <br />
      <br />
      <br />
      <h2>Course</h2>
      <h3>{course.courseTitle}</h3>
      <button
        onClick={() =>
          enrollMutation({
            variables: {
              _id: course.courseId,
              enrolledCoursesIds: user._id
            },
          })
        }
      >
        Enroll In Course
      </button>
    </div>
  );
};

export default SingleCourse;
