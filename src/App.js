import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';

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
  <>
  <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
  <div className="container my-3">
    <TextForm heading="Enter Your Text"/>
    {/* <About/> */}
  </div>
  </>
  );
}

export default App;
