import jwt from "jwt-decode";
import Auth from "../utils/auth";
import { Form, Field } from "react-final-form";
import { useEffect } from "react";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { CREATE_COURSE } from "../utils/mutations";

export const CreateCourse = () => {
  const token = Auth.loggedIn() ? Auth.getToken() : null;
  const user = jwt(token);
  console.log(user.data.isAdmin);

  const navigate = useNavigate();

  useEffect(() => {
    if (!token || !user.data.isAdmin) {
      navigate("/dashboard");
    }
  });

  const [addCourseMutation] = useMutation(CREATE_COURSE);

  return (
    <Form
      onSubmit={async (values) => {
        await addCourseMutation({
          variables: {
            ...values,
          },
          onCompleted: (data) => {
            console.log(data);
            navigate("/courses");
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
            <h1>Description</h1>
            <Field name="description" component="input" />

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
