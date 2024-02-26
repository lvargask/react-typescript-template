import { useForm } from "../hooks/useForm";
import "../styles/styles.css";

export const RegisterPage = () => {
  const {
    name,
    email,
    password,
    repeatPassword,
    onChange,
    onSubmit,
    resetForm,
    isValidEmail,
  } = useForm({
    name: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  return (
    <div>
      <h1>Register Page</h1>

      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          name="name"
          value={name}
          type="text"
          placeholder="name"
          className={name.trim().length <= 0 ? "has-error" : ""}
        />
        {name.trim().length <= 0 && <span>Este campo es necesario</span>}

        <input
          onChange={onChange}
          name="email"
          value={email}
          type="email"
          placeholder="Email"
          className={!isValidEmail(email) ? "has-error" : ""}
        />
        {!isValidEmail(email) && <span>Este campo es necesario</span>}

        <input
          onChange={onChange}
          name="password"
          value={password}
          type="password"
          placeholder="Password"
          className={password.trim().length <= 0 ? "has-error" : ""}
        />
        {password.trim().length <= 0 && <span>Este campo es necesario</span>}
        {password.trim().length > 0 && password.trim().length < 6 && (
          <span>La contraseña debe tener 6 caracteres</span>
        )}

        <input
          onChange={onChange}
          name="repeatPassword"
          value={repeatPassword}
          type="password"
          placeholder="Repeat Password"
          className={repeatPassword.trim().length <= 0 ? "has-error" : ""}
        />
        {repeatPassword.trim().length <= 0 && (
          <span>Este campo es necesario</span>
        )}
        {repeatPassword.trim().length > 0 &&
          password.trim() !== repeatPassword.trim() && (
            <span>Las contraseñas deben ser iguales</span>
          )}

        <button type="submit">Create</button>
        <button type="button" onClick={resetForm}>
          Reset Form
        </button>
      </form>
    </div>
  );
};
