import { Form, Field } from "react-final-form";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { CREATE_COURSE } from "../utils/mutations";

export const CreateCourse = () => {
  const [addCourseMutation] = useMutation(CREATE_COURSE);
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
            navigate("/dashboard");
          },
        });
      }}
      initialValues={{
        courseTitle: "",
        description: "",
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