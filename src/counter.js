

import React,{ useState } from 'react';

function CountNum() {
const [ordinary,setOrdinary]=useState(5);
const [crazy,setCrazy]=useState(5);
const reset=()=>{
    setOrdinary(5)
    setCrazy(5)
    const div=document.getElementsByTagName("div")
    div[2].style.background="none";
    div[3].style.background="none";
    
}
const ordinaryFunction=(event)=>{
    setOrdinary(prevState=>prevState+1)
    console.log("I am called from OrdinaryFunction");
    event.target.parentNode.style.background="orange"
}
const crazyFunction=(event)=>{
    setCrazy(prevState=>prevState+1)
    console.log("I am called from CrazyFunction");
    event.target.parentNode.style.background="orange"
}
  return (
    <div className="App">
      <header className="App-header">
        <CountComponent count={ordinary} text="My Ordinary Function count is" onclick={(event)=>ordinaryFunction(event)}/>
        <CountComponent count={crazy} text="My Crazy Function count is" onclick={(event)=>crazyFunction(event)}/>      
        <button className="reset" onClick={reset}>Reset</button>
      </header>
    </div>
  );
}
function CountComponent(props){
    return(
      <div className="div">
          <h1>{props.text} {props.count}</h1>
          <button onClick={props.onclick}>Update</button>
        </div>
    )
}

export default CountNum;
