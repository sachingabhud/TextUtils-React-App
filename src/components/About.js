import React, {useState} from 'react';

export default function About() {
  const [myStyle, setStyle] = useState({
    color : "black",
    backgroundColor:"white"
  })  
  const [btntext,setBtnText] = useState("Enable Dark Mode")
  let toggleMode = ()=>{
    if(myStyle.color==="white"){
        setStyle({
            color : "black",
            backgroundColor:"white"
          })
        setBtnText("Enable Dark Mode")  
    }
    else{
        setStyle({
            color : "white",
            backgroundColor:"black",
            border : "1px solid white"
          })
        setBtnText("Enable Light Mode")  
    }
  }
  return (
    <div className='container' style={myStyle}>
    <h1 className='my-3'>About Us</h1>
      <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Sachin Gabhud
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>Founder & CEO TextUtil Pvt. Limited</strong>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Rohit Chavan
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>Co-Founder TextUtil Pvt. Limited</strong>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Vedprakash Pandey
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>CTO TextUtil Pvt. Limited.</strong>
      </div>
    </div>
  </div>
</div>
<div className="container my-3">
    <button type="button" onClick={toggleMode} className="btn btn-primary">{btntext}</button>
</div>
    </div>
  );
}
