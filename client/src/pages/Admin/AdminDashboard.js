import React from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "./../../components/Layout/Layout";
import { useAuth } from "../../context/auth";
import { Row,Col } from "react-bootstrap";
const AdminDashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout>
      <div className="container-fluid    dashboard">


        <Row   className="py-5"  > 
          <Col sm={12}  className="justify-content-center    d-flex"  >
          <div className="welcome-main">
           <h1  className="welcom-heading"> {auth?.user?.name}   Welcome to Dashboard   </h1>

           </div>
          </Col>
        </Row>
        <Row className="row  align-items-center justfy-content-center">
          <Col   md={3}   className="p-3">
            <AdminMenu />
          </Col>
          <Col  md={9}  className="p-3" >
            <div className="card  p-3">
             <div> <span   className="fs-45"> Admin Name :</span> <span className="fs-35">{auth?.user?.name}</span> </div>
              <div>   <span   className="fs-45"> Admin Email :</span>  <span className="fs-35">{auth?.user?.email}</span></div>
              <div>   <span   className="fs-45"> Admin Contact :</span>  <span className="fs-35">{auth?.user?.phone}</span></div>
            
            </div>
          </Col>
        </Row>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
