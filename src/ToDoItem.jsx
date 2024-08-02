import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import ListItemText from '@mui/material/ListItemText';

export function ToDoItem({ completed, id, title, toggleTodo, deleteTodo }) {
  return (
    <ListItem key={id} sx={{
      boxShadow: 5,
      borderRadius: 2,
      p: 0.5,
      minWidth: 300,
      '&:not(:last-child)': {
        mb: 1.5
      }
    }}>
        <Button sx={{ m: 1.2, p: 0.4, }} onClick={() => deleteTodo(id)} variant="outlined" color="error">
          <DeleteIcon />
        </Button>
        <Checkbox label="" checked={completed} onChange={e => toggleTodo(id, e.target.checked)} />
        <ListItemText
          style={{ textDecoration : completed ? 'line-through' : 'none' }}
          primary={<Typography noWrap sx={{ whiteSpace: 'pre-line'}}>{title}</Typography>}
        />
    </ListItem>
  )
}
