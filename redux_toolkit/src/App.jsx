import { useSelector, useDispatch } from 'react-redux';
import { addNotification } from './store/notificationSlice';

import Counter from './components/Counter';
import ThemeToggle from './components/ThemeToggle';
import Auth from './components/Auth';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import Cart from './components/Cart';
import NotificationContainer from './components/NotificationContainer';

function App() {
  const theme = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();

  const appStyle = {
    minHeight: '100vh',
    padding: '20px',
    backgroundColor: theme === 'light' ? '#f0f2f5' : '#18191a',
    color: theme === 'light' ? '#242526' : '#e4e6eb',
    transition: 'all 0.3s ease',
    fontFamily: 'system-ui, -apple-system, sans-serif'
  };

  const containerStyle = {
    maxWidth: '800px',
    margin: '0 auto',
    backgroundColor: theme === 'light' ? '#ffffff' : '#242526',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: theme === 'light' ? '0 4px 12px rgba(0,0,0,0.1)' : '0 4px 12px rgba(0,0,0,0.5)'
  };

  const sectionStyle = {
    marginBottom: '25px',
    padding: '20px',
    border: `1px solid ${theme === 'light' ? '#e4e6eb' : '#3a3b3c'}`,
    borderRadius: '8px'
  };

  return (
    <div style={appStyle}>
      <NotificationContainer />

      <div style={containerStyle}>
        <h1 style={{ textAlign: 'center', color: theme === 'light' ? '#0866ff' : '#4599ff', marginBottom: '10px' }}>
          Báo cáo Lab 6 - Redux Toolkit
        </h1>

        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <button
            onClick={() => dispatch(addNotification('Chạy ngon lành'))}
            style={{ 
              padding: '12px 24px', cursor: 'pointer', backgroundColor: '#00a400', 
              color: '#fff', border: 'none', borderRadius: '6px', fontWeight: 'bold', fontSize: '16px' 
            }}
          >
            Bắn Toast Test (Bài 6)
          </button>
        </div>

        <div style={sectionStyle}>
          <ThemeToggle />
        </div>

        <div style={sectionStyle}>
          <Auth />
        </div>

        <div style={sectionStyle}>
          <Counter />
        </div>

        <div style={sectionStyle}>
          <h3>Bài 4: Quản lý công việc (Todo List)</h3>
          <div style={{ marginBottom: '15px' }}>
            <TodoInput />
          </div>
          <TodoList />
        </div>

        <div style={sectionStyle}>
          <Cart />
        </div>

      </div>
    </div>
  );
}

export default App;