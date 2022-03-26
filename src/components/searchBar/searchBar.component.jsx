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
import { useSelector } from "react-redux";

const SearchBar = ({ prods }) => {
  const [productTitle, setProductTitle] = useState("");
  const [productID, setProductID] = useState("");
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [productCode, setProductCode] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productQuantity, setProductQuantity] = useState("");
  const [productArr, setProductArr] = useState([]);
  const [sum, setSum] = useState(0);

  const orderData = useSelector((state) => state.OrderReducer.orders);

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
    console.log(productArr);
  }, [productID]);

  const takeTotalPriceValue = (a) => {
    totalPrice = +totalPrice + +a.productPrice;

    return a.productPrice;
  };

  const selectedSuggestion = (orderData) => {
    setProductTitle(orderData.itemName);
    setProductID(orderData.itemID);
    setProductCode(orderData.itemCode);
    setProductPrice(orderData.unitPrize);
    setProductQuantity(orderData.quantity);

    if (orderData.itemID === productID) {
      return setProductID(productID + Math.random());
    }
  };

  const handleProceed = () => {
    const order = [{ orderID: productArr.productID }, totalPrice];
    console.log("Proceeded----->", order);
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
