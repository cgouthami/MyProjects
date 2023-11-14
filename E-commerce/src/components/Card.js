import { Link,Outlet } from "react-router-dom";
import Products from "./Products";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'
import { faExpand } from "@fortawesome/free-solid-svg-icons";
import '../components/pages/fetch.css'



function Card(){
 
    const productItems = Products.map(store =>{
        const {id, title, price, image} = store;
        return(           
           <>          
            {/* <h4 className="item_count bg-warning text-dark rounded">{counter+1}</h4> <br/><br/><br/><br/> */}

           <div key={ id }>  
           <Link to={`/products/${id}`}>
                <FontAwesomeIcon 
            className="float-right text-dark justify-content-end border border-warning border-5 rounded d-flex align-end d-inline" 
            icon={faExpand}/>
                    </Link>        
            <img style={{width:'300px',height:'300px',border:'1px solid black',borderRadius:'50px'}} src={image} alt=""/><br/>                      
                    <Link to={`/products/${id}`}>
                <FontAwesomeIcon 
            className="float-right text-dark justify-content-end border border-warning border-5 rounded d-flex align-end d-inline" 
            icon={faBagShopping}/>
                    </Link> 
                    <h5 className="text-center">{title}</h5>
                    <h1 className="text-center">${price}</h1><br/>        
                    </div>                 
           </>         
        )
    })

    return (
        <>
         <h4 id="amount" className="text-dark">Total Items Amount:$0</h4> 
            {/* <h4 className="item_count text-dark bg-warning rounded">{counter}</h4> */}
            <div className="div_img">
            {productItems}
            </div>
            {/* <Button variant='danger' onClick={()=>dispatch(decrement(1))}>
                    <FontAwesomeIcon icon={faTrash}/>
                    </Button>                  
                    <h1 style={{color:'black',display:'inline'}}>{counter}</h1>

                    <Button variant='primary d-inline' onClick={()=>dispatch(increment(1))}>
                        <FontAwesomeIcon icon={faAdd}/>
                 </Button> */}
            
        </>
    );
};

export default Card;