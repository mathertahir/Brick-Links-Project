import React, { useState } from 'react';
import Layout from "./../components/Layout/Layout";
import { Col, Container, Row} from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';


const BricksCount = () => {

  const [show, setShow] = useState(false);
  const [bricksCount, setBricksCount] = useState("");

  const[ bricksCalcData , setbricksCalacData] =useState({
    area:"",
    rooms:"",
    kitchens:"",
    drawingsRoom:"",
    TVLounge:"",
    bathRooms:"",
    garage:"",
    coveredArea:"",
    stairs:"",
  })


  const onChange=(e)=>{
    const intValue = parseInt(e.target.value)
    setbricksCalacData((oldData)=>({...oldData,[e.target.name]:intValue}))

  }






const handleClose=()=>{
  setShow(!show)
}

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShow(!show)

    try {
      const response = await axios.post('http://localhost:5000/predict',bricksCalcData );
      setBricksCount(response.data.totalNoOfBricks);

      setbricksCalacData({
        area:"",
        rooms:"",
        kitchens:"",
        drawingsRoom:"",
        TVLounge:"",
        bathRooms:"",
        garage:"",
        coveredArea:"",
        stairs:"",
      })

    

    } catch (error) {
      console.error('Error:', error);
    }

  };


  






  return(


    
    <>

    <Layout title={"ALl Products - Best offers "}>
      
<div className=" brickscount-main">
 
 <div className=" fs-45 text-center"> Calculate Bricks For Your Required  Area</div>
  
<Container  >
<Form onSubmit={handleSubmit}>
<Row>
  <Col md={6}>
  
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className="fs-14 cl-blue fw-bold">Enter Your Area</Form.Label>
        <Form.Control type="number" placeholder="Enter Your Area Like 3,5,7,13,15,17,20  Marla" 
         value={bricksCalcData.area}
         name='area'
         onChange={onChange}
        
        />
      </Form.Group>
  

  </Col>
  <Col md={6}>
  
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label  className="fs-14 cl-blue fw-bold">Enter Your Room</Form.Label>
        <Form.Control type="number" placeholder="Enter the Room like 2,4,3,5,6 Rooms"
        
        value={bricksCalcData.rooms}
        name='rooms'
        onChange={onChange}
        />
      </Form.Group>


  </Col>
  <Col sm={6}>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className="fs-14 cl-blue fw-bold">Required Kitchen</Form.Label>
        <Form.Control type="number" placeholder="Enter the Kitchen either 1,0"
          value={bricksCalcData.kitchens}
          name='kitchens'
          onChange={onChange}

        />
      </Form.Group>

  </Col>
  <Col sm={6}>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label  className="fs-14 cl-blue fw-bold">Enter Your Drawing Rooms</Form.Label>
        <Form.Control type="number" placeholder="Enter the Drawing Rooms Either 1,0"
        
        value={bricksCalcData.drawingsRoom}
        name='drawingsRoom'
        onChange={onChange}


        />
      </Form.Group>


  </Col>
  <Col sm={6}>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className="fs-14 cl-blue fw-bold">Enter The TV Lounge</Form.Label>
        <Form.Control type="number" placeholder="Enter Your Tv Lounge Like 1,0" 
        
        value={bricksCalcData.TVLounge}
        name='TVLounge'
        onChange={onChange}
        
        />
      </Form.Group>


  </Col>
  <Col sm={6}>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label  className="fs-14 cl-blue fw-bold">Enter the Bathrooms</Form.Label>
        <Form.Control type="number" placeholder="Enter the Room like 1,2,3,4,5,6 Rooms"
        
        value={bricksCalcData.bathRooms}
        name='bathRooms'
        onChange={onChange}
        
        
        />
      </Form.Group>


  </Col>
  <Col sm={6}>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className="fs-14 cl-blue fw-bold">Enter The Garage</Form.Label>
        <Form.Control type="number" placeholder="Enter Your Either  0,1" 
        
        value={bricksCalcData.garage}
        name='garage'
        onChange={onChange}
        
        />
      </Form.Group>
 

  </Col>
 
  <Col sm={6}>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className="fs-14 cl-blue fw-bold">Enter Your Covered Area</Form.Label>
        <Form.Control type="number" placeholder="Enter Your covered  Area Like 70% , 80% ,90% and 100%  "
        
        value={bricksCalcData.coveredArea}
        name='coveredArea'
        onChange={onChange}
        />
      </Form.Group>


  </Col>
  <Col sm={12}>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label  className="fs-14 cl-blue fw-bold">Enter Stairs</Form.Label>
        <Form.Control type="number" placeholder="Enter the Stairs either  1,0" 
        
        value={bricksCalcData.stairs}
        name='stairs'
        onChange={onChange}
        
        
        />
      </Form.Group>
      

  </Col>

  <Col sm={12}>
  <Form.Group className="mb-3  ">
        <Form.Control type="submit" onClick={handleSubmit} className='submit-button' />
      </Form.Group>


   


  </Col>


  
</Row>
</Form>
</Container>
</div>

<Modal show={show} onHide={handleClose}  animation={false} 
                     centered
                  >
        <Modal.Header closeButton  className='  model-main-heading'>

        <Modal.Title  className='cl-white'>The Required Bricks For Your Area</Modal.Title>
    
         
        </Modal.Header>
        <Modal.Body className='fs-45'> {bricksCount}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
     

    

        </Layout>
        </>
  ) 


  
};

export default BricksCount;
