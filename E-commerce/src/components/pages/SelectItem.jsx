import React,{useState, useEffect} from 'react';
import { Link, Outlet} from "react-router-dom";
import { useSelector } from 'react-redux';
import './selectitem.css'
import './fetch.css'
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
const SelectItem = ()=>{
    const [id, setId] = useState('')
    const [data, setData] = useState(null)
    const counter = useSelector((state)=>state.IncDecComp.counter);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`)
            const newData = await response.json()
            setData(newData)
        };    
        fetchData();
    }, [id])
    const checkResponse =(data) =>{
        if (data) {
            //  console.table(data)
            console.log(data.title)
            return            
        } else {
            return null;
        }
    }

    return(
        <><br/><br/><br/><br/>
         <h3 id="amount_item" className="text-dark">$0</h3>
        <h4 className="item_count_1 bg-warning text-dark rounded">{counter+1}</h4> <br/><br/><br/><br/>
            <div className="selectitem bg-dark">
                <h1 className="text-center d-block">Enter item ID to add to Cart</h1>
                {/* navigate('/cart'); */}
               <div>
               <input required="required" style={{width:'300px',height:'50px',borderRadius:'50px',fontSize:'30px'}}
               placeholder='ID' value={id} 
               onChange={e => setId(e.target.value)} />
        <Link to={`/cart/`}><Button className="align-center bg-warning text-dark" style={{width:'150px',height:'50px',borderRadius:'60px'}} 
                onClick={()=>{       
                    checkResponse();
                    // navigate('/cart');
                } }>Move to Cart</Button></Link>   <br/>  
               </div><br/>
            </div>
            
        </>
    )
}

export default SelectItem