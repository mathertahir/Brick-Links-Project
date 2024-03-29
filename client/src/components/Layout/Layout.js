import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Helmet } from "react-helmet";
import { Toaster } from "react-hot-toast";
import HomePage from "../../pages/HomePage";
import "../../index.css";
const Layout = ({ children, title, description, keywords, author }) => {
  return (  
    
    <>
    <Header  className="fixed-top" /> 
    <div>


<Helmet>
  <meta charSet="utf-8" />
  <meta name="description" content={description} />
  <meta name="keywords" content={keywords} />
  <meta name="author" content={author} />
  <title>{title}</title>
</Helmet>


{/* <main
  className="main-container"

  // style={{ minHeight: "70vh" }}
>
  <Toaster />

 
</main> */}

<div>     {children}</div>



</div>
<Footer className="fixed-bottom" />
    </>
 
  );
};

Layout.defaultProps = {
  title: "Ecommerce app - shop now",
  description: "mern stack project",
  keywords: "mern,react,node,mongodb",
  author: "Techinfoyt",
};

export default Layout;
