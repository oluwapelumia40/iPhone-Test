import './App.css';
import Home from './Home';
import Shop from './Shop';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element ={<Home/>}/>
          <Route path="/shop" exact element ={<Shop/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
