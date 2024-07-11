import React from 'react'
import '../style/Testi.css'
function Testi(props){
    
    return (
        <div className='container'>
                <img 
                className='imaguen-testi' 
                src={require(`../img/testimonio-${props.imaguen}.png`)}
                />
            <div className='contendor-texto-Testi'>
                <p className='nombre-testi'><strong>{props.nombre}</strong> en <strong>{props.pais}</strong></p>
                <p className='cargo-testi'><strong>{props.cargo}</strong> en <strong>{props.empresa}</strong></p>
                <p className='texto-testi'>"{props.testo}"</p>
            </div>
        </div>
    )
}
export default Testi