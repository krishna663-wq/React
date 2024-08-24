import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {




  let [counter,setCounter] = useState(0);
  
  // let counter = 15;

      const addvalue = () =>{
        if(counter + 1 > 20){
          alert("Limit exceed")
        } else {
          setCounter(counter+1)
          console.log(counter);
        }
  //   counter = counter + 1
  //   setCounter(counter)
        
  }
  // }
    // console.log("Clicked",setCounter)

  const removeValue = () =>{
    setCounter(counter-1)
    if(counter-1 < 0){
      alert("value cannot be negative")
    } else {
      setCounter(counter-1)
      console.log(counter)
    }

  }
  return (
    <>
      <h1>Print Counter-project</h1>
      <h2>Counter value : {counter}</h2>

      <button onClick={addvalue}>Add value{counter}</button>
      <br/>
      <button onClick={removeValue}>Remove value{counter}</button>
    </>
  )
}

export default App
