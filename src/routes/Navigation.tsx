import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Navigate,
} from "react-router-dom";

import {
  DynamicForm,
  FormikAbstraction,
  FormikBasicPage,
  FormikComponents,
  FormikYupPage,
  RegisterPage,
} from "../03-forms/pages";

import logo from "./../assets/react.svg";
import { RegisterFormikPage } from '../03-forms/pages/RegisterFormikPage';

export const Navigation = () => {
  return (
    <Router>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            <li>
              <NavLink
                to="/register"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Register Page
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik-basic"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Formik Basic
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik-yup"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Formik Yup
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik-components"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Formik Components
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik-abstraction"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Formik Abstraction
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik-register"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Formik Register
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik-dynamic-form"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Formik Register
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="formik-basic" element={<FormikBasicPage />}></Route>
          <Route path="formik-yup" element={<FormikYupPage />}></Route>
          <Route
            path="formik-components"
            element={<FormikComponents />}
          ></Route>
          <Route
            path="formik-abstraction"
            element={<FormikAbstraction />}
          ></Route>
          <Route
            path="formik-register"
            element={<RegisterFormikPage />}
          ></Route>
          <Route
            path="formik-dynamic-form"
            element={<DynamicForm />}
          ></Route>
          <Route path="register" element={<DynamicForm />}></Route>
          <Route path="/*" element={<Navigate to="home" />}></Route>
        </Routes>
      </div>
    </Router>
  );
};
