import { Form, Field } from "react-final-form";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { ADD_USER } from "../utils/mutations";
import { Container, Button } from "@mui/material/";

export const Signup = () => {
  const [signupMutation] = useMutation(ADD_USER);
  const navigate = useNavigate();

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        marginTop: "8em",
      }}
      maxWidth="sm"
    >
      <h2>Sign Up</h2>
      <Form
        onSubmit={async (values) => {
          await signupMutation({
            variables: {
              ...values,
            },
            onCompleted: (data) => {
              localStorage.setItem("token", data?.addUser?.token);
              navigate("/dashboard");
            },
          });
        }}
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
        }}
        render={({ values, handleSubmit, form }) => {
          return (
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h2 style={{ margin: 0 }}>FirstName</h2>
              <Field
                name="firstName"
                style={{ padding: ".5em", marginBottom: "1em" }}
                component="input"
              />
              <h2 style={{ margin: 0 }}>Last Name</h2>
              <Field
                name="lastName"
                style={{ padding: ".5em", marginBottom: "1em" }}
                component="input"
              />
              <h2 style={{ margin: 0 }}>Email</h2>
              <Field
                style={{ padding: ".5em", marginBottom: "1em" }}
                name="email"
                component="input"
              />
              <h2 style={{ margin: 0 }}>Password</h2>
              <Field
                name="password"
                style={{ padding: ".5em", marginBottom: "1em" }}
                component="input"
                type="password"
              />
              <br />
              <Button
                disabled={
                  values?.password?.length === 0 || values?.email?.length === 0
                }
                onClick={async () => {
                  await handleSubmit();
                  form.reset();
                }}
                variant="contained"
              >
                Submit
              </Button>
            </div>
          );
        }}
      />
    </Container>
  );
};
