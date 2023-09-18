import React, { useState } from "react";
import "./App.css";
import "./App.css";
// Componentes de las páginas
import Encuestas from "./components/Encuestas";
function App() {
  // Estado para rastrear las encuestas
  const encuestas = [
    {
      id: 1,
      pregunta: "¿Cuál es tu color favorito?",
      opciones: ["Rojo", "Negro", "Blanco"],
    },
    {
      id: 2,
      pregunta: "¿Cuál es tu comida favorita?",
      opciones: ["Asado", "Hamburguesa", "Fideos"],
    },
  ];
  return (
    <div className="App">
      <h1>Aplicación de Encuestas</h1>
      {/* Contenido de las páginas */}
      <Encuestas encuestas={encuestas} />
    </div>
  );
}
export default App;
