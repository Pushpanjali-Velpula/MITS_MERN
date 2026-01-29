import React,{useMemo, useState} from 'react'

const UseMemo = () => {
    const [count,setCount]=useState(0);
    const [number,setNumber]=useState(0);
    const cubeNum=(num)=>{
        console.log("Calculation done...");
        return Math.pow(num,3);
    }
    const result=useMemo(()=>{
        return cubeNum(number)
    },[number]);  
  return (
    <div>
        <h1>Count : {count}</h1>
        <button onClick={()=>setCount(count+1)}>Count++</button>
        <br /><br />
        <input type="number" onChange={(e)=>setNumber(e.target.value)}/>
        <p>Cube of the number {number} is {result}</p>
    </div>
  )
}

export default UseMemo