import './App.css';
import Contenedor from './componentes/Contenedor';
import listaInfo from './pseudoDB/listaInfo';

function generarComponentes(){
  let listaComponentes = [];
  listaInfo.forEach(objInfo => {
    listaComponentes.push(
      <Contenedor
        subTitulo = {objInfo.subTitulo}
        imgNombre = {objInfo.imgNombre}
        esCuadrado = {objInfo.esCuadrado}
      />
    );
  });
  return listaComponentes;
}

function App() {
  return (
    <div className="contenedor-principal">
      {generarComponentes()}
      
    </div>
  );
}

export default App;
