import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_COURSE } from "../utils/queries";
import Spinner from "./Progress";

const SingleCourse = () => {
  const { id } = useParams();
  console.log(id);
  const { loading, data } = useQuery(GET_COURSE, {
    variables: { _id: id },
  });
  const course = data?.course || {};
  console.log(course);
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
    </div>
  );
};

export default SingleCourse;
