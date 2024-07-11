import React from 'react'
import '../componetes/Contador.css'
function Contador({ numeroClics }) {
  return (
    <div className='contador'>
      {numeroClics}
    </div>
  )
}

export default Contador
