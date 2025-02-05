/**
 * Componente que representa una tarea individual.
 * 
 * @component
 * @param {Object} props - Las propiedades del componente.
 * @param {string} props.task - La tarea a mostrar.
 * @param {() => void} props.deleteTask - Función para eliminar la tarea.
 * @example
 * const task = "Tarea 1";
 * const handleDeleteTask = () => { ... };
 * return (
 *   <Task task={task} deleteTask={handleDeleteTask} />
 * )
 */
type Props = {
    task: string;
    deleteTask: () => void;
}

export const Task = ({ task, deleteTask }: Props) => {
    return (
        <div className="task">
            <span>{task}</span>
            <button onClick={deleteTask}>Eliminar</button>
        </div>
    )
}