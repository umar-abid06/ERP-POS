import { BrowserRouter, Routes, Route } from "react-router-dom";
import ManageSelector from "../views/ManagingScreen";
import POS from "../views/POS";
import SignIn from "../views/SignIn";
import SignUp from "../views/SignUp";
import Inventory from "../views/Inventory";
import PaymentScreen from "../views/paymentScreen/paymentScreen";
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
        <Route path="/posScreen/payment" element={<PaymentScreen />} />

      </Routes>
    </BrowserRouter>
  );
};
export default Navigator;
