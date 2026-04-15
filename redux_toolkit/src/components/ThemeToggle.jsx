import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../store/themeSlice';

export default function ThemeToggle() {
  const theme = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();

  return (
    <div style={{ border: '1px solid gray', padding: '10px', margin: '10px 0' }}>
      <h3>Bài 2: Theme Toggle</h3>
      <p>Theme hiện tại: <strong>{theme.toUpperCase()}</strong></p>
      <button onClick={() => dispatch(toggleTheme())}>
        Đổi sang {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </div>
  );
}