import OrderTable from "../../components/orderTableWork/orderTable";
import SearchBar from "../../components/searchBarWork/searchBar";
import Navbar from "../../components/navbar/Navbar";

import { useState } from "react";
const POS = () => {
  const [allOrders, setAllOrders] = useState([]);

  return (
    <div>
      <Navbar
        title={[
          { label: "Log Out", href: "/login" },
          { label: "Managing Screen", href: "/managerSelector" },
        ]}
      />
      <SearchBar setAllOrders={setAllOrders} />
      <OrderTable allOrders={allOrders} />
    </div>
  );
};
export default POS;
