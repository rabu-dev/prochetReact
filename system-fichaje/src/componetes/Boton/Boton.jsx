import React from 'react'
import './Boton.css'
function Boton({
  texto, 
  mmanejarClic,
  esBotonDeClic,
}) {
  return (
    <>
    <button
    className={esBotonDeClic ? 'boton-entrada' : 'boton-salida'}
     onClick={mmanejarClic}>
    {texto}
    </button>
    </>
  )
}

export default Boton
