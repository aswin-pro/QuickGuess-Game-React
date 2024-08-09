import ReactDOM from 'react-dom/client';
import React, { useState } from "react";
import "./style.css"

const root=ReactDOM.createRoot(document.getElementById("root"))
 function NumberGuessGame(){

  const [enterednum,setenterednum]=useState("")
  const [output,setoutput]=useState("")
  const [outputcolor,setoutputcolor]=useState("")
  const [score,setscore]=useState(0)
  const [total,settotal]=useState(0)

  const correctans=Math.floor(Math.random()*5)+1
  function handleEnum(evt){
      setenterednum(evt.target.value)
  }
  function check(){

      if(Number(enterednum)===correctans){
        setoutput("Awesome! That's the correct number!")
        setoutputcolor("green")
        setscore(score+1)
        settotal(total+1)
        setenterednum("")
      }
      else
      {
        setoutput("Incorrect guess. Give it another shot!")
        setoutputcolor("red")
        setenterednum("")
        settotal(total+1)
      }
  }
  return(
    <div className='main'>
      <h1>QuickGuess</h1>
      <p>Guess a Number Between 1 to 5</p>
      <input type="number" placeholder='Enter a Number 1 to 5' value={enterednum} onChange={handleEnum} /><br />
      <h4 style={{color:outputcolor}}>{output}</h4>
      <button onClick={check}>Check</button><br />
      <h3>Score: {score} Out of {total} </h3>
    </div>
  )
 }

export default NumberGuessGame;

root.render(
  <NumberGuessGame/>
);

