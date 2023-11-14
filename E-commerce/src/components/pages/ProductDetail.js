import { useParams } from "react-router-dom";
import Products from '../Products'
import '../../index.css'
import './fetch.css'

function ProductDetail() {
 
   let { id } = useParams();
    const product = Products.find(product => String(product.id) === id);
  
    return (

        <>
           
            <section key={id} className="details-section">
                <img style={{width:'500px',height:'500px',border:'1px solid black',borderRadius:'30px'}} src={product.image} alt=""/>
                <div>
                    <br/><br/><br/>
                    <h3>{product.title}</h3><br/>
                    <p>{product.description}</p>
                    <h1>Price is:${product.price}</h1>
                </div>
            </section>
       </>
    )
}

export default ProductDetail;