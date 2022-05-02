import "./navbar.css";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { orders } from "../../data/orders";

const Navbar = (props) => {
  const nameCopy = [];
  const navigate = useNavigate();

  // const productData = useSelector((state) => state.allDetails);
  const productData = orders[0].Items;
  console.log("productData--->", productData);
  for (var i = 0; i < productData?.length; i++) {
    nameCopy.push(productData[i]?.itemName);
  }
  // copy.push(productData);
  console.log("copyyy--->", nameCopy);

  return (
    <div>
      <header className="header">
        <div className="title">
          <Button
            onClick={() => navigate("/dashboard")}
            variant="text"
            color="secondary"
            size="large"
          >
            SoftSol
          </Button>
        </div>

        <ButtonGroup className="nav_buttons" size="small">
          <div>
            <Autocomplete
              className="searchBox"
              disablePortal
              id="combo-box-demo"
              options={nameCopy}
              sx={{ width: 400 }}
              renderInput={(params) => (
                <TextField {...params} label="Search the Item" />
              )}
            />
          </div>
          <div className="buttons">
            {props.title.map((i) => {
              return (
                <Button variant="outlined" href={i.href} color="primary">
                  {i.label}
                </Button>
              );
            })}
          </div>
        </ButtonGroup>
      </header>
    </div>
  );
};
export default Navbar;
