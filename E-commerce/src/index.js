import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Logo from './components/Logo'
import Navbar from './components/Navbar';
import Cart from './components//Cart';
import Search from './components/Search'
// import Cart from './components/Cart';
import App from './App';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './components/pages/Home';

import Shop from './components/pages/Shop';
import Categories from './components/pages/Categories';
import Contact from './components/pages/Contact';
import Login from './components/pages/Login';
import SignUp from './components/pages/SignUp';
import NoPage from './components/pages/NoPage';
import {Provider}  from 'react-redux';
import store from './components/ReduxCpmponents/store';


const root = ReactDOM.createRoot(document.getElementById('root'));

// const routehome=createBrowserRouter([{element:<Home/>, children:[{path:'https://fakestoreapi.com/products/:id',element:<Home/>}]}])
const router = createBrowserRouter([ 
  {
    path:'/',
    element: <Home/>,
  element:<Navbar/>,
  
  children:[
    {
      path:'/cart',
    element:<Cart/>
    },
     
  {
    path:'/shop',
  element:<Shop/>
  },
  {
  path:'/categories',
  element:<Categories/>
  },
  {
  path:'/contact',
  element:<Contact/>
  },
  {
  path:'/login',
  element:<Login/>
  },
  {
  path:'/signup',
  element:<SignUp/>
  },
  {
    path:'/nopage',
    element:<NoPage/>
  },
  {
    path:'/product/:id',
    element:<Cart/>
  },
  {
    path:'/search',
    element:<Search/>
  } 
  ]
  },
 
  ]
  )
 
root.render(
  <>
 
  <Provider store={store}> 
  <RouterProvider router={router}/>
  </Provider>
  <BrowserRouter>
  <App />
</BrowserRouter>

  </>
  
); 
   
  
  // <RouterProvider router={router}/>
  // <React.StrictMode>
  
  //  <Logo/> 
  //   <Navbar/>
  // </React.StrictMode> 



