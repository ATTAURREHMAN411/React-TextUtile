import React, { useState } from "react";
import App from "../App";
const TextAnalyzer = () => {
  const [Text, setText] = useState("")
  const textStyle = {
    width: "100%",
    height: "150px",
    fontSize: "16px",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  };

  const buttonStyle = {
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    padding: "10px 15px",
    margin: "5px",
    borderRadius: "5px",
    cursor: "pointer",
  };

  const containerStyle = {
    width: "50%",
    margin: "auto",
    textAlign: "center",
  };


  function UpperCase(){
  setText(Text.toUpperCase())
  }

  function LowerCase (){
  setText(Text.toLowerCase())
  }
  function ClearText() {
    setText("")
  }
  function CopyText () {
     
  }
  function RmoveSpace () {
    setText(Text.replace(/\s+/g, ' ').trim());
  }
  const Disable = {
    display : "none",
  };
  {
    function Changing (e) {
     setText(e.target.value);
    Disable.display = "inline"
   }
   function wordsCount(str){
    return str.split(' ')
    .filter(function(n) { return n != '' })
    .length;
   }
  return (
    <div style={containerStyle}>
      <h2>Enter the text to analyze below</h2>
      <textarea onChange={Changing} style={textStyle} value={Text} />
       <div>
        <button style={buttonStyle} onClick={UpperCase}>UpperCase</button>
        <button style={buttonStyle} onClick={LowerCase}>LowerCase</button>
        <button style={buttonStyle} onClick={ClearText}>ClearText</button>
        <button style={buttonStyle} onClick={CopyText}>CopyText</button>
        <button style={buttonStyle} onClick={RmoveSpace}>Remove Space</button>
      </div>
      
      <h3>Your Text Summary</h3>
      <p>Total Alphabets = {Text.length}</p>
      <p>Total Words = {wordsCount(Text)}</p>
    </div>
  );
}}

export default TextAnalyzer
