import { Form, Field } from "react-final-form";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { LOGIN_USER } from "../utils/mutations";
import { Button } from "@mui/material";

export const Login = () => {
  const [loginMutation] = useMutation(LOGIN_USER);
  const navigate = useNavigate();

  return (
    <Form
      afterSubmit={() => navigate("/dashboard")}
      onSubmit={async (values) => {
        await loginMutation({
          variables: {
            ...values,
          },
          onCompleted: (data) => {
            console.log(data);
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
          <div>
            <h1>Email</h1>
            <Field name="email" component="input" />
            <h1>Password</h1>
            <Field name="password" component="input" type="password" />
            <Button
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
  );
};
