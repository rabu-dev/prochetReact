import React from 'react'
import './Pantalla.css'
function Pantalla({time , date}) {

 

  return (
  <div>
    <div className="time">{time}</div>
    <div className="date">{date}</div>
  </div>
    
   
  )
}

export default Pantalla
