import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router-dom";

const ManageSelector = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Button
        color="primary"
        variant="outlined"
        onClick={() => navigate("/posScreen")}
      >
        Point Of Sale
      </Button>
      <Button
        color="primary"
        variant="outlined"
        onClick={() => navigate("/inventory")}
      >
        Inventory Management
      </Button>
    </div>
  );
};
export default ManageSelector;
