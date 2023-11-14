import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { useDispatch,useSelector } from 'react-redux';
import { increment,decrement } from './ReduxCpmponents/actions';
import { nameChange } from './ReduxCpmponents/actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './pages/fetch.css';
import {Table} from 'react-bootstrap';


const Cart =()=>{
    const dispatch = useDispatch();
    const counter = useSelector((state)=>state.IncDecComp.counter);
    const nameValue = useSelector((state)=>state.nameChange.name);
    const [result,setResult]=useState([])
    useEffect(()=>{
        fetchData();
        },[])
        const fetchData = () => {
        axios
        .get("https://fakestoreapi.com/products")
        .then((response) => {
        setResult(response?.data);
        })
        .catch((error) => {
        console.error(error);
        });
        };
        const handleDelete = (id) => {
            axios
              .delete(`https://fakestoreapi.com/products/${id}`)
              .then((response) =>
                response?.status === 200 ? fetchData() : console.log(response)
              )
              .catch((error) => console.error(error));
          };
    return (
        <>      
      
            <h4 className="item_count bg-warning text-dark rounded">{counter+1}</h4> <br/><br/><br/><br/>
            <div>
                <h2 className="text-dark text-center">Shopping Cart</h2>
                <div className="text-dark text-center border rounded">                   
            {/* {            
            result.map(({image,title,price})=>  
            <>
            <img className="cart_img" src={image}/>
                <h4 className="d-flex flex-row justify-content-center d-inline">{title}</h4> 
                <h1 className="d-flex flex-row justify-content-end d-inline">${price}</h1>  
            <hr/>
            </>           
         )
        }                      */}           
        </div>
        <div>
        <h1 style={{color:'black'}} onClick={()=>dispatch(nameChange(""))}>{nameValue}</h1>
                </div>
            </div>
        <Table variant="info" striped bordered hover className="text-center">
        <thead>
          <tr>
            <th>ID</th>
            <th>image</th>
            <th>Add item count</th>
            <th>Remove from cart</th>
          </tr>
        </thead>
        <tbody>
            
          {
          result.map(({ id,image }) => (
            <tr key={id}>
              <td>{id}</td>
              <td><img style={{width:'50px',height:'50px'}} src={image}/></td>
              <td>
           
            <Button variant='primary d-inline' onClick={()=>dispatch(increment(1))}>
                <FontAwesomeIcon icon={faAdd}/>
            </Button>
              </td>
             <td>
             <Button variant='danger' onClick={()=>dispatch(decrement(1))}>
                    <FontAwesomeIcon icon={faTrash}/>
                    </Button>   
             </td>
            </tr>
          ))}
        </tbody>
      </Table> 
        </>

    )
}

export default Cart