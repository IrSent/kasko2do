import { useState } from 'react'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

export function AddTaskForm({ addTodo }) {
    const [newTodo, setNewTodo] = useState("")
  
    function handleSubmit(e) {
      e.preventDefault()
      if (newTodo === "") return
      addTodo(newTodo)
      setNewTodo("")
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <Box sx={{ my: 3 }}>
          <TextField
            fullWidth
            label="New Task"
            id="new_task"
            inputProps={{ maxLength: 60 }}
            value={newTodo}
            onChange={e => setNewTodo(e.target.value)} />
          <label htmlFor="new_task"></label>
        </Box>
        <Button type="submit" variant="contained" disabled={newTodo === ""}>Add</Button>
      </form>
    )
  }
