import './App.css';
import Home from './Home';
import Shop from './Shop';
import Cart from './Cart';
import Form from './Component/Account/Form';
import Login from './Component/Account/Login';
import AddressDetails from './Component/CheckOut/AddressDetails';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element ={<Home/>}/>
          <Route path="/shop" exact element ={<Shop/>}/>
          <Route path="/cart" exact element ={<Cart/>}/>
          <Route path="/form" exact element ={<Form/>}/>
          <Route path="/login" exact element ={<Login/>}/>
          <Route path="/address" exact element ={<AddressDetails/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
