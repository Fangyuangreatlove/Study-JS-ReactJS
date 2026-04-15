import { useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo } from '../store/todoSlice';

export default function TodoItem({ todo }) {
  const dispatch = useDispatch();
  return (
    <li style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
      <span onClick={() => dispatch(toggleTodo(todo.id))} style={{ cursor: 'pointer' }}>
        {todo.text}
      </span>
      <button onClick={() => dispatch(deleteTodo(todo.id))} style={{ marginLeft: '10px' }}>Xóa</button>
    </li>
  );
}