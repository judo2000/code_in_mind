import { Form, Field } from "react-final-form";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { LOGIN_USER } from "../utils/mutations";
import { Button } from "@mui/material";
import { Container } from "@mui/material/";

export const Login = () => {
  const [loginMutation] = useMutation(LOGIN_USER);
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
      <h1>Login</h1>
      <Form
        afterSubmit={() => navigate("/dashboard")}
        onSubmit={async (values) => {
          await loginMutation({
            variables: {
              ...values,
            },
            onCompleted: (data) => {
              localStorage.setItem("token", data?.login?.token);
              window.location.href = "/dashboard";
            },
          });
        }}
        initialValues={{
          email: "",
          password: "",
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
              <h1>Email</h1>
              <Field
                name="email"
                style={{ padding: ".5em" }}
                component="input"
              />
              <h1>Password</h1>
              <Field
                name="password"
                style={{ padding: ".5em" }}
                component="input"
                type="password"
              />
              <Button
                sx={{ marginTop: "2em" }}
                disabled={
                  values?.password?.length === 0 || values?.email?.length === 0
                }
                onClick={async () => {
                  await handleSubmit();
                  form.reset();
                }}
                variant="contained"
                color="primary"
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
