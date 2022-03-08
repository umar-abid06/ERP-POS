import React from "react";
import Button from "@mui/material/Button";
import "./button.styles.css";

const CustomButton = ({ buttonText }) => {
  return (
    <div className="button-container">
      <Button variant="contained" size={"large"}>
        {buttonText}
      </Button>
    </div>
  );
};

export default CustomButton;
