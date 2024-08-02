import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

export function AddTaskForm({ addTodo }) {
    const [newTodo, setNewTodo] = useState("")
  
    function handleSubmit(e) {
      e.preventDefault()
      if (newTodo === "") return
      addTodo(newTodo)
      setNewTodo("")
    }

    const handleKeyDown = e => {
      if ((e.which === 13) || (e.keyCode === 13 && e.shiftKey)) {
        handleSubmit(e);
      }
    };
  
    return (
      <Box component="form" onSubmit={handleSubmit}>
        <Box sx={{ my: 3 }}>
          <TextField
            autoFocus={true}
            fullWidth
            multiline
            label="New Task"
            id="new_task"
            value={newTodo}
            onKeyDown={handleKeyDown}
            onChange={e => setNewTodo(e.target.value)} />
        </Box>
        <Button type="submit" variant="contained" disabled={!newTodo}>Add</Button>
      </Box>
    )
  }
