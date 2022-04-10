import { Form, Field } from "react-final-form";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { ADD_COURSE } from "../utils/mutations";
import jwt from "jwt-decode";
import Auth from "../utils/auth";

export const AddCourse = () => {
  const token = Auth.loggedIn() ? Auth.getToken() : null;
  console.log(token);
  const user = jwt(token);
  console.log(user.data._id);
  const [addCourseMutation] = useMutation(ADD_COURSE);
  const navigate = useNavigate();

  return (
    <Form
      onSubmit={async (values) => {
        await addCourseMutation({
          variables: {
            ...values,
          },
          onCompleted: (data) => {
            console.log(data);
            localStorage.setItem("token", data?.addUser?.token);
            navigate("/dashboard");
          },
        });
      }}
      initialValues={{
        courseTitle: "",
        description: "",
        creator: user.data._id,
      }}
      render={({ values, handleSubmit, form }) => {
        return (
          <div>
            <br />
            <br />
            <h1>Course Title</h1>
            <Field name="courseTitle" component="input" />
            <h1>Course Description</h1>
            <Field name="description" component="input" />
            <Field name="creator" type="hidden" component="input" />

            <button
              onClick={async () => {
                await handleSubmit();
                form.reset();
              }}
            >
              Submit
            </button>
          </div>
        );
      }}
    />
  );
};
