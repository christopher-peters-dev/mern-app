import ActionButton from "./Interactive/ActionButton";
const Header = () => {
  return (
    <div className="bg-blue-800 py-6">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-3xl text-white font-bold tracking-tight">
          Mern Holidays
        </h1>
        <ActionButton name="signup" />
      </div>
    </div>
  );
};
export default Header;
