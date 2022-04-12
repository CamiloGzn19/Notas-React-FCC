import "./App.css";
import ListaDeTareas from "./Components/ListaDeTareas";
import freeCodeCamp from "./imagenes/FreeCodeCamp_logo.png";

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className="freecodecamp-logo-contenedor">
        <img
          src={freeCodeCamp}
          className="freecodecamp-logo"
          alt="FreeCodeCamp_logo"
        />
      </div>
      <div className="tarea-lista-principal">
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
