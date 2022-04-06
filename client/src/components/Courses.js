import { useQuery } from "@apollo/client";
import { GET_COURSES } from "../utils/queries";

const Courses = () => {
  const { loading, data } = useQuery(GET_COURSES);
  if (loading) {
    return <h1>Loading</h1>;
  }

  return data.map((course) => <h2>{course.title}</h2>);
};

export default Courses;
