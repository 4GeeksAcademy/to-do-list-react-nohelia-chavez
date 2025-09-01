import { useState, useEffect } from "react";

export default function TodoList() {
  const [textUser, setAddTextTask] = useState("");   // lo que escribe el usuario
  const [tasksUser, setTasksUser] = useState([]); // lista actual

  const cleanTasks = () => setTasksUser([]);      // dejar todo vacío

  // “window.onload” con useEffect
  useEffect(() => {
    console.log("Componente cargado (window.onload)");
  }, []);

  const addTask = () => {
    const t = textUser.trim();
    if (t) {
      setTasksUser([...tasksUser, t]);
      setAddTextTask("");
    }
    return
  };

  const clickKey = (words) => {
    if (words.key === "Enter") addTask(); // Enter agrega
  };


  const deleteTask = (deleteIndex) => {
    let tasks = tasksUser.filter((task, currentIndex) => currentIndex !== deleteIndex);
    
    setTasksUser(tasks);
  };


  return (
    <div className="container py-5">
      <div className="card shadow pastel-card">
        <div className="card-body">
          <h1 className="h2 fw-bold text-center mb-4">
            <span className="first-title">Lista de Tareas · Inventario</span>
          </h1>

          {/* Input controlado */}
          <div className="input-group mb-5">
            <input
              className="form-control pastel-input"
              placeholder="Escribe y presiona Enter…"
              value={textUser}
              onChange={(words) => setAddTextTask(words.target.value)}
              onKeyDown={clickKey}
            />
            <button className="btn btn-dark añadir-btn" onClick={addTask}>
              Añadir
            </button>
          </div>

          {/* Lista */}
          <ul className="list-group pastel-list">
            {tasksUser.length === 0 && (
              <li className="list-group-item text-center text-muted">
                No tienes tareas pendientes 👍🏼
              </li>
            )}

            {tasksUser.map((t, i) => (
              <li
                key={i}
                className="list-group-item d-flex justify-content-between align-items-center item-tarea"
              >
                <span>{t}</span>
                <button
                  className="btn btn-sm btn-outline-secondary btn-x"
                  onClick={() => deleteTask(i)}
                  title="Eliminar"
                >
                  ×
                </button>
              </li>
            ))}
          </ul>

          {/* Botón limpiar:*/}
          {tasksUser.length > 0 && (
            <div className="text-end mt-3">
              <button className="btn btn-outline-danger btn-sm" onClick={cleanTasks}>
                Limpiar todo
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
