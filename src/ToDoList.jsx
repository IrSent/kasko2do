import List from '@mui/material/List';
import { ToDoItem } from "./ToDoItem";

export function ToDoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <List sx={{ pt: 3 }}>
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