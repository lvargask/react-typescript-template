import { Formik, Form } from "formik";
import formJson from "../data/custom-form.json";
import { MyTextInput } from "../components/MyTextInput";
import { MySelect } from "../components/MySelect";
import * as Yup from 'yup';

const initialValues: { [key: string]: unknow } = {};
const requiredFields: { [key: string]: unknow } = {};

formJson.forEach((field) => {
  initialValues[field.name] = field.value || "";

  if (!field.validations) return;

  let schema = Yup.string();
  field.validations.forEach((validation) => {
    if (validation.type === "required") {
      schema = schema.required(validation.message);
    }

    if (validation.type === "min") {
        schema = schema.min(validation.value, validation.message);
    }

    if (validation.type === "email") {
      schema = schema.email(validation.message);
    }
  });

  requiredFields[field.name] = schema;
});

const validationSchema = Yup.object().shape(requiredFields);

export const DynamicForm = () => {
  return (
    <div>
      <h1>Dynamic Form</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={validationSchema}
      >
        {() => (
          <Form>
            {formJson.map(({ type, name, placeholder, label, options }) => {
              if (type === "select") {
                return (
                  <MySelect
                    key={name}
                    name={name}
                    label={label}
                  >
                    <option value="">Selecciona una opción</option>
                    {options?.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </MySelect>
                );
              }

              return (
                <MyTextInput
                  key={name}
                  type={type}
                  name={name}
                  label={label}
                  placeholder={placeholder}
                />
              );
            })}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
