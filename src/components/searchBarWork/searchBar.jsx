import React, { useState, useEffect } from "react";
import { orders } from "../../data/orders";
import { useDispatch } from "react-redux";
import { setOrder } from "../../store/actions/eachOrderAction";
import "./searchBar.css";
import { Button, Typography , Stack, TextField} from "@mui/material";

const SearchBar = ({ setAllOrders }) => {
  const dispatch = useDispatch();

  const { Items } = orders[0];

  const [suggestions, setSuggestions] = useState(Items);
  const [productTitle, setProductTitle] = useState("");

  const onTextChanged = (e) => {
    let value = e.target.value;
    let suggestions = [];
    if (value.length > 0) {
      const regex = new RegExp(`${value}`, "i");
      suggestions = Items.filter((v) => regex.test(v.itemName));
    }else{
      suggestions = Items
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
      <div style={{marginLeft:"-2px",display:'flex', flexDirection:'row', flexWrap:"wrap"}} >
        {suggestions.map((item) => (
        
            <div>
          <Button sx={{ width:"180px", margin:'6px', height:'100px'}}  variant="contained" color="info" size="small"  onClick={() => SetOrders(item)}> {item.itemName} <br/> { `(Quant.) ${item.quantity} (Price) ${item.unitPrize}` }
          </Button>
         </div>
         
        ))}
      </div>
    );
  };

  return (
   
 <div style={{
   padding:"20px",
   display:'flex',
   flexDirection:"column",
  //  justifyContent:"center",
   alignItems:"flex-start",   
   marginLeft:'28px'
  //  backgroundColor:'red'
 }}>

        <TextField
          value={productTitle}
          label="Search Products"
          defaultValue="Product"
          variant="outlined"
          size="large"
          color="primary"
          onChange={(e) => onTextChanged(e)}
          type="text"
          />
     
        {renderSuggestions()}
          </div>
        
 
  );
};
export default SearchBar;
