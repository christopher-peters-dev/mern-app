import Layout from "./components/Layout";
import { Routes, Route } from "react-router";
import Home from "./components/pages/Home";
import Register from "./components/pages/Auth/Register";
import Login from "./components/pages/Auth/Login";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="signin" element={<Login />} />
      </Route>
    </Routes>
  );
};
export default App;
