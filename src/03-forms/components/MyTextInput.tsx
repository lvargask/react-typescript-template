import { useField, ErrorMessage } from 'formik';

interface MyTextInputProps {
  label: string;
  name: string;
  type?: "text" | "email" | "password";
  placeholder?: string;
  [x: string]: unknown;
}

export const MyTextInput = ({ label, ...props }: MyTextInputProps) => {
  const [field] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input {...field} {...props} />
      
      <ErrorMessage name={props.name}  component="span"/>
      {/* {meta.touched && meta.error && (
        <span className="error">{meta.error}</span>
      )} */}
    </>
  );
};
