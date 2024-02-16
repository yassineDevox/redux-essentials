import React from "react";
import {
  Counter,
  DecrementCounter,
  IncrementCounter
} from "./components";


const App = () => {
  return (
    <div style={{ margin: "0 auto", width: "20vw", border: "1px solid",
    textAlign:"center"}}>
      <h1>Counter APP v1</h1>
      <Counter />
      <br />
      <IncrementCounter />
      <br />
      <DecrementCounter />
    </div>
  )
}

export default App
