import { Formik, Form } from "formik";
import * as Yup from "yup";
import "../styles/styles.css";
import { MyTextInput } from "../components/MyTextInput";

export const RegisterFormikPage = () => {
  return (
    <div>
      <h1>Register Formik Page</h1>

      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          passwordRepeat: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .required("Name is required")
            .min(2, "Debe de tener 2 caracteres o más")
            .max(15, "Debe de tener 15 caracteres o menos"),
          email: Yup.string()
            .email("El correo no tiene formato válido")
            .required("Email es requerido"),
          password: Yup.string()
            .min(2, "Debe de tener 6 caracteres o más")
            .required("Contraseña es requerido"),
          passwordRepeat: Yup.string()
            .oneOf([Yup.ref("password"), null], "El password no coincide")
            .required("Requerido"),
        })}
      >
        {({handleReset}) => (
          <Form>
            <MyTextInput
              label="Name"
              name="name"
              type="text"
              placeholder="John Doe"
            />

            <MyTextInput
              label="Email"
              name="email"
              type="email"
              placeholder=""
            />

            <MyTextInput
              label="Password"
              name="password"
              type="password"
              placeholder=""
            />

            <MyTextInput
              label="Confirm Password"
              name="passwordRepeat"
              type="password"
              placeholder=""
            />

            <button type="submit">Crear</button>
            <button type="button" onClick={handleReset}>Reset</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
