import ActionButton from "./Interactive/ActionButton";
import { Link } from "react-router";
const Header = () => {
  return (
    <div className="bg-blue-800 py-6">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-3xl text-white font-bold tracking-tight">
          <Link to="/">MernHolidays.com</Link>
        </h1>
        <ActionButton name="signup" />
      </div>
    </div>
  );
};
export default Header;
