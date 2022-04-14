import { useQuery } from "@apollo/client";
import { GET_COURSES } from "../utils/queries";
import Spinner from "./Progress";

import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Container } from "@mui/material/";

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
  return loading ? (
    <Spinner />
  ) : (
    <div style={{ width: "100%" }}>
      <Box
        sx={{
          display: "grid",
          marginTop: "2em",
          gridTemplateColumns: "repeat(3, 1fr)",
        }}
      >
        {courseData.map((course) => {
          return (
            <Item key={course._id}>
              <h1>{course.courseTitle}</h1>
              <h2>{course.description}</h2>
              <h3>Creator</h3>
              <p>{course.creator.firstName}</p>
              <p>{course.creator.lastName}</p>
              <p>{course.creator.email}</p>
              <Button href={`/courses/${course._id}`}>View Course Info</Button>
            </Item>
          );
        })}
      </Box>
    </div>
  );
}

const Courses = () => {
  return (
    <Container style={{ marginTop: "8em" }}>
      <h1>Courses</h1>
      <GridTemplateColumns />
    </Container>
  );
};

export default Courses;
