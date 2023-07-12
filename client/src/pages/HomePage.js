import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Checkbox, Radio } from "antd";
import { Prices } from "../components/Prices";
import { useCart } from "../context/cart";
import axios from "axios";
import toast from "react-hot-toast";
import Layout from "./../components/Layout/Layout";
import { AiOutlineReload } from "react-icons/ai";
import "../styles/Homepage.css";
import Carousel from "react-bootstrap/Carousel";

import "../styles/HeaderSlider.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import pic1 from "../images/bannar2.jpg";
// import pic2 from "../images/bannar.jpg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { FaArrowRight } from "react-icons/fa";

import { FaArrowLeft } from "react-icons/fa";
import { Container } from "react-bootstrap";
import Header from "../components/Layout/Header";

const HomePage = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useCart();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  //get all cat
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get("/api/v1/category/get-category");
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCategory();
    getTotal();
  }, []);
  //get products
  const getAllProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/api/v1/product/product-list/${page}`);
      setLoading(false);
      setProducts(data.products);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  //getTOtal COunt
  const getTotal = async () => {
    try {
      const { data } = await axios.get("/api/v1/product/product-count");
      setTotal(data?.total);
    } catch (error) {
      console.log(error);
    }
  };

// 

useEffect(()=>{  
  
  if(page===1) return
  
  loadMore();
},[page])


  //load more
  const loadMore = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/api/v1/product/product-list/${page}`);
      setLoading(false);
      setProducts([...products, ...data?.products]);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // filter by cat
  const handleFilter = (value, id) => {
    let all = [...checked];
    if (value) {
      all.push(id);
    } else {
      all = all.filter((c) => c !== id);
    }
    setChecked(all);
  };
  useEffect(() => {
    if (!checked.length || !radio.length) getAllProducts();
  }, [checked.length, radio.length]);

  useEffect(() => {
    if (checked.length || radio.length) filterProduct();
  }, [checked, radio]);

  //get filterd product
  const filterProduct = async () => {
    try {
      const { data } = await axios.post("/api/v1/product/product-filters", {
        checked,
        radio,
      });
      setProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };
  let settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (


    <>

<Layout title={"ALl Products - Best offers "}>
      {/* banner image */}

      <div className="homepage-main-container  cotainer-fluid">
        <Row className="  m-0">
          <Col>
            <Carousel activeIndex={index} onSelect={handleSelect}>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="images/construction.jpg"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="images/bannar4.jpg"
                  alt="First slide"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="images/bannar6.jpg"
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="images/bannar5.jpg"
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>

        <Row className="container-fluid   home-page   pt-5 m-0">
          <Col md={3} sm={12} className=" filters">
            <Card className="p-4 filter-section-main">
              <div className="filter-main">
                <h4 className="text-center  ">Filter By Category</h4>
                <div className="d-flex flex-column">
                  {categories?.map((c) => (
                    <Checkbox
                      key={c._id}
                      onChange={(e) => handleFilter(e.target.checked, c._id)}
                    >
                      {c.name}
                    </Checkbox>
                  ))}
                </div>
                {/* price filter */}
                <h4 className="text-center mt-4">Filter By Price</h4>
                <div className="d-flex flex-column">
                  <Radio.Group onChange={(e) => setRadio(e.target.value)}>
                    {Prices?.map((p) => (
                      <div key={p._id}>
                        <Radio value={p.array}>{p.name}</Radio>
                      </div>
                    ))}
                  </Radio.Group>
                </div>
                <div className="d-flex flex-column">
                  <button
                    className="btn btn-danger"
                    onClick={() => window.location.reload()}
                  >
                    RESET FILTERS
                  </button>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={9} sm={12} className=" ">
            <h1 className="text-center">All Products</h1>
            <div className="   card-main">
              {products?.map((p) => (
                <div className="card m-2" key={p._id}>
                  <img
                    src={`/api/v1/product/product-photo/${p._id}`}
                    className="card-img-top"
                    alt={p.name}
                  />
                  <div className="card-body">
                    <div className="card-name-price">
                      <h6 className="card-title">{p.name}</h6>
                      <h6 className="card-title card-price">
                        {p.price.toLocaleString("en-PK", {
                          style: "currency",
                          currency: "PKR",
                        })}
                      </h6>
                    </div>

                     <div  className="card-quantity">
                          <div  className="fs-16 ">Quantity:</div> 
                          <div  className="quantity-count fs-16"> {p.quantity}</div>
                     </div>

                     <div>
                     <div  className="fs-16 ">Type :</div> 
                     <div  className="quantity-count fs-20"> {p.category._id}</div>
                      </div>


                    <p className="card-text ">
                      {p.description.substring(0, 60)}...
                    </p>
                    <div className="card-name-price">
                      <button
                        className="btn btn-info ms-1"
                        onClick={() => navigate(`/product/${p.slug}`)}
                      >
                        More Details
                      </button>
                      <button
                        className="btn btn-dark ms-1"
                        onClick={() => {
                          setCart([...cart, p]);
                          localStorage.setItem(
                            "cart",
                            JSON.stringify([...cart, p])
                          );
                          toast.success("Item Added to cart");
                        }}
                      >
                        ADD TO CART
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="m-2 p-3">
              {products && products.length < total && (
                <button
                  className="btn loadmore"
                  onClick={(v) => {
                    v.preventDefault();
                    setPage(page + 1);
                  }}
                >
                  {loading ? (
                    "Loading ..."
                  ) : (
                    <>
                      {" "}
                      Loadmore <AiOutlineReload />
                    </>
                  )}
                </button>
              )}
            </div>
          </Col>
        </Row>
        <div className="py-5 about-section my-5">
          <Container className=" ">
            <Row className="mx-0 py-5 align-items-center">
              <Col sm={6}>
                <div>
                  <img
                    src="images/bricksadd.jpg"
                    alt=""
                    height="auto"
                    width="100%"
                  />
                </div>
              </Col>

              <Col sm={6}>
                <div>
                  <h1>Dream To Build Homes</h1>
                </div>
                <div>
                  <div>
                    We appreciate the vision behind every project and are
                    excited to provide the best brick resources at every phase
                    to reach everyone at all levels. Belden Design Tools is a
                    platform that offers many valuable resources for architects,
                    builders, and contractors. Find BIM/AutoCAD/Revit content,
                    product specifications, and detailed product information for
                    Brick Links.
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <Container className=" ">
          <Row className="mx-0 py-5 align-items-center">
            <Col sm={6}>
              <Row className="mx-0 py-3">
                <Col sm={12}>
                  <div className="fs-20 ">PROMPT DELIVERY</div>

                  <div>
                    Striving to give you best quality, economy and prompt
                    delivery. Having wide range of designs with customized
                    sizes. Strong Shipping network with prompt delivery around
                    the world. Giving you best quality on which you can rely.
                  </div>
                </Col>
              </Row>

              <Row className="mx-0 py-3">
                <Col sm={6}>
                  <div className="py-1  fs-20">Freiendly Support</div>
                  <div className="py-1 fs-14">
                    Contact Us 24/7 , for any problem or query
                  </div>
                  <div className="py-1 fs-14">03447729753</div>
                </Col>
                <Col sm={6}>
                  <div className="py-1 fs-20">LOOKING FOR YOUR RESPONSE</div>

                  <div className="py-1 fs-14">
                    Subscribe your email for latest updates, new products and
                    mind blowing offers.
                  </div>
                </Col>
              </Row>
            </Col>

            <Col sm={6}>
              <div>
                <img
                  src="images/delievery.jpg"
                  alt=""
                  height="auto"
                  width="100%"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
    </>
 
  );
};

export default HomePage;
