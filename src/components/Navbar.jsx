import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import { GoSignIn } from "react-icons/go";
import { RiShoppingBasket2Line } from "react-icons/ri";
import { MdOutlineContacts } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container">
          <Link className="navbar-brand display-6 fw-bolder" to="/">
            <span className="me-1">
              <RiShoppingBasket2Line />
            </span>
            E-Basket
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item me-3">
                <Link className="nav-link font-fa" aria-current="page" to="/">
                  <span className="me-1">
                    <AiFillHome />
                  </span>
                  Home
                </Link>
              </li>
              <li className="nav-item me-3">
                <Link className="nav-link font-fa" to="/contact">
                  <span className="me-1">
                    <MdOutlineContacts />
                  </span>
                  Contact Us
                </Link>
              </li>
              <li className="nav-item me-3">
                <Link className="nav-link font-fa" to="/login">
                  <span className="me-1">
                    <FiLogIn />
                  </span>
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link font-fa" to="/signup">
                  <span className="me-1">
                    <GoSignIn />
                  </span>
                  Signup
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
