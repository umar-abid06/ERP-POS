
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
 const Productsinventory=()=>
 {
    return(
        <div>
<Form style={{width:"500px",border:"2px solid black",backgroundcolor:"lightgreen",position:"absolute",left:"250px",top:"260px",height:"550px"}}>
<Form.Group style={{marginLeft:"10px",marginRight:"10px"}}>
        <Form.Label>product id</Form.Label>
        <Form.Control type="text"  />
        
      </Form.Group>

      <Form.Group style={{marginLeft:"10px",marginRight:"10px"}}>
        <Form.Label>product name</Form.Label>
        <Form.Control type="text"  />
      </Form.Group>
      
      <Form.Group style={{marginLeft:"10px",marginRight:"10px"}}>
        <Form.Label>quantity</Form.Label>
        <Form.Control  />
        
      </Form.Group>

      <Form.Group style={{marginLeft:"10px",marginRight:"10px"}}>
        <Form.Label>price</Form.Label>
        <Form.Control   />
        
      </Form.Group>

      <Form.Group style={{marginLeft:"10px",marginRight:"10px"}}>
        <Form.Label>selling price</Form.Label>
        <Form.Control   />
        
      </Form.Group>


      
      <Button variant="primary" type="submit" style={{marginTop:"50px",marginLeft:"150px"}}>
        CREATE PRODUCT
      </Button>
    </Form>

    <Form style={{width:"500px",border:"2px solid black",backgroundcolor:"lightgreen",position:"absolute",left:"770px",top:"260px",height:"550px"}}>

    <Form.Group style={{marginLeft:"10px",marginRight:"10px",marginTop:"100px"}}>
        <Form.Label>enter id of the product you want to delete</Form.Label>
        <Form.Control   />

        <Button variant="primary" type="submit" style={{marginTop:"50px",marginLeft:"150px"}}>
        DELETE PRODUCT
      </Button>
        
      </Form.Group>


    </Form>


    

        </div>

    );

 };
 export default Productsinventory;

