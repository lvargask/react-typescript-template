import { useField, ErrorMessage } from 'formik';

interface MyTextInputProps {
  label: string;
  name: string;
  [x: string]: unknown;
}

export const MyCheckbox = ({ label, ...props }: MyTextInputProps) => {
  const [field] = useField({ ...props, type: "checkbox" });

  return (
    <>
      <label>
        <input type="checkbox" {...field} {...props} />
        {label}
      </label>

      <ErrorMessage name={props.name}  component="span"/>

      {/* {meta.touched && meta.error && (
        <span className="error">{meta.error}</span>
      )} */}
    </>
  );
};
