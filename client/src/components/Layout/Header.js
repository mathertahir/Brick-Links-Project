import React from "react";

import "../../styles/NavBar.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";
import SearchInput from "../Form/SearchInput";
import useCategory from "../../hooks/useCategory";
import { useCart } from "../../context/cart";
import { Badge } from "antd";
const Header = () => {
  const [auth, setAuth] = useAuth();
  const [cart] = useCart();
  const categories = useCategory();
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
  };
  return (
    <div className="header-main  fixed-top ">
      <Navbar expand="lg" className=" navbar-main">
        <div className="container-fluid">
          <Navbar.Brand href="/" className="cl-white">
            Brick Link's
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/" className="cl-white  link-data">
                Home
              </Nav.Link>
              <Nav.Link href="./brickscalculation" className="cl-white">
                Brick's Calculation
              </Nav.Link>
              <Nav.Link href="/map" className="cl-white">
                House Map
              </Nav.Link>

              <NavDropdown title="Categories" id="basic-nav-dropdown">
                <Link className="dropdown-item   " to={"/categories"}>
                  All Categories
                </Link>

                {categories?.map((c) => (
                  <Link
                    className="dropdown-item"
                    to={`/category/${c.slug}`}
                    key={c.id}
                  >
                    {c.name}
                  </Link>
                ))}
              </NavDropdown>
            </Nav>

            <Nav className="ms-auto  ">
              <SearchInput />

              <NavLink to="/cart" className="nav-link  mx-2  cl-white">
                <Badge
                  count={cart?.length}
                  showZero
                  offset={[10, -5]}
                  className="cl-white"
                >
                  Cart
                </Badge>
              </NavLink>

              {!auth?.user ? (
                <>
                  <Nav.Link as={NavLink} to="/register" className="cl-white">
                    Register
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/login" className="cl-white">
                    Login
                  </Nav.Link>
                </>
              ) : (
                <NavDropdown
                  title={auth?.user?.name}
                  id="basic-nav-dropdown"
                  style={{ border: "none" }}
                >
                  <NavDropdown.Item
                    as={NavLink}
                    to={`/dashboard/${
                      auth?.user?.role === 1 ? "admin" : "user"
                    }`}
                  >
                    Dashboard
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={NavLink}
                    onClick={handleLogout}
                    to="/login"
                  >
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>

      {/* <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary ">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
              <Link to="/" className="navbar-brand">
                🛒 Brick Link's
              </Link>

              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <SearchInput />
                <li className="nav-item">
                  <NavLink to="/" className="nav-link ">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to={"/categories"}
                    data-bs-toggle="dropdown"
                  >
                    Categories
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to={"/categories"}>
                        All Categories
                      </Link>
                    </li>

                    {categories?.map((c) => (
                      <li>
                        <Link
                          className="dropdown-item"
                          to={`/category/${c.slug}`}
                        >
                          {c.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>

                {!auth?.user ? (
                  <>
                    <li className="nav-item">
                      <NavLink to="/register" className="nav-link">
                        Register
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/login" className="nav-link">
                        Login
                      </NavLink>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="nav-item dropdown">
                      <NavLink
                        className="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        style={{ border: "none" }}
                      >
                        {auth?.user?.name}
                      </NavLink>
                      <ul className="dropdown-menu">
                        <li>
                          <NavLink
                            to={`/dashboard/${
                              auth?.user?.role === 1 ? "admin" : "user"
                            }`}
                            className="dropdown-item"
                          >
                            Dashboard
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            onClick={handleLogout}
                            to="/login"
                            className="dropdown-item"
                          >
                            Logout
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                  </>
                )}
                <li className="nav-item">Brick Calculation</li>

                <li className="nav-item">
                  <NavLink to="/cart" className="nav-link">
                    <Badge count={cart?.length} showZero offset={[10, -5]}>
                      Cart
                    </Badge>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </> */}
    </div>
  );
};

export default Header;
