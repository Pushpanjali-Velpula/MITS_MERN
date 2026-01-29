import React from 'react'
import Service from './Service'

const About = ({dept,name,age}) => {
  return (
    <div>
      <p>Name : {name}</p>
      <p>Age : {age}</p>
      <p>Department : {dept}</p>
      {/*<p>Contact : {name}</p>*/}
      <Service/>
    </div>
  )
}

export default About