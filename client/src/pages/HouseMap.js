// import React from 'react'
// import Layout from "./../components/Layout/Layout";
// import { Container, Row , Col } from 'react-bootstrap';
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';

// const HouseMap = () => {
//   return (
//   <>
// <Layout>


// <div className='brickscount-main'>
// <div className=" fs-45 text-center"> Choose Your Required Map</div>

// <Container>


// <div className=" fs-45 fw-bold"> 2 MARLA MAP</div>
// <div className='gridsection-main py-5'>


// <div className='map-image' >
    
// <img src='maps/2Marla1.jpg' alt='' className='w-100 h-100   object-fit-fill   '></img>
// </div>
// <div  className='map-image'  >
// <img src='maps/2Marla2.jpg' alt='' className='w-100  h-100 img-fluid   object-fit-fill' ></img>
// </div>
// <div className='map-image'  >
// <img src='maps/2Marla3.png' alt='' className='w-100 h-100  img-fluid object-fit-fill '></img>
// </div>
// <div  className='map-image'  >
// <img src='maps/2Marla4.jpg' alt='' className='w-100 h-100   object-fit-fill'></img>
// </div>

// </div>

// <div className=" fs-45 fw-bold"> 3 MARLA MAP</div>
// <div className='gridsection-main py-5'>


// <div className='map-image' >
    
// <img src='maps/3Marla1.jpg' alt='' className='w-100 h-100   object-fit-fill   '></img>
// </div>
// <div  className='map-image'  >
// <img src='maps/3Marla2.jpg' alt='' className='w-100  h-100 img-fluid   object-fit-fill' ></img>
// </div>
// <div className='map-image'  >
// <img src='maps/3Marla3.jpg' alt='' className='w-100 h-100  img-fluid object-fit-fill '></img>
// </div>
// <div  className='map-image'  >
// <img src='maps/3Marla4.jpg' alt='' className='w-100 h-100   object-fit-fill'></img>
// </div>

// </div>



// <Row>
//     <Col >
   


//     </Col>
//     <Col>
//     </Col>
//     <Col>
//     </Col>
//     <Col>
//     </Col>
// </Row>
// </Container>


// </div>


   
// </Layout>
//   </>
//   )
// }

// export default HouseMap


import React from 'react';
import Layout from './../components/Layout/Layout';
import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const MapImage = ({ src, alt }) => (
  <div className="map-image">
    <img src={src} alt={alt} className="w-100 img-fluid object-fit-fill" />
    <div className="py-2 text-center">


        < Button variant="primary" className='w-100 ' >    <a href={src} className='text-decoration-none  download-btn ' download>

Download
</a></Button>{' '}
              
    </div>
  </div>
);



const HouseMap = () => {
  // const handleDownload = (url) => {
  //   const link = document.createElement('a');
  //   link.href = url;
  //   link.download = url.split('/').pop();
  //   link.click();
  // };



  const twomarlamaps = [
    { src: 'maps/2Marla1.jpg', alt: 'Map 1' },
    { src: 'maps/2Marla2.jpg', alt: 'Map 2' },
    { src: 'maps/2Marla3.png', alt: 'Map 3' },
    { src: 'maps/2Marla4.jpg', alt: 'Map 4' },
  ];

  const threemarlamaps = [
    { src: 'maps/3Marla1.jpg', alt: 'Map 1' },
    { src: 'maps/3Marla2.jpg', alt: 'Map 2' },
    { src: 'maps/3Marla3.jpg', alt: 'Map 3' },
    { src: 'maps/3Marla4.jpg', alt: 'Map 4' },
  ];

  const fivemarlamaps = [
    { src: 'maps/5Marla1.jpg', alt: 'Map 1' },
    { src: 'maps/5Marla2.jpg', alt: 'Map 2' },
    { src: 'maps/5Marla3.jpg', alt: 'Map 3' },
    { src: 'maps/5Marla4.jpg', alt: 'Map 4' },
  ];


  return (
    <>
      <Layout>
        <div className='brickscount-main'>
          <div className='fs-45 text-center'> Choose Your Required Map</div>

          <Container>

          

            <div className='fs-45 fw-bold'> 2 MARLA MAP</div>

            <div className="gridsection-main py-5">
      {twomarlamaps.map((map, index) => (
        <MapImage key={index} src={map.src} alt={map.alt} />
      ))}
    </div>


            {/* <div className='gridsection-main py-5'>
              <div className='map-image'>
              
                  <img src='maps/2Marla1.jpg' alt='' className='w-100  object-fit-fill' />


                <div className='py-2 text-center'>
                < Button variant="primary" className='w-100 ' >    <a href='maps/2Marla1.jpg' className='text-decoration-none  download-btn ' download>

Download
</a></Button>{' '}
              
                </div>
         
              </div>
              <div className='map-image'>


             
                  <img src='maps/2Marla2.jpg' alt='' className='w-100 img-fluid object-fit-fill' />
      <div className='py-2 text-center' >
                  < Button variant="primary" className='w-100 ' >      <a href='maps/2Marla2.jpg' className='text-decoration-none  download-btn ' download> Download </a></Button>{' '}
              
                </div>
               
              </div>
              <div className='map-image'>
              
                  <img src='maps/2Marla3.png' alt='' className='w-100  img-fluid object-fit-fill' />
                  <div className='py-2 text-center' >
                  < Button variant="primary" className='w-100 ' >      <a href='maps/2Marla3.png' className='text-decoration-none  download-btn ' download> Download </a></Button>{' '}
              
                </div>
              </div>
              <div className='map-image'>
               
                  <img src='maps/2Marla4.jpg' alt='' className='w-100  object-fit-fill' />

                  <div className='py-2 text-center' >
                  < Button variant="primary" className='w-100 ' >      <a href='maps/2Marla4.jpg' className='text-decoration-none  download-btn ' download> Download </a></Button>{' '}
              
                </div>   
               
              </div>
            </div> */}

            <div className='fs-45 fw-bold'> 3 MARLA MAP</div>
<div className="gridsection-main py-5">
      {threemarlamaps.map((map, index) => (
        <MapImage key={index} src={map.src} alt={map.alt} />
      ))}
    </div>


    <div className='fs-45 fw-bold'> 5 MARLA MAP</div>
    
    <div className="gridsection-main py-5">
      {fivemarlamaps.map((map, index) => (
        <MapImage key={index} src={map.src} alt={map.alt} />
      ))}
    </div>
          </Container>
        </div>
      </Layout>
      </>
  )
}

export default HouseMap
