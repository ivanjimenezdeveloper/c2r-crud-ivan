import { useState } from "react";
import { Menu } from "./components/Menu";
import { Persona } from "./components/Persona";
import { Formulario } from "./components/Formulario";

function App() {
  const [personas, setPersonas] = useState([
    {
      id: 1,
      nombre: "Alex",
      apellidos: "Bienvenido",
      vivo: true,
    },
    {
      id: 2,
      nombre: "Padellet",
      apellidos: "Espabilao",
      vivo: false,
    },
    {
      id: 3,
      nombre: "Albert",
      apellidos: "Xikito",
      vivo: false,
    },
    {
      id: 4,
      nombre: "Iván",
      apellidos: "Figura",
      vivo: true,
    },
  ]);
  let ultimaId = 4;

  const borrarPersona = (id) => {
    setPersonas(personas.filter((persona) => persona.id !== id));
  };

  return (
    <div className="row container-fluid">
      <div className="col">
        <Menu />
        <ul className="row">
          {personas.map((persona) => (
            <Persona
              persona={persona}
              borrarPersona={borrarPersona}
              key={persona.id}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
