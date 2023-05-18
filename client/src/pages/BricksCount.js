import React from "react";
import Layout from "./../components/Layout/Layout";
import { Col, Container, Row} from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const BricksCount = () => {
  return(
    <>

    <Layout title={"ALl Products - Best offers "}>
      
<div className=" brickscount-main">
 
 <div className=" fs-45 text-center"> Calculate Bricks For Your Required  Area</div>
  
<Container  >
<Row>
  <Col md={6}>
  <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className="fs-20 cl-blue fw-bold">Enter Your Area</Form.Label>
        <Form.Control type="number" placeholder="Enter Your Area Like 3,5,7,13,15,17,20  Marla" />
      </Form.Group>
    </Form>

  </Col>
  <Col md={6}>
  <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label  className="fs-20 cl-blue fw-bold">Enter Your Room</Form.Label>
        <Form.Control type="number" placeholder="Enter the Room like 2,4,3,5,6 Rooms" />
      </Form.Group>
    </Form>

  </Col>
  <Col sm={6}>
  <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className="fs-20 cl-blue fw-bold">Required Kitchen</Form.Label>
        <Form.Control type="number" placeholder="Enter the Kitchen either 1,0" />
      </Form.Group>
    </Form>

  </Col>
  <Col sm={6}>
  <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label  className="fs-20 cl-blue fw-bold">Enter Your Drawing Rooms</Form.Label>
        <Form.Control type="number" placeholder="Enter the Drawing Rooms Either 1,0" />
      </Form.Group>
    </Form>

  </Col>
  <Col sm={6}>
  <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className="fs-20 cl-blue fw-bold">Enter The TV Lounge</Form.Label>
        <Form.Control type="number" placeholder="Enter Your Tv Lounge Like 1,0" />
      </Form.Group>
    </Form>

  </Col>
  <Col sm={6}>
  <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label  className="fs-20 cl-blue fw-bold">Enter the Bathrooms</Form.Label>
        <Form.Control type="number" placeholder="Enter the Room like 1,2,3,4,5,6 Rooms" />
      </Form.Group>
    </Form>

  </Col>
  <Col sm={6}>
  <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className="fs-20 cl-blue fw-bold">Enter The Garage</Form.Label>
        <Form.Control type="number" placeholder="Enter Your Either  0,1" />
      </Form.Group>
    </Form>

  </Col>
  <Col sm={6}>
  <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label  className="fs-20 cl-blue fw-bold">Enter Your Room</Form.Label>
        <Form.Control type="number" placeholder="Enter the Room like 2,4,3,5,6 Rooms" />
      </Form.Group>
    </Form>

  </Col>
  <Col sm={6}>
  <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className="fs-20 cl-blue fw-bold">Enter Your Covered Area</Form.Label>
        <Form.Control type="text" placeholder="Enter Your covered  Area Like 70% , 80% ,90% and 100%  " />
      </Form.Group>
    </Form>

  </Col>
  <Col sm={6}>
  <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label  className="fs-20 cl-blue fw-bold">Enter Staries</Form.Label>
        <Form.Control type="number" placeholder="Enter the Stairs either  1,0" />
      </Form.Group>
    </Form>

  </Col>

  <Col sm={12}>
  <Form className="py-4 "> 
  <button
                    className="btn btn-danger w-100 btn-calculate py-3"
                   
                  >
                    Calculate Bricks
                  </button>

    </Form>

  </Col>


  
</Row>
</Container>
</div>



    

        </Layout>
        </>
  ) 


  
};

export default BricksCount;
