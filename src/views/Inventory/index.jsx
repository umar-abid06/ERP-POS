import Navbar from "../../components/navbar/Navbar";

import Productsinventory from "./productsinventory";
import Stockreport from "./stockreport";
import Printer from "./printer";

import { Button, Typography , Stack, TextField} from "@mui/material";
const Inventory = () => {

  
  return (
    
    <div>
      
      <h1 style={{marginLeft:"37%",marginTop:"1%",color:"green"}}> INVENTORY MANAGEMENT </h1>
      <Navbar
        title={[
          { label: "Log Out", href: "/login" },
          { label: "Managing Screen", href: "/managerSelector" },
        ]}
      />

      <div style={{width:'1150px',position:"absolute",height:"270px",left:"300px"}}
      >

      
      <Button sx={{ width:"180px", margin:'6px', height:'100px',border:"2px solid black",position:"absolute",left:"200px"}}  variant="contained" color="info" size="small"  > PRODUCTS  
            </Button>

      

      
      <Button sx={{ width:"180px", margin:'6px', height:'100px',border:"2px solid black",position:"absolute",left:"400px"}}  variant="contained" color="info" size="small"  > STOCK REPORT
            </Button>

      
     

<Button sx={{ width:"180px", margin:'6px', height:'100px',border:"2px solid black",position:"absolute",left:"600px"}}  variant="contained" color="info" size="small"  >  PRINTER
            </Button>

            </div>

            
            
            {/* <Printer/> */}
            {/* <Stockreport/> */}
            <Productsinventory/>
           


            

            

    </div>
  );
};
export default Inventory;
