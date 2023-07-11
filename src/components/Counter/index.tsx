// With the help of hooks, we can add interactivity and logic to our web pages
// Hook will start with the keyword `use`
// Every component in react has its own state and independently re-render themselves when any change is made
// useState takes in two params initial value and function
// useEffect takes in two params a callback fn and a dependency array

// React Component Phases:
// - Initialization
// - Mounting
// - Updation
// - Unmounting

import React, { useState, useEffect } from "react";
import "./style.css"

const Counter: React.FC = (props) => {
  const [counter, setCounter] = useState(0);
  // console.log(counter);

  useEffect(() => {
    console.log('Counter Mounted');

    return function() {
      console.log('Unmount Counter');
    }
  }, []);

  // Empty Dependency Arrays mean => Whole Component
  // If dep has some values 

  useEffect(() => {
    console.log("User updated count");

    return () => {
      console.log("Counter UseEffect Return");
    };
  }, [counter]);


  const handleIncrement = () => {
    setCounter(counter + 1);
  }

  const handleDecrement = () => {
    if (counter === 0) return;
    setCounter(counter - 1);
  }

  return (

    <div className="counter-container">
      <h1>
        {counter}
      </h1>
      <button onClick={handleIncrement} style= {{ background: "green" }}>INC</button>
      <button onClick={handleDecrement} style= {{ background: "red" }}>DEC</button>
    </div>
  );
};

export default Counter;