import React from "react";
import "./App.css";
import SearchBar from "./components/searchBar/searchBar.component";
import OrderTable from "./components/orderTable/orderTable";
import { Provider } from "react-redux";
import { store } from "./store/index";

const App = () => {
  return (
    <Provider store={store}>
      <OrderTable />
      <SearchBar />
    </Provider>
  );
};

export default App;
