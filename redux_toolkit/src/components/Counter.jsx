import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../store/counterSlice';

export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div style={{ border: '1px solid gray', padding: '10px', margin: '10px 0' }}>
      <h3>Bài 1: Counter Global</h3>
      <p style={{ fontSize: '24px', fontWeight: 'bold' }}>Count: {count}</p>
      
      <div>
        <button onClick={() => dispatch(decrement())} style={{ marginRight: '10px' }}>➖ Giảm</button>
        <button onClick={() => dispatch(increment())}>➕ Tăng</button>
      </div>
    </div>
  );
}