import React from 'react';
import './App.css';
import Nav from './Nav';
import About from './About';
import Shop from './Shop';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Router>
      <Nav />  
      <Routes>
       
        
        <Route path="/about" element={<About/>}/>
        <Route path="/shop" element={<Shop/>}/>    
       
      </Routes>
    </Router>
    </div>
  );
}

export default App;
