import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let counter=5;
  const addValue=()=> {
    counter= counter+1;
    console.log("Clicked");
  }
  return (
    <>
    <h1>Chai aur React</h1>
    <h2>Counter value: {5}</h2>
    <button onClick={addValue}>Increase value</button>
    <br />
    <button onClick>Decrease value</button>
    </>
  )
}

export default App
