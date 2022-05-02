import { BrowserRouter, Routes, Route } from "react-router-dom";
import ManageSelector from "../views/ManagingScreen";
import POS from "../views/POS";
import SignIn from "../views/SignIn";
import SignUp from "../views/SignUp";
import Inventory from "../views/Inventory";
const Navigator = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/posScreen" element={<POS />} />
        <Route path="/managerSelector" element={<ManageSelector />} />
        <Route path="/inventory" element={<Inventory />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Navigator;
