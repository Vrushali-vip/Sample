import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
    <div className="card text-center bg-black py-3">
      <div className="card-body text-white py-2 mb-3">
        <h3 className="card-title">Fashion Store</h3>
        {/* <p className="card-text">
          With supporting text below as NavLink natural lead-in to additional
          content.
        </p> */}
      </div>
      <div className="row">
        <div className="col-md-4 text-white">
          <h5>Contact Us</h5>
          <p>Email: info@example.com</p>
          <p>Phone: +123456789</p>
        </div>
        <div className="col-md-4 text-white">
          <h5> Links</h5>
          <ul className="list-inline  text-white">
            <li className=" list-inline">
              <NavLink className="text-white text-decoration-none" to="/">
                Home
              </NavLink>
            </li>
            <li className="list-inline ">
              <NavLink className="text-white text-decoration-none" to="/products">
                Products
              </NavLink>
            </li>
            <li className="list-inline">
              <NavLink className="text-white text-decoration-none" to="/aboutus">
                About Us
              </NavLink>
            </li>
            <li className="list-inline">
              <NavLink className="text-white text-decoration-none" to="/contactus">
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="col-md-4 text-white fw-bold fs-3">
          <h5>Follow Us</h5>
          <ul className="list-inline">
            <li className="list-inline-item">
              <NavLink className="text-white" to="/">
                <i className="fa fa-facebook mb-2"></i>
              </NavLink>
            </li>
            <li className="list-inline-item">
              <NavLink className="text-white" to="/">
                <i className="fa fa-twitter mb-2"></i>
              </NavLink>
            </li>
            <li className="list-inline-item">
              <NavLink className="text-white" to="/">
                <i className="fa fa-instagram mb-2"></i>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-light-dark  fw-bold  py-3 ">
        <p className="card-footer text-white text-bolder">
          Copyright &#169; 2024 All Rights Reserved | Design By AN
        </p>
      </div>
    </div>
</div>
  );
}

export default Footer;
