import type { UseFormRegisterReturn } from "react-hook-form";
interface InputFieldProps extends UseFormRegisterReturn {
  fieldType: string;
  fieldTitle: string;
}
const InputField = ({
  fieldType,
  fieldTitle,
  ...registerProps
}: InputFieldProps) => {
  return (
    <div className="flex flex-col gap-2 flex-1 mb-5">
      <label>{fieldTitle}</label>
      <input
        type={fieldType}
        {...registerProps}
        className="border border-gray-200 px-2 py-2"
      />
    </div>
  );
};

export default InputField;
