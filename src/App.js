import React, { useState } from "react";
import "./App.css";
import OrderTable from "./components/orderTableWork/orderTable";
import SearchBar from "./components/searchBarWork/searchBar";
import { Provider } from "react-redux";
import { store } from "./store/index";

const App = () => {
  const [allOrders, setAllOrders] = useState([]);
  return (
    <Provider store={store}>
      <SearchBar setAllOrders={setAllOrders} />
      <OrderTable allOrders={allOrders} />
    </Provider>
  );
};

export default App;
