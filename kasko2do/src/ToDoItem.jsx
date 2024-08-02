import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import ListItem from '@mui/material/ListItem';

export function ToDoItem({ completed, id, title, toggleTodo, deleteTodo }) {
  return (
    <ListItem>
        <FormControlLabel
          control={<Checkbox checked={completed} onChange={e => toggleTodo(id, e.target.checked)} />}
          label={title}
          >
        </FormControlLabel>
        
      <Button onClick={() => deleteTodo(id)} variant="outlined" color="error">Delete</Button>
    </ListItem>
  )
}
