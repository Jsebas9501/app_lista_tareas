import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

const FormularioTareas = ({ tareas, cambiarTareas }) => {
  const [inputTarea, cambiarInputTarea] = useState('');

  const handleInput = (e) => {
    cambiarInputTarea(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    //Con los tres puntos ...  queremos decir que tome lo que ya esta en el arreglo y agrege lo nuevo
    cambiarTareas([
      ...tareas,
      {
        id: uuidv4(),
        texto: inputTarea,
        completada: false
      },
    ]);
  };

  return (
    <form action="" className="formulario-tareas" onSubmit={handleSubmit}>
      <input
        type="text"
        className="formulario-tareas__input"
        placeholder="Escribe una tarea"
        value={inputTarea}
        onChange={(e) => handleInput(e)}
      />
      <button type="submit" className="formulario-tareas__btn">
        <FontAwesomeIcon
          icon={faPlusCircle}
          className="formulario-tareas__icono-btn"
        />
      </button>
    </form>
  );
};

export default FormularioTareas;
