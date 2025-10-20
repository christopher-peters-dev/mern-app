import type { UseFormRegisterReturn, FieldErrors } from "react-hook-form";
interface InputFieldProps extends UseFormRegisterReturn {
  fieldType: string;
  fieldTitle: string;
  errors?: FieldErrors;
}
const InputField = ({
  fieldType,
  fieldTitle,
  errors,
  ...registerProps
}: InputFieldProps) => {
  const { message } = errors?.[registerProps["name"]] || {};
  return (
    <div className="flex flex-col gap-2 flex-1 mb-5">
      <label>{fieldTitle}</label>
      <input
        type={fieldType}
        {...registerProps}
        className="border border-gray-200 px-2 py-2"
      />
      {message && <span className="text-red-500 text-[0.9rem]">{message}</span>}
    </div>
  );
};

export default InputField;
