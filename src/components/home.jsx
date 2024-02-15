import React from "react"; 
import Products from "./products.";

const Home =()=>{
  return(
<div className='home'>
      <div className="card bg-dark border-0 text-white ">
  <img src="/assests/background.jpg " height="650" className="card-img" alt="Background"/>
  <div className="card-img-overlay d-flex flex-column justify-content-center">

    <div className="container">
    <h5 className="card-title display-3 fw-bolder mb-0" >NEW SEASON ARRIVALS</h5>
    <p className="card-text lead fs-2">CHECK OUT NEW PRODUCTS</p>
    </div>
  
  </div>
</div>
<Products/>
    </div>
  ) 
}
export default Home;




