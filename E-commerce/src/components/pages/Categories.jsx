import React from 'react';
import './fetch.css'
import { useState,useEffect } from 'react';
import axios from 'axios'
import './fetch.css'
const Categories = ()=>{
  const [result,setResult]=useState([])

// const {
//     state: { id },
//   } = useLocation();
// const navigate = useNavigate();
// useEffect(()=>{
// fetchJewellaryData();
// },[])
// const fetchJewellaryData = () => {
// axios
// .get(`https://fakestoreapi.com/products/category/jewelery`)
// .then((response) => {
// setResult(response?.data);
// })
// .catch((error) => {
// console.error(error);
// });
// };

useEffect(()=>{
  fetchElectronicsData();
  },[])
  const fetchElectronicsData = () => {
  axios
  .get(`https://fakestoreapi.com/products/category/electronics`)
  .then((response) => {
  setResult(response?.data);
  })
  .catch((error) => {
  console.error(error);
  });
  };
useEffect(()=>{
  fetchMenClothingData();
  },[])
  const fetchMenClothingData = () => {
  axios
  .get(`https://fakestoreapi.com/products/category/men's clothing`)
  .then((response) => {
  setResult(response?.data);
  })
  .catch((error) => {
  console.error(error);
  });
  };
useEffect(()=>{
  fetchWomenClothingData();
  },[])
  const fetchWomenClothingData = () => {
  axios
  .get(`https://fakestoreapi.com/products/category/women's clothing`)
  .then((response) => {
  setResult(response?.data);
  })
  .catch((error) => {
  console.error(error);
  });
  };


useEffect(()=>{
fetchJewellaryData();
},[])
const fetchJewellaryData = () => {
axios
.get(`https://fakestoreapi.com/products/category/jewelery`)
.then((response) => {
setResult(response?.data);
})
.catch((error) => {
console.error(error);
});
};
    const product1 = {
        "id": 1,
        "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "price": 109.95,
        "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        "rating": {
            "rate": 3.9,
            "count": 120
        }
    }
    const image1 = product1.image;
    const title1 = product1.title;

    const product2 = {
      "id": 2,
      "title": "Mens Casual Premium Slim Fit T-Shirts ",
      "price": 22.3,
      "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      "category": "men's clothing",
      "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      "rating": {
          "rate": 4.1,
          "count": 259
      }
  }

  
  const image2 = product2.image;
  const title2 = product2.title;
  const price2 = product2.price;

  const product3 = {
    "id": 3,
    "title": "Mens Cotton Jacket",
    "price": 55.99,
    "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    "rating": {
        "rate": 4.7,
        "count": 500
    }
}

  const image3 = product3.image;

  const product4 = {
    "id": 4,
    "title": "Mens Casual Slim Fit",
    "price": 15.99,
    "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    "rating": {
        "rate": 2.1,
        "count": 430
    }
}

  const image4 = product4.image
    return(
        <>
        {/* <h1 className='text-dark text-center'>Categories</h1> */}
        {/* <img className="imgs" src={image1}/>
        <img className="imgs" src={image2}/>
        <img className="imgs" src={image3}/>
        <img className="imgs" src={image4}/> */}

<div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false">
  <div class="carousel-inner">
    <div class="carousel-item active">
      {/* <h1 className='text-dark text-center'>Women</h1> */}
      <hr/>
    {result.map((products) =>
        <div key={products.category} className="text-center">   
              
       <img style={{height:'200px',border:'1px solid black'}} className="justify-content-between" src={products.image} alt="" /><br/>
        <h5 className="text-dark text-center">{products.title}</h5>
        <h1 className="text-dark text-center">${products.price}</h1>
        
      </div>
        )
        }
    </div>
    <div class="carousel-item">
    {/* <h1 className='text-dark text-center'>Electronics</h1> */}
      <hr/>
    {result.map((products) =>
        <div key={products.id} className="text-center">   
              
       <img style={{height:'200px',border:'1px solid black'}} className="justify-content-between" src={products.image} alt="" /><br/>
        <h5 className="text-dark text-center">{products.title}</h5>
        <h1 className="text-dark text-center">${products.price}</h1>        
      </div>
        )
        }
    </div>  
    <div class="carousel-item">
    {/* <h1 className='text-dark text-center'>Men's Cothing</h1> */}
      <hr/>
    {result.map((products) =>
        <div key={products.id} className="text-center">   
              
       <img style={{height:'200px',border:'1px solid black'}} className="justify-content-between" src={products.image} alt="" /><br/>
        <h5 className="text-dark text-center">{products.title}</h5>
        <h1 className="text-dark text-center">${products.price}</h1>        
      </div>
        )
        }
    </div>  
  </div>
  <button class="carousel-control-prev bg-dark text-white" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next bg-dark text-white" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
      
  </>
    )
}

export default Categories