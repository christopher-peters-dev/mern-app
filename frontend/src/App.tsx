import Layout from "./components/Layout";
import { Routes, Route } from "react-router";
import Home from "./components/pages/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};
export default App;
