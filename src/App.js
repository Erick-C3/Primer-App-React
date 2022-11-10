import './App.css';
import Contenedor from './componentes/Contenedor';

function App() {
  return (
    <div className="contenedor-principal">
      <Contenedor
        subTitulo = "Un subtitulo 1"
        imgNombre = "img-2.jpg"
      />
      <Contenedor
        subTitulo = "Un subtitulo 2"
        imgNombre = "img-3.jpg"
      />
      <Contenedor
        subTitulo = "Un subtitulo 3"
        imgNombre = "img-4.jpeg"
      />
      <Contenedor
        subTitulo = "Un subtitulo 4"
        imgNombre = "img-1.png"
      />
    </div>
  );
}

export default App;
