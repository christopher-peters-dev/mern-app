import { Outlet } from "react-router";
import Footer from "./common/Footer";
import Header from "./common/Header";
import Hero from "./common/Hero";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      <Outlet />
      <Footer />
    </div>
  );
};
export default Layout;
