import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode,setMode] = useState("light");
  const toggleMode = () =>{
    if(mode==='dark'){
      setMode("light")
    }
    else{
      setMode("dark")
    }
  }
  return (
  <BrowserRouter>
  <>
  <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
  <div className="container my-3">
  <Routes>
          <Route path="/" element={<TextForm />} />
          <Route path="/textform" element={<TextForm heading="Enter Your Text"/>} />
          <Route path="/about" element={<About />} />
  </Routes>       
  </div>
  </>
  </BrowserRouter>
  );
}

export default App;
