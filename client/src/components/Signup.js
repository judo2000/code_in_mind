import { Form, Field } from "react-final-form";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { ADD_USER } from "../utils/mutations";

export const Signup = () => {
  const [signupMutation] = useMutation(ADD_USER);
  const navigate = useNavigate();

  return (
    <Form
      onSubmit={async (values) => {
        await signupMutation({
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
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      }}
      render={({ values, handleSubmit, form }) => {
        return (
          <div>
            <br />
            <br />
            <h1>FirstName</h1>
            <Field name="firstName" component="input" />
            <h1>Last Name</h1>
            <Field name="lastName" component="input" />
            <h1>Email</h1>
            <Field name="email" component="input" />
            <h1>Password</h1>
            <Field name="password" component="input" type="password" />
            <button
              disabled={
                values?.password?.length === 0 || values?.email?.length === 0
              }
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
