import jwt from "jwt-decode";
import Auth from "../utils/auth";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { useMutation } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_COURSE } from "../utils/queries";
import { ENROLL_IN_COURSE } from "../utils/mutations";
import { DELETE_COURSE } from "../utils/mutations";
import Spinner from "./Progress";

const SingleCourse = () => {
  const navigate = useNavigate();

  const routeChange = () =>{ 
    let path = `/dashboard`; 
    navigate(path);
  }

  const [enrollMutation] = useMutation(ENROLL_IN_COURSE);

  const [deleteMutation] = useMutation(DELETE_COURSE)
  const { id } = useParams();

  const { loading, data } = useQuery(GET_COURSE, {
    variables: { _id: id },
  });
  console.log(id);
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
              courseId: id,
            },
          },
          routeChange()
            )
          
        }
      >
        Enroll In Course
      </button>
      <button
        onClick={() =>
          deleteMutation({
            variables: {
              courseId: id,
            },
          },
          routeChange()
            )
          
        }
      >
        Delete Course
      </button>
    </div>
  );
};



export default SingleCourse;
