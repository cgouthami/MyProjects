import React from 'react';
import './logo.css'
import { Link, Outlet} from "react-router-dom";
// import {Routes, Route} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './pages/fetch.css'
import './navbar.css'
import './cart.css'
import { useNavigate} from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import Home from '../components/pages/Home'
import ProductDetail from './pages/ProductDetail'
import { Route, Routes } from 'react-router-dom';
const Navbar =()=>{
    const counter = useSelector((state)=>state.IncDecComp.counter);
    const navigate = useNavigate();

    // const handleclick = ()=>{
    //     alert("added to cart")
    // }

    return(
        <>
        <div className="logo">
            <h4 className="item_count bg-warning text-dark rounded">{counter+1}</h4>
        <h1 onClick={()=>navigate('/')}>SH</h1>           
        </div>       
        <b className="icon">ShopHub</b>       
        <div className="main">
           
        <FontAwesomeIcon style={{fontSize:'40px',border:'10px solid gold',borderRadius:'50px'}} onClick={()=>navigate('/search')} icon={faSearch} />
        <div className="logocart">
        {/* <h4>Cart</h4>       */}
        <FontAwesomeIcon onClick={()=>navigate('/cart')} icon={faBagShopping} />          
        </div>  
        </div>
       
        <div className="container-lg-fluid text-white">
        <nav>
        <div className="fs-1 bg-primary d-flex flex-row d-inline justify-content-around align-end bg-warning border boder-10">        
        
        <Link id="nav" to="/shop">Shop</Link>
        <Link id="nav" to="/categories">Categories</Link>
        <Link id="nav" to="/contact">Contact</Link>
        <Link id="nav" to="/login">Login</Link>
        <Link id="nav" to="/signup">SignUp</Link>
        
        </div>
        </nav>
        <Outlet/>
        </div>
        <Routes>
   
 </Routes>
        </>       
        // <Routes>
        //     <Route path="/" element={<Home />}/>
        //     <Route path="/home" element={<Home />}/>
        //     <Route path="/shop" element={<Shop />}/>
        //     <Route path="/blog" element={<Blog />}/>
        //     <Route path="/contact" element={<Contact />}/>
        //     <Route path="/login" element={<Login />}/>
        //     <Route path="/signup" element={<SignUp />}/>
        //     <Route path="/*" element={<NoPage/>}/>
        // </Routes>
        );
        };
export default Navbar