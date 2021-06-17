import { useState } from "react";

export const Formulario = (props) => {
  const { anyadirPersona, idPersonaModificar } = props;
  debugger;

  const [persona, setPersona] = useState({
    nombre: "",
    apellidos: "",
    vivo: true,
  });
  return (
    <form
      className="row"
      noValidate
      onSubmit={(e) => anyadirPersona(e, idPersonaModificar, persona)}
    >
      <div className="form-group col-12">
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          id="nombre"
          value={persona.nombre}
          onChange={(e) => setPersona({ ...persona, nombre: e.target.value })}
        ></input>
      </div>
      <div className="form-group col-12">
        <label htmlFor="apellidos">Apellidos</label>
        <input
          type="text"
          id="apellidos"
          value={persona.apellidos}
          onChange={(e) =>
            setPersona({ ...persona, apellidos: e.target.value })
          }
        ></input>
      </div>
      <div className="form-group col-12">
        <label htmlFor="vivo">Vivo: </label>
        <input
          type="checkbox"
          id="vivo"
          value={persona.vivo}
          onChange={(e) => setPersona({ ...persona, vivo: e.target.checked })}
        ></input>
      </div>
      <button className="btn bg-primary">Guardar</button>
    </form>
  );
};
