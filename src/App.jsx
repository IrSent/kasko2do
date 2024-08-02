import { useState } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
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
      <Box sx={{ my: 3 }}>
        <Typography variant='h1'
          sx={{
            borderRadius: 2,
            textAlign: 'center',
            background: 'rgba(35, 35, 35, 1)',
            textShadow: '0px 0px 5px rgba(255, 255, 255, 1), 0px 0px 10px rgba(255, 255, 255, 1), 0px 0px 15px rgba(255, 255, 255, 1), 0px 0px 20px rgba(73, 255, 24, 1), 0px 0px 30px rgba(73, 255, 24, 1), 0px 0px 40px rgba(73, 255, 24, 1), 0px 0px 55px rgba(73, 255, 24, 1), 0px 0px 75px rgba(73, 255, 24, 1)'
          }}>Kasko2Do</Typography>
        <AddTaskForm addTodo={addTodo}></AddTaskForm>
        <ToDoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} ></ToDoList>
      </Box>
    </Container>
  )
}
