import React from "react"; 

 import { NavLink } from "react-router-dom";
 import { useSelector } from "react-redux";
//  import handleCart from "../redux/reducer/handleCart";

const Navbar =()=>{
  const state = useSelector((state) => state.handleCart)
  return(
    <div>
      <nav className="navbar navbar-expand-lg bg-white py-3 shadow-sm">
  <div className="container">
    <NavLink className="navbar-brand fw-bold fs-3" to="/">Store</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/products">Products</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/aboutus">About us</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contactus">Contact us</NavLink>
        </li> 
      </ul>
      <div className="buttons">
        <NavLink to="/login" className="btn btn-outline-dark">
          <i className="fa fa-sign-in me-1 "></i> Login</NavLink>

          <NavLink to="/register" className="btn btn-outline-dark ms-2">
          <i className="fa fa-user-plus me-1 "></i> Register</NavLink>

          <NavLink to="/cart" className="btn btn-outline-dark ms-2">
          <i className="fa fa-shopping-cart me-1 "></i> Cart({state.length})</NavLink>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}
export default Navbar;








































// import React from 'react';

// export default function Navbar() {
//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg bg-white">
//   <div className="container-fluid">
//     <NavLink className="navbar-brand" to="#">Shopify</NavLink>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//         <li className="nav-item">
//           <NavLink className="nav-link active" aria-current="page" to="#">Home</NavLink>
//         </li>
//         <li className="nav-item">
//           <NavLink className="nav-link" to="#">Products</NavLink>
//         </li>
//       </ul>
//       <div className="Buttons">
//       <NavLink to="" className="btn btn-outline-dark" >
      
//        <i className="fa fa-sign-in me-1"></i> Login</NavLink>

//        <NavLink to="" className="btn btn-outline-dark ms-2" >
      
//        <i className="fa fa-user-plus me-1"></i> Register</NavLink>

//        <NavLink to="" className="btn btn-outline-dark ms-2" >
      
//        <i className="fa fa-shopping-cart me-1"></i> cart(0)</NavLink>
      
//       </div>
//       <form className="d-flex" role="search">
//         <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//         <button className="btn btn-outline-success" type="submit">Search</button>
//       </form>
//     </div>
//   </div>
// </nav>

    
//   );
// };

      








