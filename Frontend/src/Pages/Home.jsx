import React from 'react'
import { useNavigate } from 'react-router-dom'
const Home = ({name}) => {
  const navigate=useNavigate();
  const handleClick=()=>{
    navigate('/About')
  }
  return (
    <div>
        <h1>Name:{name}</h1>
        <button onClick={handleClick}>Go to About page</button>
    </div>
  )
}

export default Home