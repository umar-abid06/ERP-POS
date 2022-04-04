import React, { useState } from "react";
import "./App.css";
import SearchBar from "./components/searchBar/searchBar.component";
import OrderTable from "./components/orderTable/orderTable";
import { Provider } from "react-redux";
import { store } from "./store/index";

const App = () => {
  const [allOrders, setAllOrders] = useState([]);
  return (
    <Provider store={store}>
      <OrderTable setAllOrders={setAllOrders} />
      <SearchBar allOrders={allOrders} />
    </Provider>
  );
};

export default App;
