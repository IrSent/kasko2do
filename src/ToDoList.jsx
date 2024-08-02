import { ToDoItem } from "./ToDoItem"
import List from '@mui/material/List';

export function ToDoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <List>
      {todos.length === 0 && "Do something already!"}
      {todos.map(todo => {
        return (
          <ToDoItem
            {...todo}
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        )
      })}
    </List>
  )
}