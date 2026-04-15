import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from '../store/authSlice';

export default function Auth() {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const handleLogin = () => {
    const fakeUserData = { id: 1, username: 'Chuan', role: 'admin' };
    dispatch(login(fakeUserData));
  };

  return (
    <div style={{ border: '1px solid gray', padding: '10px', margin: '10px 0' }}>
      <h3>Bài 3: Auth Giả lập</h3>
      {user ? (
        <div>
          <p>Xin chào, <strong>{user.username}</strong>!</p>
          <button onClick={() => dispatch(logout())}>Đăng xuất</button>
        </div>
      ) : (
        <div>
          <p>Bạn chưa đăng nhập.</p>
          <button onClick={handleLogin}>Đăng nhập (Giả lập)</button>
        </div>
      )}
    </div>
  );
}