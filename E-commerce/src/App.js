import './App.css';
import Home from './components/pages/Home'
import ProductDetail from './components/pages/ProductDetail'
import { Route, Routes } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { useNavigate} from "react-router-dom";
// import Home from './components/pages/Home';

function App() {
  const navigate = useNavigate();
  return (
    <>
    <div>
      <FontAwesomeIcon style={{fontSize:'50px',cursor:'pointer'}} onClick={()=>navigate('/')} icon={faHome} />  
      </div>
    <div className="App">
      
    <Routes>
   
      <Route path='/' element={<Home/>}></Route>
      <Route path='/products/:id' element={<ProductDetail />}></Route>
    </Routes>

  </div>
    </>
    
  );
}

export default App;
