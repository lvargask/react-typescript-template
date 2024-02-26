import { useFormik } from "formik";
import * as yup from "yup";
import "../styles/styles.css";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
}

export const FormikYupPage = () => {
  const {
    handleSubmit,
    errors,
    touched,
    getFieldProps,
  } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: yup.object().shape<FormValues>({
      firstName: yup
        .string()
        .required("First Name es requerido")
        .max(10, "Debe de tener 15 caracteres o menos"),
      lastName: yup
        .string()
        .required("Last Name es requerido")
        .max(10, "Debe de tener 15 caracteres o menos"),
      email: yup
        .string()
        .email("El correo no tiene formato válido")
        .required("Email es requerido"),
    }),
  });

  return (
    <div>
      <h1>Formik Components</h1>

      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="firstName">First Name</label>
        <input type="text" {...getFieldProps("firstName")} />
        {touched.firstName && errors.firstName && (
          <span>{errors.firstName}</span>
        )}

        <label htmlFor="lastName">Last Name</label>
        <input type="text" {...getFieldProps("lastName")} />
        {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

        <label htmlFor="email">Email</label>
        <input type="email" {...getFieldProps("email")} />
        {touched.email && errors.email && <span>{errors.email}</span>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
