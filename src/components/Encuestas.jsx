import React from "react";
function Encuestas({ encuestas }) {
  return (
    <div>
      <h2>Encuestas Disponibles</h2>
      <ul>
        {encuestas.map((encuesta) => (
          <li key={encuesta.id}>
            {encuesta.pregunta}
            <ul>
              <li>{encuesta.opciones[0]}</li>
              <li>{encuesta.opciones[1]}</li>
              <li>{encuesta.opciones[2]}</li>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Encuestas;
