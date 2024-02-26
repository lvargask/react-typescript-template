import { Formik, Form } from "formik";
import * as yup from "yup";
import "../styles/styles.css";
import { MySelect, MyTextInput, MyCheckbox } from "../components";

export const FormikAbstraction = () => {
  return (
    <div>
      <h1>Formik Yup Page</h1>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          terms: false,
          jobType: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={yup.object({
          firstName: yup
            .string()
            .required("First Name is required")
            .max(10, "Debe de tener 15 caracteres o menos"),
          lastName: yup
            .string()
            .required("Last Name es requerido")
            .max(10, "Debe de tener 15 caracteres o menos"),
          email: yup
            .string()
            .email("El correo no tiene formato válido")
            .required("Email es requerido"),
          terms: yup
            .boolean()
            .oneOf([true], "Debe aceptar los términos y condiciones"),
          jobType: yup
            .string()
            .notOneOf(["it-jre"], "Esta opción no es permitida")
            .required("Job Type is required"),
        })}
      >
        {() => (
          <Form>
            <MyTextInput
              label="First Name"
              name="firstName"
              type="text"
              placeholder="John"
            />

            <MyTextInput
              label="Last Name"
              name="lastName"
              type="text"
              placeholder="Doe"
            />

            <MyTextInput
              label="Email"
              name="email"
              type="email"
              placeholder="johndoe@gmail.com"
            />

            <MySelect label="Job Type" name="jobType">
              <option value="">Pick someone</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-senior">IT Sr.</option>
              <option value="it-jr">IT Jr.</option>
            </MySelect>

            <MyCheckbox label="Accept terms and conditions" name="terms" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
