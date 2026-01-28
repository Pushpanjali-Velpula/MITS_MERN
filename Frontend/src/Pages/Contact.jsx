import React,{useState} from 'react'
import Service from './Service'

const Contact = ({name}) => {
  const [name1,setName]=useState("Pushpa");
  const toggleName=()=>{
    setName(name1==="Pushpa"?"Liki":"Pushpa");
  }
  return (
    <div>
      <h1>Name : {name1}</h1>
      <button onClick={toggleName}>Toogle</button>
    </div>
  )
}

export default Contact