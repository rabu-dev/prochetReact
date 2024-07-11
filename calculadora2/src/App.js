
import './App.css';
import Boton from './componetes/Boton/Boton';
import Pantalla from './componetes/Pantalla/Pantalla';
import BotonClear from './componetes/BotonClear/BotonClear';
import foto from './imagenes/logo.png'
import { useState } from 'react';
import {evaluate } from 'mathjs';
import Logo from './componetes/Logo/Logo';
function App() {

  const [input, setInput] = useState('');

  const agregarInput = val => {

    setInput(input + val);

  }

  const CalcRest = () => {
    if  (input){
      setInput(evaluate(input));
    } else {
      alert("Por favor ingrese valores");
    }
    
  }


  return (
    <div className="App">
      <Logo foto={foto}/>
      <div className="cont-calcu">
          <Pantalla input={input}/>
          
          <div className='fila'>
            <Boton manejarClic={agregarInput} >(</Boton>
            <Boton manejarClic={agregarInput} >)</Boton>
            <Boton manejarClic={agregarInput} >%</Boton>
            <Boton manejarClic={agregarInput}>^</Boton>

          </div>
          <div className='fila'>
            <Boton manejarClic={agregarInput} >1</Boton>
            <Boton manejarClic={agregarInput} >2</Boton>
            <Boton manejarClic={agregarInput} >3</Boton>
            <Boton manejarClic={agregarInput} >+</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClic={agregarInput} >4</Boton>
            <Boton manejarClic={agregarInput} >5</Boton>
            <Boton manejarClic={agregarInput} >6</Boton>
            <Boton manejarClic={agregarInput} >-</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClic={agregarInput} >7</Boton>
            <Boton manejarClic={agregarInput} >8</Boton>
            <Boton manejarClic={agregarInput} >9</Boton>
            <Boton manejarClic={agregarInput} >*</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClic={CalcRest} >=</Boton>
            <Boton manejarClic={agregarInput} >0</Boton>
            <Boton manejarClic={agregarInput} >.</Boton>
            <Boton manejarClic={agregarInput} >/</Boton>
          </div>
          <div className='fila'>
            <BotonClear manejarClear={() => setInput('')}>Clear</BotonClear>
          </div>
      </div>
    </div>
  );
}

export default App;
