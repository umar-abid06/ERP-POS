import React, { useState, useEffect } from "react";
import "./searchBar.styles.css";
import SearchIcon from "@mui/icons-material/Search";
import { orders } from "../../data/orders";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Button, Stack, Typography } from "@mui/material";
import CustomButton from "../button/button.component";

// const products = [
//   { title: "Macroni", id: 1 },
//   { title: "Macron", id: 9 },
//   { title: "whatever", id: 2 },
//   { title: "Lasagna", id: 3 },
//   { title: "Pasta", id: 4 },
//   { title: "Noodles", id: 5 },
//   { title: "Spaghetti", id: 6 },
// ];

const SearchBar = ({ prods }) => {
  const { Items } = orders[0];
  const [suggestions, setSuggestions] = useState([]);
  const [productTitle, setProductTitle] = useState("");
  const [productID, setProductID] = useState("");
  const [productCode, setProductCode] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productQuantity, setProductQuantity] = useState("");
  const [productArr, setProductArr] = useState([]);
  const [sum, setSum] = useState(0);

  const onTextChanged = (e) => {
    let value = e.target.value;
    let suggestions = [];
    if (value.length > 0) {
      const regex = new RegExp(`${value}`, "i");
      suggestions = Items.filter((v) => regex.test(v.itemName));
      //   console.log(suggestions);
    }
    setSuggestions(suggestions);
    setProductTitle(value);
  };
  const renderSuggestions = () => {
    if (suggestions.length === 0) {
      return null;
    }
    return (
      <ul>
        {suggestions.map((item) => (
          <li onClick={() => selectedSuggestion(item)}>{item.itemName}</li>
        ))}
      </ul>
    );
  };

  let finalArr = [
    {
      productID: productID,
      productCode: productCode,
      productTitle: productTitle,
      productPrice: productPrice,
      productQuantity: productQuantity,
    },
  ];

  let totalPrice = [];

  useEffect(() => {
    setProductArr(productArr.concat(finalArr));
    // setProductTitle("");
    console.log(productArr);
  }, [productID]);

  const takeTotalPriceValue = (a) => {
    totalPrice = +totalPrice + +a.productPrice;

    return a.productPrice;
  };

  const selectedSuggestion = (value) => {
    setSuggestions([]);
    setProductTitle(value.itemName);
    setProductID(value.itemID);
    setProductCode(value.itemCode);
    setProductPrice(value.unitPrize);
    setProductQuantity(value.quantity);

    if (value.itemID === productID) {
      return setProductID(productID + Math.random());
    }
  };

  const handleProceed = () => {
    const order = [{ orderID: productArr.productID }, totalPrice];
    console.log(order);
  };
  return (
    <>
      <div style={{ justifyContent: "space-between" }}>
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
          <div>
            <Typography
              style={{
                marginRight: 40,
                paddingBottom: 30,
              }}
              variant="h4"
            >
              {`Last Product Entered: ${productTitle} (Rs. ${productPrice})`}
            </Typography>
          </div>
        </div>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{
                    fontSize: 20,
                    textAlign: "left",
                    backgroundColor: "rgb(201, 201, 201)",
                  }}
                >
                  Name
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: 20,
                    textAlign: "center",
                    backgroundColor: "rgb(201, 201, 201)",
                  }}
                  align="right"
                >
                  Code
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: 20,
                    textAlign: "center",
                    backgroundColor: "rgb(201, 201, 201)",
                  }}
                  align="right"
                >
                  Quantity&nbsp;(number)
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: 20,
                    textAlign: "center",
                    backgroundColor: "rgb(201, 201, 201)",
                  }}
                  align="right"
                >
                  Price&nbsp;(Rs)
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {productArr?.map((items) => (
                <TableRow
                  key={items.productID}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    sx={{
                      fontSize: 17,
                      textAlign: "left",
                    }}
                    component="th"
                    scope="row"
                  >
                    {items.productTitle}
                  </TableCell>
                  <TableCell
                    sx={{ fontSize: 17, textAlign: "center" }}
                    align="right"
                  >
                    {items.productCode}
                  </TableCell>
                  <TableCell
                    sx={{ fontSize: 17, textAlign: "center" }}
                    align="right"
                  >
                    {items.productQuantity}
                  </TableCell>
                  <TableCell
                    sx={{ fontSize: 17, textAlign: "center" }}
                    align="right"
                    onChange={(e) => console.log(e.target.value)}
                  >
                    {takeTotalPriceValue(items)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <Card sx={{ marginTop: 10 }} raised={true}>
        <CardContent>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Typography color="text.primary" variant="h4">
              Total
            </Typography>
            <Typography
              style={{
                marginRight: 60,
              }}
              variant="h4"
            >
              Rs. {totalPrice}
            </Typography>
          </div>
        </CardContent>
      </Card>
      <div
        style={{
          marginTop: 30,
          marginLeft: 420,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          onClick={handleProceed}
          variant="contained"
          sx={{
            backgroundColor: "rgb(36, 34, 34)",
            fontSize: 15,
          }}
          size="large"
          disabled={productArr.length > 0 ? false : true}
        >
          PROCEED
        </Button>
      </div>
    </>
  );
};

export default SearchBar;
