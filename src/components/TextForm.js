import React, {useState} from 'react';

export default function TextForm(props) {
  const handleOnChange = (event)=>{
    setText(event.target.value)
  }  
  const [text,setText] = useState("")  

  const handleUpCLick = ()=>{
    let newText = text.toUpperCase()
    setText(newText)
  }
  const handleLwCLick = ()=>{
    let newText = text.toLowerCase()
    setText(newText)
  }
  const handleClearCLick = ()=>{
    let newText = ""
    setText(newText)
  }
  const handleCopyCLick = ()=>{
    var text = document.getElementById("myText");
    text.select()
    navigator.clipboard.writeText(text.value)
  }
  const handleExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/)
    setText(newText.join(" "))
  }
  return (
    <>
    <div className='container'>
    <h1>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnChange} id="myText" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-1" onClick={handleUpCLick}>Convert To Upper Case</button>
    <button className="btn btn-primary mx-1" onClick={handleLwCLick}>Convert To Lower Case</button>
    <button className="btn btn-primary mx-1" onClick={handleCopyCLick}>Copy Text</button>
    <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    <button className="btn btn-primary mx-1" onClick={handleClearCLick}>Clear</button>
    </div>
    <div className="container my-3">
        <h2>You Text Summary :</h2>
        <p>Number of Words : {text.split(" ").length}</p>
        <p>Number of Characters : {text.length}</p>
        <p>Average time to read : {0.008*text.split(" ").length} Min</p>
        <h2>Preview </h2>
        <p>{text.length>0?text:"Enter your text to preview it here."}</p>
    </div>
    </>
  );
}
