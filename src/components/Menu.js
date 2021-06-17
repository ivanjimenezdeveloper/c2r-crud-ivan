export const Menu = (props) => {
  const { anyadirPersona } = props;
  return (
    <div className="row">
      <button className="btn bg-primary" onClick={anyadirPersona}>
        Añadir Persona
      </button>
    </div>
  );
};
