import InputField from "@/components/common/Form/InputField";
import ActionButton from "@/components/common/Interactive/ActionButton";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="container mx-auto flex flex-col flex-1 py-10">
      <div className="flex flex-col">
        <span className="text-4xl font-bold mb-10">Create an Account</span>
        <form>
          <div className="flex gap-10 justify-between">
            <InputField fieldType="text" fieldTitle="First Name" />
            <InputField fieldType="text" fieldTitle="Last Name" />
          </div>
          <div className="flex">
            <InputField fieldType="email" fieldTitle="Email" />
          </div>
          <div className="flex">
            <InputField fieldType="password" fieldTitle="Password" />
          </div>
          <div className="flex">
            <InputField fieldType="password" fieldTitle="Confirm Password" />
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
