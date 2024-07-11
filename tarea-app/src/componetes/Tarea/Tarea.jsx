import React from 'react'
import '../Tarea/Tarea.css'
import { AiOutlineCloseCircle } from "react-icons/ai";
function Tarea({id, texto, completada, completarTarea , eliminarTarea}) {
  return (
    <div className={completada ? 'tarea-cont completada' : 'tarea-cont'}>
        <div className="tarea-texto"
        onClick={() => completarTarea(id)}>
            {texto}
        </div>
        <div 
        className='tarea-cont-iconos'
        onClick={() => eliminarTarea(id)}>
        <AiOutlineCloseCircle className='tarea-icono'/>
        </div>
    </div>
  )
}

export default Tarea
