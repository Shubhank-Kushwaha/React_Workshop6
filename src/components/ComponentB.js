import React, {useState} from 'react'
import useCounter from '../useCounter'
const ComponentB = () => {
 const {count, increment,decrement, reset}= useCounter();
  return (
    <div>
      <h1>SecondCounter</h1>
      <h1>{count}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
    </div>
  )
}

export default ComponentB
