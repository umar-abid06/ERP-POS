import React from "react";
import "./App.css";
import CustomButton from "./components/button/button.component";
import SearchBar from "./components/searchBar/searchBar.component";

const App = () => {
  return (
    <div className="container">
      <div>
        <SearchBar />
      </div>
    </div>
  );
};

export default App;
