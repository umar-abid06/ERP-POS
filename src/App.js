import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <h1 className="heading">Point of Sale</h1>
      <div className="sections">
        {/* Side navigation */}
        <h3 className="side-bar">This is the navigation bar</h3>
        {/* Middle Table
      bottom total
    */}
        <div className="main-screen">
          <div className="middle-block">
            <h3 className="table">This this the main Table</h3>
            <h3 className="bottom-bar">This is the total amount section</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
