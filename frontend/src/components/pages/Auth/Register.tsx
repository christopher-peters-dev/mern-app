import { useForm, type SubmitHandler } from "react-hook-form";
import InputField from "@/components/common/Form/InputField";
import ActionButton from "@/components/common/Interactive/ActionButton";
import { Link } from "react-router";
import { registerSchema, type RegisterInput } from "@/schemas/register.schema";
import { zodResolver } from "@hookform/resolvers/zod";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterInput>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    resolver: zodResolver(registerSchema),
  });
  const onSubmit: SubmitHandler<RegisterInput> = (data) => {
    console.log("form submitted", data);
  };
  return (
    <div className="container mx-auto flex flex-col flex-1 py-10">
      <div className="flex flex-col">
        <span className="text-4xl font-bold mb-10">Create an Account</span>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex gap-10 justify-between">
            <InputField
              fieldType="text"
              fieldTitle="First Name"
              {...register("firstName")}
              errors={errors}
            />

            <InputField
              fieldType="text"
              fieldTitle="Last Name"
              {...register("lastName")}
              errors={errors}
            />
          </div>
          <div className="flex">
            <InputField
              fieldType="email"
              fieldTitle="Email"
              {...register("email")}
              errors={errors}
            />
          </div>
          <div className="flex">
            <InputField
              fieldType="password"
              fieldTitle="Password"
              {...register("password")}
              errors={errors}
            />
          </div>
          <div className="flex">
            <InputField
              fieldType="password"
              fieldTitle="Confirm Password"
              {...register("confirmPassword")}
              errors={errors}
            />
          </div>
          <div className="flex justify-between mt-5">
            <p>
              Already Registered?{" "}
              <Link to="/signin" className="underline">
                Sign in here
              </Link>
            </p>
            <ActionButton name="createAccount" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
