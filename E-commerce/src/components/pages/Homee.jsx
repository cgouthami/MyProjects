import React,{useState,useEffect,} from "react";
import axios from "axios";
// import Table from 'react-bootstrap/Table';
import { Link, Outlet} from "react-router-dom";
import './fetch.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBagShopping } from '@fortawesome/free-solid-svg-icons'
// import { faMaximize } from "@fortawesome/free-solid-svg-icons";
// import { useNavigate} from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import Products from '../../components/Products'

const Home = () => {    
    const counter = useSelector((state)=>state.IncDecComp.counter);
    const productItems = Products.map(store =>{ 
        const {id, title, description, image} = store;
        return(
            <div key={ id } className="card">
                <img style={{width:'100px',height:'100px'}} src={image} alt=""></img>
                <h3>{title}</h3>
                <p>{description.slice(0, 100)}<Link to={`/products/${id}`}>See more</Link></p>
            </div>
        )
    })
// const [result,setResult]=useState([])

// const navigate = useNavigate();
// useEffect(()=>{
// fetchData();
// },[])
// const fetchData = () => {
// axios
// .get(`https://fakestoreapi.com/products`)
// .then((response) => {
// setResult(response?.data);
// })
// .catch((error) => {
// console.error(error);
// });
// };
// const imgClick = () =>{
//     //code to open clicked image only
//     alert("Product is clicked")
//  };

 
//  const handleclick = ()=>{
//     alert("Are you sure want to add this item to cart???")
//     // navigate('/selectitem')
// }
return (
    <>
    <h3 className=" text-dark" id="amount">$0</h3>
    <h4 className="item_count text-dark bg-warning rounded">{counter}</h4>
    <div className="div_img text-dark">
    <section className="card-section">
                {productItems}
            </section>
            
    {/* {result.map((products) =>
        <div key={products.id}>   
        <Link to={`/cart/${products.id}`}>
            <FontAwesomeIcon 
            className="float-right text-dark justify-content-end border border-warning border-5 rounded d-flex align-end d-inline" icon={faBagShopping}/>                
        </Link>          
       <img className="main_div" src={products.image} alt=""/><br/>
        <h5 className="text-dark text-center">{products.title}</h5>
        <h1 className="text-dark text-center">{products.price}</h1>
      </div>
        )
        } */}
    </div>
    <Outlet/>
    </>
)

};
export default Home