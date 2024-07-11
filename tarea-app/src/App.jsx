
import './App.css';
import foto from './imagenes/logo.png';
import ListaTarea from './componetes/ListaTarea/ListaTarea';
function App() {
  return (
    <div className='app-tareas'>
      <div className="rabu-logo-cont">
        <img 
        src={foto}
        alt="" 
        className="rabu-logo" />
      </div>
      <div className="tarea-lista-princ">
        <h1>Mis Tareas</h1>
        <ListaTarea />
      </div>
    </div>
  );
}

export default App;
