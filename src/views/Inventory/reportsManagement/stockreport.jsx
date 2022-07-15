import Button from 'react-bootstrap/Button';
const Stockreport=()=>
 {
    return(
        <div>
<div style={{border:"1px solid black",width:"1200px",height:"450px",position:"absolute",left:"200px",top:"300px"}}>
      <Button variant="secondary" size="lg">
        GENERATE STOCK REPORT
      </Button>
      <Button variant="secondary" size="lg" style={{margintop:"10%"}}>
        DOWNLOAD STOCK REPORT
      </Button>
    </div>
        </div>

    );

 };
 export default Stockreport;