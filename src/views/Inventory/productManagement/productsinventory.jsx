
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Importfromfile from'./excel_import/_importfromfile'
import './productsinventory.css'
 const Productsinventory=()=>
 {
    return(
        <div>
<Form className="createproduct">
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


      
      <Button variant="primary" type="submit" style={{marginTop:"50px",marginLeft:"130px"}}>
        CREATE PRODUCT
      </Button>
    </Form>

    <Form className="deleteproduct">

    <Form.Group style={{marginLeft:"10px",marginRight:"10px",marginTop:"100px"}}>
        <Form.Label>enter id of the product you want to delete</Form.Label>
        <Form.Control   />

        <Button variant="primary" type="submit" style={{marginTop:"50px",marginLeft:"150px"}}>
        DELETE PRODUCT
      </Button>
        
      </Form.Group>


    </Form>
    <div className="importfrom">
<Importfromfile/>

    </div>


    

        </div>

    );

 };
 export default Productsinventory;

