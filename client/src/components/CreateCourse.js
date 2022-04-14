import jwt from "jwt-decode";
import Auth from "../utils/auth";
import { Form, Field } from "react-final-form";
import { useEffect } from "react";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { CREATE_COURSE } from "../utils/mutations";
import { Button } from "@mui/material";

export const CreateCourse = () => {
  const token = Auth.loggedIn() ? Auth.getToken() : null;
  const user = jwt(token);

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
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              margin: "0 auto",
              width: "33%",
            }}
          >
            <h2 style={{ marginTop: "6em" }}>Course Title</h2>
            <Field
              style={{ padding: ".5em" }}
              name="courseTitle"
              component="input"
            />
            <h2>Description</h2>
            <Field
              name="description"
              style={{ padding: ".5em" }}
              component="textarea"
              rows="15"
            />
            <br />
            <br />
            <Button
              variant="contained"
              onClick={async () => {
                await handleSubmit();
                form.reset();
              }}
            >
              Submit
            </Button>
          </div>
        );
      }}
    />
  );
};
