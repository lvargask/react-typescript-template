import { useFormik, FormikErrors } from "formik";
import "../styles/styles.css";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
}

export const FormikBasicPage = () => {
  const validate = ({ firstName, lastName, email }: FormValues) => {
    const errors: FormikErrors = {};

    if (!firstName) {
      errors.firstName = "First Name is required";
    } else if (firstName.length < 3) {
      errors.firstName = "First Name must be at least 3 characters";
    }

    if (!lastName) {
      errors.lastName = "Last Name is required";
    } else if (lastName.length < 3) {
      errors.lastName = "Last Name must be at least 3 characters";
    }

    if (!email) {
      errors.email = "Email is Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      errors.email = "Invalid email address";
    }

    return errors;
  };

  const { handleBlur, handleChange, handleSubmit, values, errors, touched } =
    useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        email: "",
      },
      onSubmit: (values) => {
        console.log(values);
      },
      validate,
    });

  return (
    <div>
      <h1>Formik Basic Page</h1>

      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="firstName">First Name</label>
        <input
          value={values.firstName}
          onBlur={handleBlur}
          onChange={handleChange}
          type="text"
          name="firstName"
        />
        {touched.firstName && errors.firstName && (
          <span>{errors.firstName}</span>
        )}

        <label htmlFor="lastName">Last Name</label>
        <input
          value={values.lastName}
          onBlur={handleBlur}
          onChange={handleChange}
          type="text"
          name="lastName"
        />
        {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

        <label htmlFor="email">Email</label>
        <input
          value={values.email}
          onBlur={handleBlur}
          onChange={handleChange}
          type="email"
          name="email"
        />
        {touched.email && errors.email && <span>{errors.email}</span>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
