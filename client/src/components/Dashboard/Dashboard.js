import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useMutation } from "@apollo/client";

import Auth from "../../utils/auth";
import { useQuery } from "@apollo/client";
import { GET_ME } from "../../utils/queries";
import { DROP_COURSE } from "../../utils/mutations";
import Spinner from "../Progress";
import "./dashboard.style.css";
import Button from "@mui/material/Button";

const Dashboard = () => {
  // check if the user is logged in and has a valid token
  const token = Auth.loggedIn() ? Auth.getToken() : null;

  // if the user is not logged in redirect to login
  //const user = jwt(token);
  const navigate = useNavigate();
  console.log(navigate, 20);
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  });
  // checks for user if logged in
  const { loading, data } = useQuery(GET_ME);
  console.log(data);
  const user = data?.me || {};
  console.log(user, 26);

  const enrolledCourses = user.enrolledCourses;

  const [dropMutation] = useMutation(DROP_COURSE, {
    refetchQueries: [GET_ME],
    fetchPolicy: "no-cache",
  });

  const routeChange = () => {
    let path = `/dashboard`;
    navigate(path);
  };

  function MyCourses() {
    return enrolledCourses.length > 0 ? (
      <div style={{ width: "100%" }}>
        {enrolledCourses.map((course) => {
          return (
            <div key={course._id}>
              <p>{course.courseTitle}</p>
              <p>{course.courseTitle}</p>
              <button
                onClick={() =>
                  dropMutation(
                    {
                      variables: {
                        courseId: course._id,
                      },
                    },
                    routeChange()
                  )
                }
              >
                Drop Course
              </button>
            </div>
          );
        })}
      </div>
    ) : (
      <h2>You are not enrolled in any courses.</h2>
    );
  }

  console.log(enrolledCourses);
  console.log(user, 47);
  return loading ? (
    <div>
      <Spinner />
    </div>
  ) : (
    <div className="main">
      <h1>Dashboard</h1>
      <h1>
        Welcome {user.firstName} {user.lastName}
      </h1>
      <h2>My Courses</h2>
      {user.isAdmin ? (
        <a href={`/courses/create`}>
          <Button>Add Course</Button>
        </a>
      ) : (
        ""
      )}

      <MyCourses />
    </div>
  );
};

export default Dashboard;
