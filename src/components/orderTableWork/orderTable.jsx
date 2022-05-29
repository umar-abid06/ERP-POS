import React, { useState, useEffect } from "react";
import "./orderTable.css";
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
import TextField from "@mui/material/TextField";
import { Button, Stack, Typography } from "@mui/material";
import CustomButton from "../button/button.component";
import { connect, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';


const OrderTable = ({ allOrders }) => {
  const navigate = useNavigate();

  const [productTitle, setProductTitle] = useState("");
  const [productQuantity, setProductQuantity] = useState(1);
  const [productArr, setProductArr] = useState([]);
  const [sum, setSum] = useState(0);

  // let all_selected_orders = [];

  // const orderData = useSelector((state) => state.OrderReducer.orders);
  // // all_selected_orders.push(orderData);

  console.log("allOrders--->", productArr);

  let totalPrice = [];

  useEffect(() => {
    setProductArr(productArr.concat(allOrders));
  }, [allOrders]);

  const takeTotalPriceValue = (a) => {
    a.quantity = productQuantity;
    totalPrice = +totalPrice + +(a.unitPrize * a.quantity);
    return a.unitPrize * a.quantity;
  };

  const handleProceed = () => {
    const order = [
      {
        orderID: productArr[productArr.length - 1].itemID + 1,
        orderLines: productArr,
        totalPrice: totalPrice,
      },
    ];
    navigate("/posScreen/payment")
    console.log("Proceeded----->", order);
  };
  const deleteProd = (single) => {
    productArr.splice(single, 1)
    setProductArr(productArr.filter((selected)=> selected!== single))
    console.log(single)
  }
  return (
    <>
      <div style={{ justifyContent: "space-between", padding:"10px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        ></div>

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
                <TableCell
                  sx={{
                    fontSize: 20,
                    textAlign: "center",
                    backgroundColor: "rgb(201, 201, 201)",
                  }}
                  align="right"
                >
                  Delete
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {productArr?.map((items, index) => (
                <TableRow
                  key={items.itemID}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                  key={items.itemID}
                    sx={{
                      fontSize: 12,
                      textAlign: "left",
                    }}
                    component="th"
                    scope="row"
                  >
                    {items.itemName}
                  </TableCell>
                  <TableCell
                    sx={{ fontSize: 12, textAlign: "center" }}
                    align="right"
                  >
                    {items.itemCode}
                  </TableCell>
                  <TableCell
                    sx={{ fontSize: 12, textAlign: "center" }}
                    align="right"
                  >
                    <TextField
                      id="standard-basic"
                      label="Standard"
                      variant="standard"
                      defaultValue={items.quantity}
                      onChange={(e) => setProductQuantity(e.target.value)}
                    />
                  </TableCell>
                  <TableCell
                    sx={{ fontSize: 12, textAlign: "center" }}
                    align="right"
                    onChange={(e) => console.log(e.target.value)}
                  >
                    {takeTotalPriceValue(items)}
                  </TableCell>
                  <TableCell
                    sx={{ fontSize: 12, textAlign: "center" }}
                    align="right"
                    onClick={(e) =>deleteProd(index)}
                  >
                    <DeleteOutlinedIcon/>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <Card sx={{ marginTop: 5,  margin:'10px',}} raised={true}>
        <CardContent>
          <div
            style={{
             
              paddingRight:"20px",
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
      <div>
        <Button
          style={{ marginLeft: "20%" }}
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
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default OrderTable;
