import { useQuery } from "@apollo/client";
import { GET_COURSES } from "../utils/queries";
import Spinner from "./Progress";
import Auth from "../utils/auth";

import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Grid, Container } from "@mui/material/";

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

export function GridTemplateColumns() {
  const { data, loading } = useQuery(GET_COURSES);
  const courseData = data?.courses || {};

  //check if user is logged in
  const token = Auth.loggedIn() ? Auth.getToken() : null;
  

  return loading ? (
    <Spinner />
  ) : (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {courseData.map((course) => {
        return (
          <Grid item xs={12} sm={4} md={4} key={course._id}>
            <Item>
              <h1>{course.courseTitle}</h1>
              <h2>{course.description}</h2>
              <h3>Creator</h3>
              <p>{course.creator.firstName}</p>
              <p>{course.creator.lastName}</p>
              <p>{course.creator.email}</p>

              {token ? (
                <Button href={`/courses/${course._id}`}>
                  View Course Info
                </Button>
              ) : (
                <Button href={`/login`}>
                  Login to see more
                </Button>
              )}
            </Item>
          </Grid>
        );
      })}
    </Grid>
  );
}

const Courses = () => {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        marginTop: "6em",
      }}
    >
      <h1>Courses</h1>
      <GridTemplateColumns />
    </Container>
  );
};

export default Courses;
