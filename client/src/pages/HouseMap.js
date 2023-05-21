import React from 'react'
import Layout from "./../components/Layout/Layout";
import { Container, Row , Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const HouseMap = () => {
  return (
  <>
<Layout>


<div className='brickscount-main'>
<div className=" fs-45 text-center"> Choose Your Required Map</div>

<Container>


<div className=" fs-45 fw-bold"> 2 MARLA MAP</div>
<div className='gridsection-main py-5'>


<div className='map-image' >
    
<img src='maps/2Marla1.jpg' alt='' className='w-100 h-100   object-fit-fill   '></img>
</div>
<div  className='map-image'  >
<img src='maps/2Marla2.jpg' alt='' className='w-100  h-100 img-fluid   object-fit-fill' ></img>
</div>
<div className='map-image'  >
<img src='maps/2Marla3.png' alt='' className='w-100 h-100  img-fluid object-fit-fill '></img>
</div>
<div  className='map-image'  >
<img src='maps/2Marla4.jpg' alt='' className='w-100 h-100   object-fit-fill'></img>
</div>

</div>

<div className=" fs-45 fw-bold"> 3 MARLA MAP</div>
<div className='gridsection-main py-5'>


<div className='map-image' >
    
<img src='maps/3Marla1.jpg' alt='' className='w-100 h-100   object-fit-fill   '></img>
</div>
<div  className='map-image'  >
<img src='maps/3Marla2.jpg' alt='' className='w-100  h-100 img-fluid   object-fit-fill' ></img>
</div>
<div className='map-image'  >
<img src='maps/3Marla3.jpg' alt='' className='w-100 h-100  img-fluid object-fit-fill '></img>
</div>
<div  className='map-image'  >
<img src='maps/3Marla4.jpg' alt='' className='w-100 h-100   object-fit-fill'></img>
</div>

</div>



<Row>
    <Col >
   


    </Col>
    <Col>
    </Col>
    <Col>
    </Col>
    <Col>
    </Col>
</Row>
</Container>


</div>


   
</Layout>
  </>
  )
}

export default HouseMap
