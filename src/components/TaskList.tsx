import { Task } from "./Task";

/**
 * Componente que muestra una lista de tareas.
 * 
 * @component
 * @param {Object} props - Las propiedades del componente.
 * @param {string[]} props.taskList - Lista de tareas.
 * @param {(index: number) => void} props.onDeleteTask - Función para eliminar una tarea por su índice.
 * @example
 * const tasks = ["Tarea 1", "Tarea 2"];
 * const handleDeleteTask = (index) => { ... };
 * return (
 *   <TaskList taskList={tasks} onDeleteTask={handleDeleteTask} />
 * )
 */
type Props = {
    taskList: string[];
    onDeleteTask: (index: number) => void;
}

export const TaskList = ({ taskList, onDeleteTask }: Props) => {
    return (
        <div className="taskList">
            {taskList.map((task, index) => (
                <Task
                    key={index}
                    task={task}
                    deleteTask={() => onDeleteTask(index)}
                />
            ))}
        </div>
    )
}