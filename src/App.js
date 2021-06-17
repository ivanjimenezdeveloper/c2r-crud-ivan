import { useRef, useState } from "react";
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
  const [idPersonaModificar, setIdPersonaModificar] = useState(-1);

  const [activarFormulario, setActivarFormulario] = useState(false);

  const anyadirPersonaBoton = () => {
    setActivarFormulario(true);
    setIdPersonaModificar(-1);
  };

  const anyadirPersona = (e, id, personaNueva) => {
    e.preventDefault();
    let personasTemp;
    if (id === -1) {
      let ultimaId = personas[personas.length - 1].id;
      personasTemp = personas;

      personasTemp.push({
        id: ++ultimaId,
        nombre: personaNueva.nombre,
        apellidos: personaNueva.apellidos,
        vivo: personaNueva.vivo,
      });
    } else {
      personasTemp = personas.map((persona) => {
        if (persona.id === id) {
          return { ...personaNueva, id };
        }
        return persona;
      });
    }

    setPersonas([...personasTemp]);
    setActivarFormulario(false);
  };

  const editarPersona = (id) => {
    setActivarFormulario(true);
    setIdPersonaModificar(personas.find((persona) => persona.id === id).id);
  };

  const borrarPersona = (id) => {
    setPersonas(personas.filter((persona) => persona.id !== id));
  };

  return (
    <div className="row container-fluid">
      <div className="col">
        <Menu anyadirPersona={anyadirPersonaBoton} />
        <ul className="row">
          {personas.map((persona) => (
            <Persona
              persona={persona}
              borrarPersona={borrarPersona}
              editarPersona={editarPersona}
              key={persona.id}
            />
          ))}
        </ul>

        {activarFormulario && (
          <Formulario
            anyadirPersona={anyadirPersona}
            idPersonaModificar={idPersonaModificar}
          />
        )}
      </div>
    </div>
  );
}

export default App;
