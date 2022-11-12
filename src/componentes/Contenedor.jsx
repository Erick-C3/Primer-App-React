import '../estilos/Contenedor.css'

function Contenedor(props){
    let variable = 2+2+2;
    let otraVariable = (<button>Un boton</button>);

    return (
        <div className={"contenedor" + (props.esCuadrado ? " contenedor-cuadrado": "")}>
            <h1>{variable * 4} Primer aplicacion web con React</h1>
            <h2>{props.subTitulo}</h2>
            {otraVariable}
            <img className='imagen' src={require("../img/"+props.imgNombre)} alt="" />
        </div>
    );
}

export default Contenedor;