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
import Button from "@mui/material/Button";

const SingleCourse = () => {
  const token = Auth.loggedIn() ? Auth.getToken() : null;
  const user = jwt(token);

  const navigate = useNavigate();

  const routeChange = () => {
    let path = `/dashboard`;
    navigate(path);
  };

  const [enrollMutation] = useMutation(ENROLL_IN_COURSE);

  const [deleteMutation] = useMutation(DELETE_COURSE);
  const { id } = useParams();

  const { loading, data } = useQuery(GET_COURSE, {
    variables: { _id: id },
  });

  const course = data?.course || {};

  return loading ? (
    <Spinner />
  ) : (
    <div
      style={{
        paddingTop: "5em",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h2>Course</h2>
      <h3 style={{ margin: 1 }}>{course.courseTitle}</h3>
      <h5 style={{ margin: 1 }}>{course.description}</h5>
      <p style={{ margin: 1 }}>
        Created by: {course.creator.firstName} {course.creator.lastName}
      </p>
      <br />
      <Button
        variant="contained"
        onClick={() =>
          enrollMutation(
            {
              variables: {
                courseId: id,
              },
            },
            routeChange()
          )
        }
      >
        Enroll In Course
      </Button>
      {course.creator._id === user.data._id ? (
        <Button
          color="error"
          variant="contained"
          sx={{ marginTop: "2em" }}
          onClick={() =>
            deleteMutation(
              {
                variables: {
                  courseId: id,
                },
              },
              routeChange()
            )
          }
        >
          Delete Course
        </Button>
      ) : (
        ""
      )}
    </div>
  );
};

export default SingleCourse;
