# Notas sobre el Proyecto de Lista de Tareas

## Explicación del Código

### `TodoApp.tsx`

Este es el componente principal de tu aplicación de lista de tareas. Maneja el estado de las tareas y proporciona funciones para agregar y eliminar tareas.

- **useState**: Utiliza el hook `useState` para manejar el estado de `newTask` (la nueva tarea que se está escribiendo) y `tasks` (la lista de tareas).
- **handleAddTask**: Función que agrega una nueva tarea a la lista si el campo de entrada no está vacío.
- **handleDeleteTask**: Función que elimina una tarea de la lista basada en su índice.
- **input**: Campo de entrada para escribir nuevas tareas. Al presionar "Enter", se llama a `handleAddTask`.
- **TaskList**: Componente que muestra la lista de tareas y permite eliminarlas.

### `TaskList.tsx`

Este componente recibe la lista de tareas y una función para eliminar tareas. Mapea cada tarea a un componente `Task`.

- **Props**: Define las propiedades que el componente espera recibir (`taskList` y `onDeleteTask`).
- **taskList.map**: Itera sobre la lista de tareas y crea un componente `Task` para cada una, pasando la tarea y la función `deleteTask`.

### `Task.tsx`

Este componente representa una tarea individual con un botón para eliminarla.

- **Props**: Define las propiedades que el componente espera recibir (`task` y `deleteTask`).
- **deleteTask**: Función que se llama cuando se hace clic en el botón "Eliminar".