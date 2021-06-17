export const Persona = (props) => {
  const {
    persona: { id, nombre, apellidos, vivo },
    borrarPersona,
  } = props;

  return (
    <li className="col">
      <div className="row">
        <p>{`Nombre: ${nombre}`}</p>
      </div>
      <div className="row">
        <p>{`Apellidos: ${apellidos}`}</p>
      </div>
      <div className="row">
        <p>{`Vivo: ${vivo}`}</p>
      </div>
      <div className="row botonera">
        <button className="btn bg-primary col-4">Editar</button>
        <button
          className="btn bg-danger col-4"
          onClick={() => borrarPersona(id)}
        >
          Borrar
        </button>
      </div>
    </li>
  );
};
