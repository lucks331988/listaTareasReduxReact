import React, { useState } from "react";
import { connect } from "react-redux";
import { add_tarea, delete_tarea, completed_tarea } from "../Redux/actions";
import styles from "./NuevaTareas.module.css"; 

function NuevaTareas({ tareas, add_tarea, delete_tarea, completed_tarea }) {
  const [newTareas, setNewTareas] = useState("");

  const handleAddTareas = () => {
    if (newTareas.trim() !== "") {
      add_tarea(newTareas);
      setNewTareas("");
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Lista de Tareas:</h2>
      <div>
        <ul className={styles.list}> 
          {tareas.map((tarea) => (
            <li key={tarea.id} className={styles.listItem}> 
              <input
                type="checkbox"
                checked={tarea.completed}
                onChange={() => completed_tarea(tarea.id)}
              />
              <span
                className={`${styles.text} ${tarea.completed ? styles.completedText : ""}`}
              >
                {tarea.text}
              </span>
              <button onClick={() => delete_tarea(tarea.id)} className={styles.button}> 
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      </div>
      <input
        type="text"
        placeholder="Ingrese nueva tarea..."
        value={newTareas}
        onChange={(e) => {
          setNewTareas(e.target.value);
        }}
        className={styles.input} 
      />
      <button onClick={handleAddTareas} className={styles.button}> 
        Agregar Tarea
      </button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  tareas: state.tareas,
});

const mapDispatchToProps = {
  add_tarea,
  delete_tarea,
  completed_tarea,
};

export default connect(mapStateToProps, mapDispatchToProps)(NuevaTareas);
