import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Addbook from './Components/Addbook';
import Searchbook from './Components/Searchbook';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" exact element={<Addbook/>}/>
      <Route path="/search" exact element={<Searchbook/>}/>

      </Routes>
      
      </BrowserRouter>
     
    </div>
  );
}

export default App;
