import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="bg-blue-800 py-6">
      <div className="container mx-auto flex justify-between items-center text-white">
        <h1 className="text-3xl font-bold tracking-tight">
          <Link to="/">MernHolidays.com</Link>
        </h1>
        <ul className="text-white flex gap-5 justify-between items-center tracking-tight">
          <Link to="/privacy">
            <li>Privacy Policy</li>
          </Link>
          <Link to="/privacy">
            <li>Terms of Service</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};
export default Footer;
