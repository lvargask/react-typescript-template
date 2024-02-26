import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import "../styles/styles.css";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
}

export const FormikComponents = () => {
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
        validationSchema={yup.object().shape<FormValues>({
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
          terms: yup.boolean().oneOf([true], "Debe aceptar los términos y condiciones"),
          jobType: yup.string().notOneOf(['it-jre'], 'Esta opción no es permitida').required("Job Type is required"),
        })}
      >
        {() => (
          <Form>
            <label htmlFor="firstName">First Name</label>
            <Field name="firstName" type="text" />
            <ErrorMessage name="firstName" component="span" />

            <label htmlFor="lastName">Last Name</label>
            <Field name="lastName" type="text" />
            <ErrorMessage name="lastName" component="span" />

            <label htmlFor="email">Email</label>
            <Field name="email" type="text" />
            <ErrorMessage name="email" component="span" />
            
            <label htmlFor="jobType">Job Type</label>
            <Field name="jobType" as="select">
                <option value="">Pick someone</option>
                <option value="developer">Developer</option>
                <option value="designer">Designer</option>
                <option value="it-senior">IT Sr.</option>
                <option value="it-jr">IT Jr.</option>

              </Field>
            <ErrorMessage name="jobType" component="span" />

            <label>
              <Field name="terms" type="checkbox" />
              Terms and conditions
            </label>
            <ErrorMessage name="terms" component="span" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
