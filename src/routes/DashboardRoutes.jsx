import { Route, Routes } from "react-router-dom";
import { Billing, DashboardHome, RTL, Tables } from "../pages";
import { Navbar } from "../modules";

const DashboardRoutes = () => {
  return (
    <div className="flex justify-between bg-home">
      <Navbar />
      <div className="w-[80%] h-[100vh] overflow-y-auto">
        <Routes>
          <Route path="/" element={<DashboardHome />}></Route>
          <Route path="/tables" element={<Tables />}></Route>
          <Route path="/billing" element={<Billing />}></Route>
          <Route path="/rtl" element={<RTL />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default DashboardRoutes;
