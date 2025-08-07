import { Route, Routes } from "react-router-dom";
import { Home, Login, Register } from "../pages";

const LoginRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
    </Routes>
  );
};

export default LoginRoutes;
