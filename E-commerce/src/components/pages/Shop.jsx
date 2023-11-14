import React, { useState } from "react";
import "./fetch.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

const Shop = () => {
  const navigate = useNavigate();
  const [isdone1, setdone1] = useState(false);
  const [isdone2, setdone2] = useState(false);
  const [isdone3, setdone3] = useState(false);
  const [isdone4, setdone4] = useState(false);
  const [isdone5, setdone5] = useState(false);
  const [isdone6, setdone6] = useState(false);
  const [isdone7, setdone7] = useState(false);
  const [isdone8, setdone8] = useState(false);

  const [color1,setcolor1] = useState(false);
  const [color2,setcolor2] = useState(false);
  const [color3,setcolor3 ] = useState(false);
  const [color4,setcolor4] = useState(false);

  const colorClick1 = () => {
    setcolor1(current => !current);
  }
  const colorClick2 = () => {
    setcolor2(current => !current);
  }
  const colorClick3 = () => {
    setcolor3(current => !current);
  }
  const colorClick4 = () => {
    setcolor4(current => !current);
  }


  const handleClick1 = () => {
    setdone1(current => !current);
  }
  const handleClick2 = () => {
    setdone2(current => !current);
  }
  const handleClick3 = () => {
    setdone3(current => !current);
  }
  const handleClick4 = () => {
    setdone4(current => !current);
  }
  const handleClick5 = () => {
    setdone5(current => !current);
  }
  const handleClick6 = () => {
    setdone6(current => !current);
  }
  const handleClick7 = () => {
    setdone7(current => !current);
  }
  const handleClick8 = () => {
    setdone8(current => !current);
  }

  const addtoCart = ()=>{
    alert("Added to cart");
    navigate('/cart');
  }
  const product1 = {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  };
  const image1 = product1.image;
  const title1 = product1.title;
  const price1 = product1.price;
  const product2 = {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 22.3,
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    category: "men's clothing",
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    rating: {
      rate: 4.1,
      count: 259,
    },
  };

  const image2 = product2.image;
  const title2 = product2.title;
  const price2 = product2.price;

  const product3 = {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 55.99,
    description:
      "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    rating: {
      rate: 4.7,
      count: 500,
    },
  };

  const image3 = product3.image;
  const title3 = product3.title;
  const price3 = product3.price;

  const product4 = {
    id: 4,
    title: "Mens Casual Slim Fit",
    price: 15.99,
    description:
      "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    rating: {
      rate: 2.1,
      count: 430,
    },
  };

  const image4 = product4.image;
  const title4 = product4.title;
  const price4 = product4.price;

  const product5 = {
    id: 20,
    title: "DANVOUY Womens T Shirt Casual Cotton Short",
    price: 12.99,
    description:
      "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
    rating: {
      rate: 3.6,
      count: 145,
    },
  };

  const image5 = product5.image;
  const title5 = product5.title;
  const price5 = product5.price;

  // const [bgColor, setBgColor] = useState("");
  // const changeColor = (e) => {
  //   e.preventDefault();
  //   let purple = "#A020F0";
  //   setBgColor(purple);
  // };

  return (
    <>
      <h1 className="text-dark text-center">Product Details</h1>
      {/* <img className="imgs" src={image1}/>
        <img className="imgs" src={image2}/>
        <img className="imgs" src={image3}/>
        <img className="imgs" src={image4}/> */}
      <div
        id="carouselExampleFade"
        class="carousel slide carousel-fade"
        data-bs-touch="false"
      >
        <div class="carousel-inner text-dark bg-secondary">
          <div
            class="carousel-item active"
            style={{ height: "600px", width: "300px" }}
          >
            <h2
              className="text-white text-start"
              style={{ width: "300px", marginLeft: "200px", marginTop: "20px" }}
            >
              {title1}
            </h2>
            <p
              className="text-white text-start"
              style={{ width: "300px", marginLeft: "200px", marginTop: "60px" }}
            ></p>
            <br />
            <img
              className=""
              style={{
                height: "300px",
                width: "300px",
                border: "1px solid white",
                borderRadius: "60px",
                marginLeft: "900px",
                marginTop: "-200px",
              }}
              src={image1}
              alt="..."
            />
            <h1
              className="text-white text-start"
              style={{ marginLeft: "1000px", marginTop: "10px" }}
            >
              ${price1}
            </h1>
            <br />

            <h1
              className="text-white text-start"
              style={{ marginLeft: "100px", marginTop: "-250px" }}
            >
              Reviews:
            </h1>
            <b>
              <FontAwesomeIcon
                style={{
                  color: "white",
                  marginLeft: "100px",
                  marginTop: "-100px",
                }}
                icon={faStar}
              />
            </b>
            <b>
              <FontAwesomeIcon
                style={{
                  color: "white",
                  marginLeft: "100px",
                  marginTop: "-100px",
                }}
                icon={faStar}
              />
            </b>

            <h3
              className="text-white text-start"
              style={{ marginLeft: "100px", marginTop: "10px" }}
            >
              Select Color:
            </h3>
            <b
              className=" text-start"
              style={{
                backgroundColor: color1?'white':'red',
                backgroundColor: color1?'red':'white',
                marginLeft: "100px",
                marginTop: "-100px",
                border: "5px solid red",
                borderRadius: "30px",
              }}
              onClick={colorClick1}
            >
            red
            </b>
            <b
              className="text-start "
              style={{
                backgroundColor: color2?'white':'blue',
                backgroundColor: color2?'blue':'white',
                marginLeft: "100px",
                marginTop: "-100px",
                border: "5px solid blue",
                borderRadius: "30px",
              }}
              onClick={colorClick2}
            >
              blue
            </b>
            <b
              className="text-start"
              style={{
                backgroundColor: color3?'white':'yellow',
                backgroundColor: color3?'yellow':'white',
                marginLeft: "100px",
                marginTop: "-100px",
                border: "5px solid yellow",
                borderRadius: "30px",
              }}
              onClick={colorClick3}
            >
              yellow
            </b>
            <b
              className="text-info text-start"
              style={{
                backgroundColor: color4?'white':'skyblue',
                backgroundColor: color4?'skyblue':'white',
                marginLeft: "100px",
                marginTop: "-100px",
                border: "5px solid skyblue",
                borderRadius: "30px",
              }}
              onClick={colorClick4}
            >
              skyblue
            </b>
            <h3
              className="text-white text-center"
              style={{ marginLeft: "30px", marginTop: "10px" }}
            >
              Select Size:
            </h3>
            <br />
            <b 
              className="text-dark text-start fs-1"
              
              style={{
                backgroundColor: isdone1 ? 'white' : 'salmon',
                backgroundColor: isdone1 ? 'salmon' : 'white',                
                marginLeft: "100px",
                marginTop: "-100px",
                border: "1px solid white",
                borderRadius: "20px",
              }}
              onClick={handleClick1}
            >
              41
            </b>
            <b
              className="text-dark text-start fs-1"
              
              style={{
                backgroundColor: isdone2 ? 'white' : 'salmon',
                backgroundColor: isdone2 ? 'salmon' : 'white', 
                marginLeft: "100px",
                marginTop: "-100px",
                border: "1px solid white",
                borderRadius: "20px",
              }}
              onClick={handleClick2}
            >
              42
            </b>
            <b
              className="text-dark text-start fs-1"
              onClick={handleClick3}
              style={{
                backgroundColor: isdone3 ? 'white' : 'salmon',
                backgroundColor: isdone3 ? 'salmon' : 'white',
                marginLeft: "100px",
                marginTop: "-100px",
                border: "1px solid white",
                borderRadius: "20px",
              }}
            >
              43
            </b>
            <b
              className="text-dark text-start fs-1"
              onClick={handleClick4}
              style={{
                backgroundColor: isdone4 ? 'white' : 'salmon',
                backgroundColor: isdone4 ? 'salmon' : 'white',
                marginLeft: "100px",
                marginTop: "-100px",
                border: "1px solid white",
                borderRadius: "20px",
              }}
            >
              44
            </b>
            <b
              className="text-dark text-start fs-1"
              onClick={handleClick5}
              style={{
                backgroundColor: isdone5 ? 'white' : 'salmon',
                backgroundColor: isdone5 ? 'salmon' : 'white',
                marginLeft: "100px",
                marginTop: "-100px",
                border: "1px solid white",
                borderRadius: "20px",
              }}
            >
              45
            </b>
            <b
              className="text-dark text-start fs-1"
              onClick={handleClick6}
              style={{
                backgroundColor: isdone6 ? 'white' : 'salmon',
                backgroundColor: isdone6 ? 'salmon' : 'white',
                marginLeft: "100px",
                marginTop: "-100px",
                border: "1px solid white",
                borderRadius: "20px",
              }}
            >
              46
            </b>
            <b
              className="text-dark text-start fs-1"
              onClick={handleClick7}
              style={{
                backgroundColor: isdone7 ? 'white' : 'salmon',
                backgroundColor: isdone7 ? 'salmon' : 'white',
                marginLeft: "100px",
                marginTop: "-100px",
                border: "1px solid white",
                borderRadius: "20px",
              }}
            >
              47
            </b>
            <b
              className="text-dark text-start fs-1"
              onClick={handleClick8}
              style={{
                backgroundColor: isdone8 ? 'white' : 'salmon',
                backgroundColor: isdone8 ? 'salmon' : 'white',
                marginLeft: "100px",
                marginTop: "-100px",
                border: "1px solid white",
                borderRadius: "20px",
              }}
            >
              48
            </b>
          </div>
          <div
            class="carousel-item"
            style={{ height: "600px", width: "300px" }}
          >
            <h2
              className="text-white text-start"
              style={{ width: "300px", marginLeft: "200px", marginTop: "20px" }}
            >
              {title2}
            </h2>
            <p
              className="text-white text-start"
              style={{ width: "300px", marginLeft: "200px", marginTop: "60px" }}
            ></p>
            <br />
            <img
              className=""
              style={{
                height: "300px",
                width: "300px",
                border: "1px solid white",
                borderRadius: "60px",
                marginLeft: "900px",
                marginTop: "-200px",
              }}
              src={image2}
              alt="..."
            />
            <h1
              className="text-white text-start"
              style={{ marginLeft: "1000px", marginTop: "10px" }}
            >
              ${price2}
            </h1>
            <br />

            <h1
              className="text-white text-start"
              style={{ marginLeft: "100px", marginTop: "-250px" }}
            >
              Reviews:
            </h1>
            <b>
              <FontAwesomeIcon
                style={{
                  color: "white",
                  marginLeft: "100px",
                  marginTop: "-100px",
                }}
                icon={faStar}
              />
            </b>
            <b>
              <FontAwesomeIcon
                style={{
                  color: "white",
                  marginLeft: "100px",
                  marginTop: "-100px",
                }}
                icon={faStar}
              />
            </b>

            <h3
              className="text-white text-start"
              style={{ marginLeft: "100px", marginTop: "10px" }}
            >
              Select Color:
            </h3>
            <b
              className=" text-start"
              style={{
                backgroundColor: color1?'white':'red',
                backgroundColor: color1?'red':'white',
                marginLeft: "100px",
                marginTop: "-100px",
                border: "5px solid red",
                borderRadius: "30px",
              }}
              onClick={colorClick1}
            >
            red
            </b>
            <b
              className="text-start "
              style={{
                backgroundColor: color2?'white':'blue',
                backgroundColor: color2?'blue':'white',
                marginLeft: "100px",
                marginTop: "-100px",
                border: "5px solid blue",
                borderRadius: "30px",
              }}
              onClick={colorClick2}
            >
              blue
            </b>
            <b
              className="text-start"
              style={{
                backgroundColor: color3?'white':'yellow',
                backgroundColor: color3?'yellow':'white',
                marginLeft: "100px",
                marginTop: "-100px",
                border: "5px solid yellow",
                borderRadius: "30px",
              }}
              onClick={colorClick3}
            >
              yellow
            </b>
            <b
              className="text-info text-start"
              style={{
                backgroundColor: color4?'white':'skyblue',
                backgroundColor: color4?'skyblue':'white',
                marginLeft: "100px",
                marginTop: "-100px",
                border: "5px solid skyblue",
                borderRadius: "30px",
              }}
              onClick={colorClick4}
            >
              skyblue
            </b>
            <h3
              className="text-white text-center"
              style={{ marginLeft: "30px", marginTop: "10px" }}
            >
              Select Size:
            </h3>
            <br />
            <b
              className="text-dark text-start fs-1"
              style={{
                backgroundColor: isdone1 ? 'white' : 'salmon',
                backgroundColor: isdone1 ? 'salmon' : 'white',  
                marginLeft: "100px",
                marginTop: "-100px",
                border: "1px solid white",
                borderRadius: "20px",
              }}
              onClick={handleClick1}
            >
              41
            </b>
            <b
              className="text-dark text-start fs-1"
              style={{
                backgroundColor: isdone2 ? 'white' : 'salmon',
                backgroundColor: isdone2 ? 'salmon' : 'white', 
                marginLeft: "100px",
                marginTop: "-100px",
                border: "1px solid white",
                borderRadius: "20px",
              }}
              onClick={handleClick2}
            >
              42
            </b>
            <b
              className="text-dark text-start fs-1"
              style={{
                backgroundColor: isdone3 ? 'white' : 'salmon',
                backgroundColor: isdone3 ? 'salmon' : 'white', 
                marginLeft: "100px",
                marginTop: "-100px",
                border: "1px solid white",
                borderRadius: "20px",
              }}
              onClick={handleClick3}
            >
              43
            </b>
            <b
              className="text-dark text-start fs-1"
              style={{
                backgroundColor: isdone4 ? 'white' : 'salmon',
                backgroundColor: isdone4 ? 'salmon' : 'white', 
                marginLeft: "100px",
                marginTop: "-100px",
                border: "1px solid white",
                borderRadius: "20px",
              }}
              onClick={handleClick4}
            >
              44
            </b>
            <b
              className="text-dark text-start fs-1"
              style={{
                backgroundColor: isdone5 ? 'white' : 'salmon',
                backgroundColor: isdone5 ? 'salmon' : 'white', 
                marginLeft: "100px",
                marginTop: "-100px",
                border: "1px solid white",
                borderRadius: "20px",
              }}
              onClick={handleClick5}
            >
              45
            </b>
            <b
              className="text-dark text-start fs-1"
              style={{
                backgroundColor: isdone6 ? 'white' : 'salmon',
                backgroundColor: isdone6 ? 'salmon' : 'white', 
                marginLeft: "100px",
                marginTop: "-100px",
                border: "1px solid white",
                borderRadius: "20px",
              }}
              onClick={handleClick6}
            >
              46
            </b>
            <b
              className="text-dark text-start fs-1"
              style={{
                backgroundColor: isdone7 ? 'white' : 'salmon',
                backgroundColor: isdone7 ? 'salmon' : 'white',
                marginLeft: "100px",
                marginTop: "-100px",
                border: "1px solid white",
                borderRadius: "20px",
              }}
              onClick={handleClick7}
            >
              47
            </b>
            <b
              className="text-dark text-start fs-1"
              style={{
                backgroundColor: isdone8 ? 'white' : 'salmon',
                backgroundColor: isdone8 ? 'salmon' : 'white',
                marginLeft: "100px",
                marginTop: "-100px",
                border: "1px solid white",
                borderRadius: "20px",
              }}
              onClick={handleClick8}
            >
              48
            </b>
          </div>
          <div
            class="carousel-item"
            style={{ height: "600px", width: "300px" }}
          >
            <h2
              className="text-white text-start"
              style={{               
                width: "300px",
                marginLeft: "200px",
                marginTop: "100px",
              }}
            >
              {title3}
            </h2>
            <p
              className="text-white text-start"
              style={{ width: "300px", marginLeft: "200px", marginTop: "60px" }}
            ></p>
            <br />
            <img
              className=""
              style={{
                height: "300px",
                width: "300px",
                border: "1px solid white",
                borderRadius: "60px",
                marginLeft: "900px",
                marginTop: "-200px",
              }}
              src={image3}
              alt="..."
            />
            <h1
              className="text-white text-start"
              style={{ marginLeft: "1000px", marginTop: "10px" }}
            >
              ${price3}
            </h1>
            <br />

            <h1
              className="text-white text-start"
              style={{ marginLeft: "100px", marginTop: "-250px" }}
            >
              Reviews:
            </h1>
            <b>
              <FontAwesomeIcon
                style={{
                  color: "white",
                  marginLeft: "100px",
                  marginTop: "-100px",
                }}
                icon={faStar}
              />
            </b>
            <b>
              <FontAwesomeIcon
                style={{
                  color: "white",
                  marginLeft: "100px",
                  marginTop: "-100px",
                }}
                icon={faStar}
              />
            </b>

            <h3
              className="text-white text-start"
              style={{ marginLeft: "100px", marginTop: "10px" }}
            >
              Select Color:
            </h3>
            <b
              className=" text-start"
              style={{
                backgroundColor: color1?'white':'red',
                backgroundColor: color1?'red':'white',
                marginLeft: "100px",
                marginTop: "-100px",
                border: "5px solid red",
                borderRadius: "30px",
              }}
              onClick={colorClick1}
            >
            red
            </b>
            <b
              className="text-start "
              style={{
                backgroundColor: color2?'white':'blue',
                backgroundColor: color2?'blue':'white',
                marginLeft: "100px",
                marginTop: "-100px",
                border: "5px solid blue",
                borderRadius: "30px",
              }}
              onClick={colorClick2}
            >
              blue
            </b>
            <b
              className="text-start"
              style={{
                backgroundColor: color3?'white':'yellow',
                backgroundColor: color3?'yellow':'white',
                marginLeft: "100px",
                marginTop: "-100px",
                border: "5px solid yellow",
                borderRadius: "30px",
              }}
              onClick={colorClick3}
            >
              yellow
            </b>
            <b
              className="text-info text-start"
              style={{
                backgroundColor: color4?'white':'skyblue',
                backgroundColor: color4?'skyblue':'white',
                marginLeft: "100px",
                marginTop: "-100px",
                border: "5px solid skyblue",
                borderRadius: "30px",
              }}
              onClick={colorClick4}
            >
              skyblue
            </b>
            <h3
              className="text-white text-center"
              style={{ marginLeft: "30px", marginTop: "10px" }}
            >
              Select Size:
            </h3>
            <br />
            <b
              className="text-dark text-start fs-1"
              style={{
                backgroundColor: isdone1 ? 'white' : 'salmon',
                backgroundColor: isdone1 ? 'salmon' : 'white',
                marginLeft: "100px",
                marginTop: "-100px",
                border: "1px solid white",
                borderRadius: "20px",
              }}
              onClick={handleClick1}
            >
              41
            </b>
            <b
              className="text-dark text-start fs-1"
              style={{
                backgroundColor: isdone2 ? 'white' : 'salmon',
                backgroundColor: isdone2 ? 'salmon' : 'white',
                marginLeft: "100px",
                marginTop: "-100px",
                border: "1px solid white",
                borderRadius: "20px",
              }}
              onClick={handleClick2}
            >
              42
            </b>
            <b
              className="text-dark text-start fs-1"
              style={{
                backgroundColor: isdone3 ? 'white' : 'salmon',
                backgroundColor: isdone3 ? 'salmon' : 'white',
                marginLeft: "100px",
                marginTop: "-100px",
                border: "1px solid white",
                borderRadius: "20px",
              }}
              onClick={handleClick3}
            >
              43
            </b>
            <b
              className="text-dark text-start fs-1"
              style={{
                backgroundColor: isdone4 ? 'white' : 'salmon',
                backgroundColor: isdone4 ? 'salmon' : 'white',
                marginLeft: "100px",
                marginTop: "-100px",
                border: "1px solid white",
                borderRadius: "20px",
              }}
              onClick={handleClick4}
            >
              44
            </b>
            <b
              className="text-dark text-start fs-1"
              style={{
                backgroundColor: isdone5 ? 'white' : 'salmon',
                backgroundColor: isdone5 ? 'salmon' : 'white',
                marginLeft: "100px",
                marginTop: "-100px",
                border: "1px solid white",
                borderRadius: "20px",
              }}
              onClick={handleClick5}
            >
              45
            </b>
            <b
              className="text-dark text-start fs-1"
              style={{
                backgroundColor: isdone6 ? 'white' : 'salmon',
                backgroundColor: isdone6 ? 'salmon' : 'white',
                marginLeft: "100px",
                marginTop: "-100px",
                border: "1px solid white",
                borderRadius: "20px",
              }}
              onClick={handleClick6}
            >
              46
            </b>
            <b
              className="text-dark text-start fs-1"
              style={{
                backgroundColor: isdone7 ? 'white' : 'salmon',
                backgroundColor: isdone7 ? 'salmon' : 'white',
                marginLeft: "100px",
                marginTop: "-100px",
                border: "1px solid white",
                borderRadius: "20px",
              }}
              onClick={handleClick7}
            >
              47
            </b>
            <b
              className="text-dark text-start fs-1"
              style={{
                backgroundColor: isdone8 ? 'white' : 'salmon',
                backgroundColor: isdone8 ? 'salmon' : 'white',
                marginLeft: "100px",
                marginTop: "-100px",
                border: "1px solid white",
                borderRadius: "20px",
              }}
              onClick={handleClick8}
            >
              48
            </b>
          </div>
          <div
            class="carousel-item"
            style={{ height: "600px", width: "300px" }}
          >
            <h2
              className="text-white text-start"
              style={{
                
                width: "300px",
                marginLeft: "200px",
                marginTop: "100px",
              }}
              
            >
              {title4}
            </h2>
            <p
              className="text-white text-start"
              style={{ width: "300px", marginLeft: "200px", marginTop: "60px" }}
            ></p>
            <br />
            <img
              className=""
              style={{
                height: "300px",
                width: "300px",
                border: "1px solid white",
                borderRadius: "60px",
                marginLeft: "900px",
                marginTop: "-200px",
              }}
              src={image4}
              alt="..."
            />
            <h1
              className="text-white text-start"
              style={{ marginLeft: "1000px", marginTop: "10px" }}
            >
              ${price4}
            </h1>
            <br />

            <h1
              className="text-white text-start"
              style={{ marginLeft: "100px", marginTop: "-250px" }}
            >
              Reviews:
            </h1>
            <b>
              <FontAwesomeIcon
                style={{
                  color: "white",
                  marginLeft: "100px",
                  marginTop: "-100px",
                }}
                icon={faStar}
              />
            </b>
            <b>
              <FontAwesomeIcon
                style={{
                  color: "white",
                  marginLeft: "100px",
                  marginTop: "-100px",
                }}
                icon={faStar}
              />
            </b>

            <h3
              className="text-white text-start"
              style={{ marginLeft: "100px", marginTop: "10px" }}
            >
              Select Color:
            </h3>
            <b
              className=" text-start"
              style={{
                backgroundColor: color1?'white':'red',
                backgroundColor: color1?'red':'white',
                marginLeft: "100px",
                marginTop: "-100px",
                border: "5px solid red",
                borderRadius: "30px",
              }}
              onClick={colorClick1}
            >
            red
            </b>
            <b
              className="text-start "
              style={{
                backgroundColor: color2?'white':'blue',
                backgroundColor: color2?'blue':'white',
                marginLeft: "100px",
                marginTop: "-100px",
                border: "5px solid blue",
                borderRadius: "30px",
              }}
              onClick={colorClick2}
            >
              blue
            </b>
            <b
              className="text-start"
              style={{
                backgroundColor: color3?'white':'yellow',
                backgroundColor: color3?'yellow':'white',
                marginLeft: "100px",
                marginTop: "-100px",
                border: "5px solid yellow",
                borderRadius: "30px",
              }}
              onClick={colorClick3}
            >
              yellow
            </b>
            <b
              className="text-info text-start"
              style={{
                backgroundColor: color4?'white':'skyblue',
                backgroundColor: color4?'skyblue':'white',
                marginLeft: "100px",
                marginTop: "-100px",
                border: "5px solid skyblue",
                borderRadius: "30px",
              }}
              onClick={colorClick4}
            >
              skyblue
            </b>
            <h3
              className="text-white text-center"
              style={{ marginLeft: "30px", marginTop: "10px" }}
            >
              Select Size:
            </h3>
            <br />
            <b
              className="text-dark text-start fs-1"
              style={{
                backgroundColor: isdone1 ? 'white' : 'salmon',
                backgroundColor: isdone1 ? 'salmon' : 'white',
                marginLeft: "100px",
                marginTop: "-100px",
                border: "1px solid white",
                borderRadius: "20px",
              }}
              onClick={handleClick1}
            >
              41
            </b>
            <b
              className="text-dark text-start fs-1"
              style={{
                backgroundColor: isdone2 ? 'white' : 'salmon',
                backgroundColor: isdone2 ? 'salmon' : 'white',
                marginLeft: "100px",
                marginTop: "-100px",
                border: "1px solid white",
                borderRadius: "20px",
                
              }}
              onClick={handleClick2}
            >
              42
            </b>
            <b
              className="text-dark text-start fs-1"
              style={{
                backgroundColor: isdone3 ? 'white' : 'salmon',
                backgroundColor: isdone3 ? 'salmon' : 'white',
                marginLeft: "100px",
                marginTop: "-100px",
                border: "1px solid white",
                borderRadius: "20px",
              }}
              onClick={handleClick3}
            >
              43
            </b>
            <b
              className="text-dark text-start fs-1"
              style={{
                backgroundColor: isdone4 ? 'white' : 'salmon',
                backgroundColor: isdone4 ? 'salmon' : 'white',
                marginLeft: "100px",
                marginTop: "-100px",
                border: "1px solid white",
                borderRadius: "20px",
              }}
              onClick={handleClick4}
            >
              44
            </b>
            <b
              className="text-dark text-start fs-1"
              style={{
                backgroundColor: isdone5 ? 'white' : 'salmon',
                backgroundColor: isdone5 ? 'salmon' : 'white',
                marginLeft: "100px",
                marginTop: "-100px",
                border: "1px solid white",
                borderRadius: "20px",
              }}
              onClick={handleClick5}
            >
              45
            </b>
            <b
              className="text-dark text-start  fs-1"
              style={{
                backgroundColor: isdone6 ? 'white' : 'salmon',
                backgroundColor: isdone6 ? 'salmon' : 'white',
                marginLeft: "100px",
                marginTop: "-100px",
                border: "1px solid white",
                borderRadius: "20px",
              }}
              onClick={handleClick6}
            >
              46
            </b>
            <b
              className="text-dark text-start fs-1"
              style={{
                backgroundColor: isdone7 ? 'white' : 'salmon',
                backgroundColor: isdone7 ? 'salmon' : 'white',
                marginLeft: "100px",
                marginTop: "-100px",
                border: "1px solid white",
                borderRadius: "20px",
              }}
              onClick={handleClick7}
            >
              47
            </b>
            <b
              className="text-dark text-start fs-1"
              style={{
                backgroundColor: isdone8 ? 'white' : 'salmon',
                backgroundColor: isdone8 ? 'salmon' : 'white',
                marginLeft: "100px",
                marginTop: "-100px",
                border: "1px solid white",
                borderRadius: "20px",
              }}
              onClick={handleClick8}
            >
              48
            </b>
          </div>
          <Button  id="btncart"
            style={{
             
              marginLeft: "500px",
              marginTop: "500px",
              // cursor: "not-allowed",
            }}
            className="text-dark justify-content-center w-25"
            variant="warning"
            onClick={addtoCart}
            
          >
            <h1>Add to Cart</h1>
          </Button>{" "}
          
        </div>
        <button
          style={{ height: "50px" }}
          class="carousel-control-prev bg-dark text-white"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          style={{ height: "50px" }}
          class="carousel-control-next bg-dark text-white"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>

        <h1 className="text-dark text-center">Related Products</h1>
        <div className="">
          <img className="rel_imgs" src={image5} />
          <img className="rel_imgs" src={image2} />
          <img className="rel_imgs" src={image3} />
          <img className="rel_imgs" src={image4} />
        </div>
      </div>
    </>
  );
};
export default Shop;
