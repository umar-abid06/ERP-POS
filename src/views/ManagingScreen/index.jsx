import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router-dom";
import "./index.css"

const ManageSelector = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="titlePortion">Hello Manager</h1>
    <div className="SelectorScreen" >
      <Button
        color="primary"
        variant="outlined"
        onClick={() => navigate("/posScreen")}
      >
        Point Of Sale
      </Button>
      <Button
        color="primary"
        variant="contained"
        onClick={() => navigate("/inventory")}
      >
        Inventory Management
      </Button>
    </div>
    </div>
  );
};
export default ManageSelector;
