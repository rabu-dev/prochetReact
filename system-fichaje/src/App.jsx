import './App.css';
import React from 'react';
import moment from 'moment';
import Boton from './componetes/Boton/Boton';
import Pantalla from './componetes/Pantalla/Pantalla';
import { useState } from 'react';
 function App() {
  
  const [timeEntrada, setTimeEntrada] = useState();
  const [timeSalida, setTimeSalida] = useState();
  
  const time = () => {
    moment().locale("es")
    const time = moment().format("HH:mm:ss");
    //console.log(time);
    return time
  }

  const date = () => {
    moment().locale("es");
    const date = moment().format("dddd, DD MMMM YYYY");
    //console.log(date);
    return date
  }
  const EntradaClic = timeEntrada => {
    console.log("Entrada")
    //Comentario: Se ha añadido la declaración de la variable time con su valor correspondiente.
    const time = moment().locale("es").format("HH:mm:ss");
    const date = moment().locale("es").format("dddd, DD MMMM YYYY");
    console.log(time,date);
    setTimeEntrada(time);
    return {date: date, time: time};
  }
  const SalidaClic = timeSalida => {
    console.log("Salida")
    const time = moment().locale("es").format("HH:mm:ss");
    const date = moment().locale("es").format("dddd, DD MMMM YYYY");
    setTimeSalida(time)
    console.log(time,date);
    return {date: date, time: time};
  
  }


  return (
    <div className="App">
        <h1 className='titulo-app'>Fichaje</h1>
        <div className='pantalla-cont'>

        <Pantalla time={time()} date={date()}/>
        </div>
        <div className='setDatos'>
        <div> {date()}</div>
        <div>{`has entrado a ${timeEntrada ? timeEntrada : "00:00:00"}`}</div>
        <div>{`has salido de ${timeSalida ? timeSalida : "00:00:00"}`}</div>
        </div>
        
        <div className="boton-cont">
        <Boton 
        texto="Entrada"
        esBotonDeClic={true}
        mmanejarClic={EntradaClic}
        />
         <Boton 
        texto="Salida"
        esBotonDeClic={false}
        mmanejarClic={SalidaClic}
        />
        </div>
    </div>

    
  );
}

export default App;
