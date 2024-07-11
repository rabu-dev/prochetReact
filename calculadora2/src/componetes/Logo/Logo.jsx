import React from 'react'

function Logo({foto}) {
  return (
    <div className = 'rabu-logo-cont'>
        <img 
        src= {foto}
        className = 'rabu-logo' 
        alt = 'Logo de rabu school'/>
    </div>
  )
}

export default Logo
