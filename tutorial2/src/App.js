
import './App.css';
import Boton from './componetes/Boton';
import Contador from './componetes/Contador';
import logo from './imagenes/logo.png';
import { useState } from 'react';
function App() {

  const [numeroClics, setNumeroClics] = useState(0);


  const manejarClick = () => {
    setNumeroClics(numeroClics + 1 );
  }

  const reiniciarContador = () => {
    setNumeroClics(0);
  }



  return (
  <div className="App">
      <div className="rabu-logo-cont">
        <img
        className='rabulogo'
        src={logo}
        alt='Logo de rabu school'
        />
     </div> 
    <div className='cont-princ'>

      <Contador numeroClics = {numeroClics}/>

      <Boton
      text='Click'
      esBotonDeClip={true}
      manejarClip={manejarClick}
      />
      <Boton
      text='Reiniciar'
      esBotonDeClip={false}
      manejarClip={reiniciarContador}
      />
    
    </div>
  </div>
  );
}

export default App;
