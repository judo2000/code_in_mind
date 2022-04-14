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
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import { Grid, Container } from "@mui/material/";

const Dashboard = () => {
  // check if the user is logged in and has a valid token
  const token = Auth.loggedIn() ? Auth.getToken() : null;

  // if the user is not logged in redirect to login
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  });
  // checks for user if logged in
  const { loading, data } = useQuery(GET_ME);

  const user = data?.me || {};

  const enrolledCourses = user.enrolledCourses;

  const [dropMutation] = useMutation(DROP_COURSE, {
    refetchQueries: [GET_ME],
    fetchPolicy: "no-cache",
  });

  const routeChange = () => {
    let path = `/dashboard`;
    navigate(path);
  };

  function Item(props) {
    const { sx, ...other } = props;
    return (
      <Box
        sx={{
          bgcolor: (theme) =>
            theme.palette.mode === "dark" ? "#101010" : "#fff",
          color: (theme) =>
            theme.palette.mode === "dark" ? "grey.300" : "grey.800",
          border: "1px solid",
          borderColor: (theme) =>
            theme.palette.mode === "dark" ? "grey.800" : "grey.300",
          p: 1,
          m: 1,
          borderRadius: 2,
          fontSize: "0.875rem",
          fontWeight: "700",
          ...sx,
        }}
        {...other}
      />
    );
  }

  Item.propTypes = {
    sx: PropTypes.oneOfType([
      PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
      ),
      PropTypes.func,
      PropTypes.object,
    ]),
  };

  function MyCourses() {
    return loading ? (
      <div style={{ paddingTop: "10px" }}>
        <Spinner />
      </div>
    ) : enrolledCourses.length > 0 ? (
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {enrolledCourses.map((course) => (
          <Grid item xs={12} sm={4} md={4} key={course._id}>
            <Item color="secondary">
              <h3>{course.courseTitle}</h3>
              <p>{course.description}</p>
              <Button
                color="error"
                variant="contained"
                size="small"
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
              </Button>
            </Item>
          </Grid>
        ))}
      </Grid>
    ) : (
      <h2>You are not enrolled in any courses.</h2>
    );
  }

  return loading ? (
    <div>
      <Spinner />
    </div>
  ) : (
    <div className="main">
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
        maxWidth="sm"
      >
        <h1>Dashboard</h1>
        <h2>
          Welcome {user.firstName} {user.lastName}
        </h2>
        {user.isAdmin ? (
          <Button
            size="small"
            style={{ backgroundColor: "#8a2be2" }}
            className="addButton"
            variant="contained"
            href="/courses/create"
          >
            Add Course
          </Button>
        ) : (
          ""
        )}

        <h2>My Courses</h2>
        <MyCourses />
      </Container>
    </div>
  );
};

export default Dashboard;
