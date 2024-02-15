
import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
import { Routes,Route } from 'react-router-dom';
import Products from './components/products.';
import Product from './components/Product';
import Footer from './components/footer';
import cart from './components/cart';
import Aboutus from './components/aboutus';
import contactus from './components/contactus';
import login from './components/login';
import register from './components/register';
import shoppingcart from './components/shoppingcart';

function App() {
  return (
<>
<Navbar/>
<Routes>
 <Route exact path='/'Component={Home}/>
 <Route exact path='/products'Component={Products}/>
 <Route exact path='/products/:id'Component={Product}/>
 <Route exact path='/cart'Component={cart}/>
 <Route exact path='/Aboutus'Component={Aboutus}/>
 <Route exact path='/contactus'Component={contactus}/>
 <Route exact path='/login'Component={login}/>
 <Route exact path='/register'Component={register}/>
 <Route exact path='/shopingcart'Component={shoppingcart}/>
 
</Routes>


 {/* <Home/>  
 <Footer/> */}
 <Footer/> 

</>
  );
};

export default App;
