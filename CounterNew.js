import React from 'react'
import { useState } from 'react'
import './Counter2.css';
export default function Counter2() {
  

    const [count,setCount]=useState(100);
    
    function incrementCount() {
    setCount(count + 1);
  }
    const decrementCount=()=>{
      setCount(count-1);
    };
    const resetCount=()=>
    {
      setCount(100);
    };
  
  return (
    <div className='buttoncontainer'>
       <h1>Counter: {count}</h1>
       <div className='btn'>
        <button className='btn'onClick={incrementCount}>Increment</button>  
        <button className='btn' onClick={decrementCount}>Decrement</button>
        <button className='btn'onClick={resetCount}>Reset</button>
        </div>
           </div>
  )
}