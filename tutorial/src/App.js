
import './App.css';
import Testi from './componetes/Testi'
function App() {
  return (
    <div className='App'>
      <div className='contenedor-principal'>
        <h1>Esto es lo dicen nuestro alumnos sobre Rabu School</h1>
        <Testi 
        nombre = 'Shawn Wang'
        pais='Singapur'
        imaguen='shawn'
        cargo='Ingeniera de Software'
        empresa='Amazon'
        testo='Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida.'
        />

        
      <Testi 
        nombre = 'Sarah Chima'
        pais='Nigeria'
        imaguen='sarah'
        cargo='Ingeniera de Software'
        empresa='ChatDesk'
        testo='freeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble.'
        />
        
      <Testi 
        nombre = 'Emma Bostian'
        pais='Suecia'
        imaguen='emma'
        cargo='Ingeniera de Software'
        empresa='Spotify'
        testo='Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify.'
      />
      </div>
    </div>
  );
}

export default App;
