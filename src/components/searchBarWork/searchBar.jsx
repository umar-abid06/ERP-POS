import React, { useState, useEffect } from "react";
import { orders } from "../../data/orders";
import { useDispatch } from "react-redux";
import { setOrder } from "../../store/actions/eachOrderAction";
import "./searchBar.css";

const SearchBar = ({ setAllOrders }) => {
  const dispatch = useDispatch();

  const { Items } = orders[0];

  const [suggestions, setSuggestions] = useState([]);
  const [productTitle, setProductTitle] = useState("");

  const onTextChanged = (e) => {
    let value = e.target.value;
    let suggestions = [];
    if (value.length > 0) {
      const regex = new RegExp(`${value}`, "i");
      suggestions = Items.filter((v) => regex.test(v.itemName));
    }
    setSuggestions(suggestions);
    setProductTitle(value);
  };

  const SetOrders = (item) => {
    setAllOrders([item]);
  };
  const renderSuggestions = () => {
    if (suggestions.length === 0) {
      return null;
    }
    return (
      <ul>
        {suggestions.map((item) => (
          <li onClick={() => SetOrders(item)}>{item.itemName}</li>
        ))}
      </ul>
    );
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div className="search-fields">
        <input
          value={productTitle}
          placeholder="Product"
          onChange={(e) => onTextChanged(e)}
          type="text"
        />
        {renderSuggestions()}
      </div>
    </div>
  );
};
export default SearchBar;
