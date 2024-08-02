import { useState } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container';
import { AddTaskForm } from './AddTaskForm'
import { ToDoList } from './ToDoList'

export default function App() {
  const [todos, setTodos] = useState([])

  function addTodo(title) {
    setTodos(currentTodos => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ]
    })
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        }

        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 6 }}>
        <ToDoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} ></ToDoList>
        <AddTaskForm addTodo={addTodo}></AddTaskForm>
      </Box>
    </Container>
  )
}
