import React, { useState } from "react";
import "./App.css";
import OrderTable from "./components/orderTableWork/orderTable";
import SearchBar from "./components/searchBarWork/searchBar";
import { Provider } from "react-redux";
import { store } from "./store/index";
import Navigator from "./config/routers";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Navigator />
      </div>
    </Provider>
  );
};

export default App;
