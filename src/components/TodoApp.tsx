import { useState } from "react";
import { TaskList } from "./TaskList";

/**
 * Componente principal de la aplicación de lista de tareas.
 * Maneja el estado de las tareas y proporciona funciones para agregar y eliminar tareas.
 * 
 * @component
 * @example
 * return (
 *   <TodoApp />
 * )
 */
export const TodoApp = () => {
    
    /**
     * Estado para la nueva tarea que se está escribiendo.
     * @type {[string, Function]}
     */
    const [newTask, setNewTask] = useState<string>("");

    /**
     * Estado para la lista de tareas.
     * @type {[string[], Function]}
     */
    const [tasks, setTasks] = useState<string[]>([]);
    
    /**
     * Función para agregar una nueva tarea a la lista.
     * Si la nueva tarea está vacía, no hace nada.
     */
    const handleAddTask = () => {
        if (newTask.trim() === "") return;
        setTasks([...tasks, newTask]);
        setNewTask("");
    }
    
    /**
     * Función para eliminar una tarea de la lista por su índice.
     * @param {number} index - El índice de la tarea a eliminar.
     * @remarks Se usa la función `filter` para eliminar la tarea por su índice.
     * En `tasks.filter((_, i) => i !== index)`, el primer argumento es el valor de la tarea
     * y el segundo es el índice de la tarea. 
     * Se usa `_` para indicar que no se va a usar el valor de la tarea.
     */
    const handleDeleteTask = (index: number) => {
        const newTasks = tasks.filter((_, i) => i !== index); // Filtrar todas las tareas menos la que se quiere eliminar
        setTasks(newTasks);
    }
    
    return (
        <div>
            <h1>Lista de Tareas</h1>
            <div>
                <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") handleAddTask();
                    }}
                    placeholder="Nueva tarea"
                />
                <button onClick={handleAddTask}>Agregar Tarea</button>
            </div>
            <TaskList taskList={tasks} onDeleteTask={handleDeleteTask} />
        </div>
    )
}