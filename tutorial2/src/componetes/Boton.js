import React from 'react'
import '../componetes/Boton.css'
function Boton({text , esBotonDeClip , manejarClip}) {
  
  return (
    <div>
      <button 
      className={esBotonDeClip ? 'boton-clip' : 'boton-reiniciar'} 
      onClick={manejarClip}>
      {text}
      </button>
    </div>
  )
}

export default Boton
