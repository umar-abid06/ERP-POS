import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
 const Printer=()=>
 {
    return(
        <div>
            
<Form style={{width:"1500px",border:"2px solid black",backgroundcolor:"lightgreen",position:"absolute",left:"50px",top:"260px",height:"550px"}}>
PRINTER SETUP
<Form.Group style={{marginLeft:"10px",marginRight:"10px",width:"200px",margintop:"30px"}}>
        <Form.Label>product id</Form.Label>
        <Form.Control type="text"  />
        
      </Form.Group>

      <Form.Group style={{marginLeft:"10px",marginRight:"10px",width:"200px"}}>
        <Form.Label>product name</Form.Label>
        <Form.Control type="text"  />
      </Form.Group>
      
      <Form.Group style={{marginLeft:"10px",marginRight:"10px",width:"200px"}}>
        <Form.Label>quantity</Form.Label>
        <Form.Control  />
        
      </Form.Group>

      <Form.Group style={{marginLeft:"10px",marginRight:"10px",width:"200px"}}>
        <Form.Label>price</Form.Label>
        <Form.Control   />
        
      </Form.Group>

      <Form.Group style={{marginLeft:"10px",marginRight:"10px",width:"200px"}}>
        <Form.Label>selling price</Form.Label>
        <Form.Control   />
        
      </Form.Group>


      
      <Button variant="primary" type="submit" style={{marginTop:"50px",marginLeft:"750px"}}>
         PRINT
      </Button>
    </Form>

    

    

        </div>

    );

 };
 export default Printer;

