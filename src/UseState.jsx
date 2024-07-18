import React, { useState } from 'react'


const UseState = () => {
    const[count,setCount]= useState(0)
    console.log(count);
    const handelIncrement=()=>{
        setCount(count+1)
    }
    const handelDecrement=()=>{
        setCount(count-1)
    }
  return (
    <div>
        <h1>Count:{count}</h1>
    
           <button onClick={handelIncrement}>Increment</button>
        <button onClick={handelDecrement}>Decrementt</button>
    </div>
  )
}

export default UseState